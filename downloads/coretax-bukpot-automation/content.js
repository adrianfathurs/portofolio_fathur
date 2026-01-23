/**
 * Content Script - Runs on Coretax pages
 * Handles table scanning, downloading, and pagination
 */

class CoretaxAutomation {
  constructor() {
    this.isRunning = false;
    this.stopRequested = false;
    this.stats = {
      pages: 0,
      downloaded: 0,
      failed: 0
    };
    this.settings = {
      delay: 500,
      autoScroll: true
    };

    this.selectors = {
      // Coretax specific table selectors
      tableBody: 'tbody.p-datatable-tbody, tbody, .p-datatable-tbody',
      tableRow: 'tr.ng-star-inserted, tr, [class*="ng-star-inserted"]',

      // Coretax download button - exact match from inspect element
      downloadButton: 'button#ActionDownloadButton, button.ct-ovw-btn-mini-save, button[id="ActionDownloadButton"], button[class*="ct-ovw-btn-mini-save"], button[class*="btn-save"]',

      // Next button for pagination
      nextButton: 'button.p-paginator-next, .p-paginator-next, [aria-label="Next Page"], [class*="paginator-next"], [class*="pagination-next"]',

      // Current page indicator
      currentPage: '.p-paginator-page.p-paginator-page-active, .p-highlight, [class*="paginator-page"][class*="active"], [class*="page-active"]'
    };

    this.init();
  }

  init() {
    this.log('info', 'Content script loaded');
    this.log('info', 'Current page: ' + window.location.href);

    // Add debug: Log all buttons on page
    setTimeout(() => {
      this.debugPage();
    }, 2000);

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      this.handleMessage(message, sendResponse);
      return true; // Keep message channel open
    });
  }

  debugPage() {
    try {
      // Log all buttons/links found
      const allButtons = document.querySelectorAll('button, a, [role="button"]');
      this.log('info', 'Page has ' + allButtons.length + ' buttons/links total');

      // Find download-related buttons
      let downloadCount = 0;
      allButtons.forEach((btn, index) => {
        const text = (btn.textContent || '').trim().toLowerCase();
        const title = (btn.getAttribute('title') || '').toLowerCase();
        const className = (btn.className || '').toLowerCase();

        if (text.includes('unduh') || text.includes('download') ||
            title.includes('unduh') || title.includes('download') ||
            className.includes('download') || className.includes('unduh')) {
          downloadCount++;
          if (downloadCount <= 5) { // Only log first 5
            this.log('info', 'Found: ' + btn.tagName + '.' + className + ' - "' + text.substring(0, 30) + '"');
          }
        }
      });

      this.log('info', 'Total download-related buttons: ' + downloadCount);

      // Log table info
      const tables = document.querySelectorAll('table, .table, [class*="table"]');
      this.log('info', 'Found ' + tables.length + ' table(s) on page');

    } catch (error) {
      this.log('warning', 'Debug error: ' + error.message);
    }
  }

  handleMessage(message, sendResponse) {
    switch (message.action) {
      case 'ping':
        sendResponse({ ready: true });
        break;

      case 'start':
        this.settings = Object.assign({}, this.settings, message.settings);
        this.start();
        sendResponse({ success: true });
        break;

      case 'stop':
        this.stop();
        sendResponse({ success: true });
        break;

      case 'getStats':
        sendResponse({ stats: this.stats });
        break;
    }
  }

  async start() {
    if (this.isRunning) return;

    this.isRunning = true;
    this.stopRequested = false;
    this.log('info', 'Automation started');

    try {
      // Validate page
      const isValid = await this.validatePage();
      if (!isValid) {
        throw new Error('Invalid page. Please navigate to Bukti Potong page.');
      }

      // Process all pages
      await this.processAllPages();

      // Send completion message
      this.sendMessage('complete', { data: this.stats });
      this.log('success', '========================================');
      this.log('success', 'SELESAI!');
      this.log('success', '✓ Berhasil: ' + this.stats.downloaded + ' dokumen');
      if (this.stats.failed > 0) {
        this.log('error', '✗ Gagal: ' + this.stats.failed + ' dokumen');
      }
      this.log('success', '========================================');

    } catch (error) {
      this.sendMessage('error', { message: error.message });
      this.log('error', error.message);
    } finally {
      this.isRunning = false;
    }
  }

  stop() {
    this.stopRequested = true;
    this.log('warning', 'Stop requested');
  }

  async validatePage() {
    const url = window.location.href;

    // More flexible URL check
    const isCoretax = url.includes('pajak.go.id') || url.includes('coretax');

    if (!isCoretax) {
      this.log('error', 'Not on Coretax page');
      this.log('info', 'Current URL: ' + url);
      return false;
    }

    this.log('success', 'URL validated: ' + url.substring(0, 60) + '...');

    // Try to find table with multiple strategies
    let table = await this.waitForElement(this.selectors.tableBody, 3000);

    if (!table) {
      // Fallback: look for any table-like structure
      this.log('warning', 'Standard table not found, trying fallback...');

      // Try common table containers
      const fallbackSelectors = [
        'table',
        '.table',
        '[class*="table"]',
        '[class*="datatable"]',
        '[class*="grid"]',
        'div[class*="tbody"]',
        'div[class*="list"]'
      ];

      for (const selector of fallbackSelectors) {
        table = document.querySelector(selector);
        if (table) {
          this.log('info', 'Found table via fallback: ' + selector);
          this.selectors.tableBody = selector;
          break;
        }
      }
    }

    if (!table) {
      this.log('error', 'No table found on page');
      this.log('info', 'Please make sure you are on the document list page');
      return false;
    }

    this.log('success', 'Page validated successfully');
    return true;
  }

  async processAllPages() {
    let hasNextPage = true;

    this.log('info', '========================================');
    this.log('info', 'Starting bulk download automation');
    this.log('info', '========================================');

    while (hasNextPage && !this.stopRequested) {
      // Get current page number
      const currentPageNum = this.getCurrentPageNumber();

      this.sendMessage('action', { action: 'Processing page ' + currentPageNum });
      this.log('info', '========================================');
      this.log('info', 'Processing Page ' + currentPageNum);
      this.log('info', '========================================');

      // Get rows with download buttons
      const rows = await this.scanTable();

      if (rows.length === 0) {
        this.log('warning', 'No downloadable documents found on this page');
      } else {
        // Download all rows
        await this.downloadRows(rows);
        this.stats.pages++;
        this.sendStats();
      }

      // Check for next page
      this.log('info', 'Checking for next page...');
      hasNextPage = await this.hasNextPage();

      if (hasNextPage && !this.stopRequested) {
        this.log('info', 'More pages available, proceeding to next page...');
        await this.goToNextPage();
        await this.sleep(2000);
      } else if (!hasNextPage) {
        this.log('success', '========================================');
        this.log('success', 'Reached the last page - Automation complete!');
        this.log('success', '========================================');
      }
    }
  }

  getCurrentPageNumber() {
    try {
      // Coretax pagination uses p-paginator-page with p-highlight for active page
      const activePageButton = document.querySelector('button.p-paginator-page.p-highlight');

      if (activePageButton) {
        const pageNum = activePageButton.textContent.trim();
        return parseInt(pageNum) || this.stats.pages + 1;
      }

      return this.stats.pages + 1;
    } catch (error) {
      return this.stats.pages + 1;
    }
  }

  async scanTable() {
    this.log('info', '========================================');
    this.log('info', 'Scanning tabel...');
    this.log('info', '========================================');

    const rows = document.querySelectorAll(this.selectors.tableRow);
    this.log('info', 'Ditemukan ' + rows.length + ' baris di tabel');

    const results = [];

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];

      try {
        // Get all cells from the row
        const cells = row.querySelectorAll('td');
        let identifier = null;

        // Strategy: Find cell with "Nomor Dokumen" column title
        for (let cellIndex = 0; cellIndex < cells.length; cellIndex++) {
          const cell = cells[cellIndex];

          // Check if this cell contains "Nomor Dokumen" span
          const titleSpan = cell.querySelector('span.p-column-title');
          if (titleSpan && titleSpan.textContent.includes('Nomor Dokumen')) {
            // Get all text content and remove the "Nomor Dokumen" label
            let fullText = cell.textContent.trim();

            // Remove "Nomor Dokumen" and clean up
            identifier = fullText
              .replace(/Nomor Dokumen/gi, '')
              .replace(/^\s+|\s+$/g, '')  // trim
              .replace(/\s+/g, ' ');       // collapse multiple spaces

            if (identifier) {
              break;  // Found it!
            }
          }
        }

        // Fallback: If no "Nomor Dokumen" column found, use first reasonable cell
        if (!identifier) {
          for (let cellIndex = 0; cellIndex < Math.min(3, cells.length); cellIndex++) {
            const cell = cells[cellIndex];
            const cellText = cell.textContent.trim();

            // Skip if empty or too short
            if (!cellText || cellText.length < 5) continue;

            // Skip if it's just a label
            const lowerText = cellText.toLowerCase();
            if (lowerText === 'nomor' || lowerText === 'tanggal' || lowerText === 'dokumen') continue;
            if (lowerText === 'jenis' || lowerText === 'aksi' || lowerText === 'action') continue;

            // Use this as identifier
            identifier = cellText;
            break;
          }
        }

        // Final fallback
        if (!identifier) {
          identifier = 'Dokumen-' + (i + 1);
        }

        // Count how many "Unduh" buttons in this row
        const buttonsInRow = row.querySelectorAll('button, a');
        let downloadButtonCount = 0;

        for (const btn of buttonsInRow) {
          const text = (btn.textContent || '').trim();
          if (text === 'Unduh' || text === 'UNDUH' || text === 'unduh') {
            downloadButtonCount++;
          }
        }

        if (downloadButtonCount > 0) {
          results.push({
            index: i,
            identifier: identifier,
            row: row,
            buttonCount: downloadButtonCount
          });

          // Log first few for debugging
          if (i < 3) {
            this.log('info', '✓ Baris ' + (i + 1) + ': ' + identifier);
          }
        }

      } catch (error) {
        this.log('warning', 'Error scanning row ' + (i + 1) + ': ' + error.message);
      }
    }

    if (results.length === 0) {
      this.log('error', 'Tidak ada tombol unduh yang ditemukan!');
      this.log('info', 'Pastikan Anda berada di halaman daftar dokumen');
    } else {
      this.log('success', '========================================');
      this.log('success', 'Scanning selesai!');
      this.log('success', 'Ditemukan ' + results.length + ' dokumen dengan tombol unduh');
      this.log('success', '========================================');
    }

    return results;
  }

  async downloadRows(rows) {
    const total = rows.length;

    this.log('info', '========================================');
    this.log('info', 'Memulai download ' + total + ' dokumen...');
    this.log('info', '========================================');

    for (let i = 0; i < rows.length; i++) {
      if (this.stopRequested) break;

      const row = rows[i];
      const docNumber = row.identifier;

      // Log sebelum mulai proses (1-based indexing untuk user-friendly)
      const progressNum = i + 1;
      this.log('info', '----------------------------------------');
      this.log('info', '[' + progressNum + '/' + total + '] Mendownload: ' + docNumber);

      // Update progress dan action di UI
      this.sendMessage('progress', { current: progressNum, total });
      this.sendMessage('action', { action: '[' + progressNum + '/' + total + '] ' + docNumber });

      // KEY: Re-find the row element from DOM to ensure we have the correct row
      const currentRows = document.querySelectorAll('tr.ng-star-inserted');
      const currentRow = currentRows[i];

      if (!currentRow) {
        // Row element changed - skip silently without counting as failure
        this.log('info', '⊘ Melewati: ' + docNumber);
        continue;
      }

      // Find the download button WITHIN THIS ROW using class selector
      // IMPORTANT: Don't use ID because it's the same for all rows
      const downloadButton = currentRow.querySelector('button.ct-ovw-btn-mini-save');

      if (!downloadButton) {
        // Fallback: find by text content
        const buttons = currentRow.querySelectorAll('button');
        let found = false;
        for (const btn of buttons) {
          const text = (btn.textContent || '').trim();
          if (text === 'Unduh') {
            const success = await this.clickButtonAndWait(btn, docNumber);
            if (success) {
              this.stats.downloaded++;
            }
            found = true;
            break;
          }
        }

        if (!found) {
          // Row doesn't have download button - skip without counting as failure
          this.log('info', '⊘ Tidak ada tombol unduh: ' + docNumber);
        }
      } else {
        // Found via class selector - this is the CORRECT way
        const success = await this.clickButtonAndWait(downloadButton, docNumber);
        if (success) {
          this.stats.downloaded++;
        }
      }

      this.sendStats();

      // Wait before next row
      if (i < rows.length - 1 && !this.stopRequested) {
        await this.sleep(2500);
      }
    }

    this.log('info', '========================================');
  }

  async clickButtonAndWait(button, identifier) {
    try {
      // Scroll to button
      button.scrollIntoView({ behavior: 'smooth', block: 'center' });
      await this.sleep(500);

      // Click the button
      button.click();

      // Wait for download to complete
      await this.sleep(3000);

      // Log success result
      this.log('success', '✓ BERHASIL: ' + identifier);
      return true;
    } catch (error) {
      // Log error result
      this.log('error', '✗ GAGAL: ' + identifier + ' - ' + error.message);
      this.stats.failed++;
      return false;
    }
  }

  async downloadRow(rowData) {
    try {
      const { row, button, identifier } = rowData;

      this.log('info', '========================================');
      this.log('info', 'Processing: ' + identifier);
      this.log('info', '========================================');

      // Scroll button into view
      if (this.settings.autoScroll && button && button.scrollIntoView) {
        button.scrollIntoView({ behavior: 'smooth', block: 'center' });
        await this.sleep(500);
      }

      this.log('info', 'Clicking download button...');

      // Click download button
      button.click();

      // Wait for download to start
      this.log('info', 'Waiting for download to start...');
      await this.sleep(1000);

      // Check if any modal/popup appears and close it
      await this.closeModalIfNeeded();

      // Wait longer for download to complete
      this.log('info', 'Waiting for download to complete...');
      await this.sleep(3000);

      this.log('success', '✓ Download complete: ' + identifier);
      return true;
    } catch (error) {
      this.log('error', 'Download error: ' + error.message);
      this.log('error', 'Error details: ' + error.stack);
      return false;
    }
  }

  async closeModalIfNeeded() {
    try {
      // Look for common modal/popup elements that might appear
      const modalSelectors = [
        '[role="dialog"]',
        '.modal',
        '.popup',
        '.dialog',
        '[class*="modal"]',
        '[class*="popup"]',
        '[class*="dialog"]',
        'p-confirmpopup',
        'p-dialog'
      ];

      for (const selector of modalSelectors) {
        const modal = document.querySelector(selector);
        if (modal) {
          this.log('info', 'Modal detected, attempting to close...');

          // Try to find close button
          const closeButton = modal.querySelector('button[aria-label="Close"], button.close, .close, [class*="close"], .p-dialog-header-close');

          if (closeButton) {
            closeButton.click();
            this.log('info', 'Closed modal via close button');
            await this.sleep(500);
            return;
          }

          // Try ESC key
          const escEvent = new KeyboardEvent('keydown', {
            key: 'Escape',
            code: 'Escape',
            keyCode: 27,
            which: 27,
            bubbles: true,
            cancelable: true
          });
          document.dispatchEvent(escEvent);
          this.log('info', 'Sent ESC key to close modal');
          await this.sleep(500);
          return;
        }
      }
    } catch (error) {
      this.log('warning', 'Could not close modal: ' + error.message);
    }
  }

  async hasNextPage() {
    try {
      // Coretax uses p-paginator-next button
      const nextButton = document.querySelector('button.p-paginator-next');

      if (!nextButton) {
        this.log('warning', 'Next button not found');
        return false;
      }

      // Check if button has p-disabled class or disabled attribute
      const isDisabled = nextButton.classList.contains('p-disabled') ||
                        nextButton.hasAttribute('disabled') ||
                        nextButton.disabled === true;

      if (isDisabled) {
        this.log('info', 'Next page button is disabled - reached last page');
        return false;
      }

      return true;
    } catch (error) {
      this.log('error', 'Error checking next page: ' + error.message);
      return false;
    }
  }

  async goToNextPage() {
    try {
      this.log('info', 'Going to next page...');

      // Coretax pagination button
      const nextButton = document.querySelector('button.p-paginator-next');

      if (!nextButton) {
        this.log('warning', 'Next button not found');
        return false;
      }

      // Check if disabled before clicking
      if (nextButton.classList.contains('p-disabled') || nextButton.disabled) {
        this.log('info', 'Already on last page');
        return false;
      }

      // Click next button
      this.log('info', 'Clicking next page button...');
      nextButton.click();

      // Wait for page to load
      this.log('info', 'Waiting for page to load...');
      await this.sleep(2000);

      // Wait for table body to be present
      const tableBody = await this.waitForElement('tbody.p-datatable-tbody, tbody', 10000);

      if (!tableBody) {
        this.log('error', 'Table not found after page load');
        return false;
      }

      // Additional wait for Angular to render
      await this.sleep(1500);

      this.log('success', 'Successfully moved to next page');
      return true;
    } catch (error) {
      this.log('error', 'Failed to go to next page: ' + error.message);
      return false;
    }
  }

  waitForElement(selector, timeout = 5000) {
    return new Promise((resolve) => {
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
        return;
      }

      const observer = new MutationObserver(() => {
        const element = document.querySelector(selector);
        if (element) {
          observer.disconnect();
          resolve(element);
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      setTimeout(() => {
        observer.disconnect();
        resolve(null);
      }, timeout);
    });
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  sendMessage(type, data) {
    chrome.runtime.sendMessage({
      type,
      ...data
    }).catch(() => {
      // Popup might be closed, ignore error
    });
  }

  sendStats() {
    this.sendMessage('stats', { data: this.stats });
  }

  log(level, message) {
    console.log('[Coretax Automation] ' + level.toUpperCase() + ': ' + message);
    this.sendMessage('log', { level, message });
  }
}

// Initialize automation when content script loads
const automation = new CoretaxAutomation();
