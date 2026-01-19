/**
 * Side Panel UI Controller
 * Handles all UI interactions and communication with content script
 */

class SidePanelController {
  constructor() {
    this.isRunning = false;
    this.stats = {
      pages: 0,
      downloaded: 0,
      failed: 0
    };
    this.settings = {
      delay: 500,
      autoScroll: true
    };

    this.init();
  }

  init() {
    this.cacheElements();
    this.bindEvents();
    this.loadSettings();
    this.checkActiveTab();
  }

  cacheElements() {
    this.elements = {
      startBtn: document.getElementById('startBtn'),
      stopBtn: document.getElementById('stopBtn'),
      resetBtn: document.getElementById('resetBtn'),
      clearLogBtn: document.getElementById('clearLogBtn'),
      helpLink: document.getElementById('helpLink'),

      status: document.getElementById('status'),
      statusDot: document.querySelector('.status-dot'),
      statusText: document.querySelector('.status-text'),

      progressSection: document.getElementById('progressSection'),
      progressText: document.getElementById('progressText'),
      progressBar: document.getElementById('progressBar'),
      currentAction: document.getElementById('currentAction'),

      statsSection: document.getElementById('statsSection'),
      pageCount: document.getElementById('pageCount'),
      downloadCount: document.getElementById('downloadCount'),
      failCount: document.getElementById('failCount'),

      logContainer: document.getElementById('logContainer'),

      delayRange: document.getElementById('delayRange'),
      delayValue: document.getElementById('delayValue'),
      autoScroll: document.getElementById('autoScroll')
    };
  }

  bindEvents() {
    this.elements.startBtn.addEventListener('click', () => this.handleStart());
    this.elements.stopBtn.addEventListener('click', () => this.handleStop());
    this.elements.resetBtn.addEventListener('click', () => this.handleReset());
    this.elements.clearLogBtn.addEventListener('click', () => this.clearLogs());
    this.elements.helpLink.addEventListener('click', () => this.showHelp());

    this.elements.delayRange.addEventListener('input', (e) => {
      this.settings.delay = parseInt(e.target.value);
      this.elements.delayValue.textContent = this.settings.delay;
      this.saveSettings();
    });

    this.elements.autoScroll.addEventListener('change', (e) => {
      this.settings.autoScroll = e.target.checked;
      this.saveSettings();
    });

    // Listen for messages from content script
    chrome.runtime.onMessage.addListener((message) => {
      this.handleContentMessage(message);
    });
  }

  async checkActiveTab() {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

      // More flexible URL check - accept pajak.go.id domains
      const isCoretax = tab.url.includes('pajak.go.id') ||
                       tab.url.includes('coretax');

      if (!isCoretax) {
        this.updateStatus('error', 'Not on Coretax');
        this.elements.startBtn.disabled = true;
        this.log('error', `Current URL: ${tab.url}`);
        this.log('error', 'Please navigate to Coretax website');
        return;
      }

      this.log('info', `Connected to: ${tab.url.substring(0, 50)}...`);

      // Check if content script is ready
      const response = await chrome.tabs.sendMessage(tab.id, { action: 'ping' });
      if (response && response.ready) {
        this.log('info', 'Extension ready');
        this.updateStatus('idle', 'Ready');
      }
    } catch (error) {
      this.log('warning', 'Please refresh the Coretax page');
      this.log('info', 'If problem persists, reload the extension');
    }
  }

  async handleStart() {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

      this.isRunning = true;
      this.updateUIState('running');
      this.log('info', 'Starting automation...');

      // Send start message to content script
      await chrome.tabs.sendMessage(tab.id, {
        action: 'start',
        settings: this.settings
      });

    } catch (error) {
      this.log('error', `Failed to start: ${error.message}`);
      this.updateUIState('idle');
    }
  }

  async handleStop() {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

      this.log('warning', 'Stopping automation...');

      await chrome.tabs.sendMessage(tab.id, { action: 'stop' });

    } catch (error) {
      this.log('error', `Failed to stop: ${error.message}`);
    }
  }

  handleReset() {
    this.stats = { pages: 0, downloaded: 0, failed: 0 };
    this.updateStats();
    this.clearLogs();
    this.updateUIState('idle');
    this.log('info', 'Reset complete');
  }

  handleContentMessage(message) {
    switch (message.type) {
      case 'progress':
        this.updateProgress(message);
        break;
      case 'log':
        this.log(message.level, message.message);
        break;
      case 'stats':
        this.updateStats(message.data);
        break;
      case 'complete':
        this.handleComplete(message);
        break;
      case 'error':
        this.handleError(message);
        break;
      case 'action':
        this.updateCurrentAction(message.action);
        break;
    }
  }

  updateProgress(data) {
    const { current, total } = data;
    const percentage = total > 0 ? (current / total) * 100 : 0;

    this.elements.progressText.textContent = `${current} / ${total}`;
    this.elements.progressBar.style.width = `${percentage}%`;
  }

  updateCurrentAction(action) {
    this.elements.currentAction.textContent = action;
  }

  updateStats(data) {
    if (data) {
      this.stats = { ...this.stats, ...data };
    }

    // Update stats display
    const downloadedCount = this.stats.downloaded || 0;
    const failedCount = this.stats.failed || 0;

    this.elements.downloadCount.textContent = downloadedCount;
    this.elements.failCount.textContent = failedCount;

    // Show stats section if there's any activity
    if (downloadedCount > 0 || failedCount > 0) {
      this.elements.statsSection.classList.remove('hidden');
    }
  }

  handleComplete(message) {
    this.isRunning = false;
    this.updateUIState('complete');
    this.log('success', '========================================');
    this.log('success', 'SELESAI!');
    this.log('success', `✓ Berhasil: ${message.data.downloaded} dokumen`);
    if (message.data.failed > 0) {
      this.log('error', `✗ Gagal: ${message.data.failed} dokumen`);
    }
    this.log('success', '========================================');
  }

  handleError(message) {
    this.isRunning = false;
    this.updateUIState('error');
    this.log('error', message.message || 'Automation error occurred');
  }

  updateUIState(state) {
    const { startBtn, stopBtn, resetBtn, statusDot, statusText, progressSection } = this.elements;

    switch (state) {
      case 'running':
        startBtn.disabled = true;
        startBtn.classList.add('hidden');
        stopBtn.classList.remove('hidden');
        resetBtn.classList.remove('hidden');
        progressSection.classList.remove('hidden');
        this.updateStatus('running', 'Running');
        break;

      case 'idle':
        startBtn.disabled = false;
        startBtn.classList.remove('hidden');
        stopBtn.classList.add('hidden');
        resetBtn.classList.add('hidden');
        progressSection.classList.add('hidden');
        this.updateStatus('idle', 'Idle');
        break;

      case 'complete':
        startBtn.disabled = false;
        startBtn.classList.remove('hidden');
        stopBtn.classList.add('hidden');
        resetBtn.classList.remove('hidden');
        this.updateStatus('idle', 'Complete');
        break;

      case 'error':
        startBtn.disabled = false;
        startBtn.classList.remove('hidden');
        stopBtn.classList.add('hidden');
        resetBtn.classList.remove('hidden');
        this.updateStatus('error', 'Error');
        break;
    }
  }

  updateStatus(state, text) {
    this.elements.statusDot.className = `status-dot ${state}`;
    this.elements.statusText.textContent = text;
  }

  log(level, message) {
    const logItem = document.createElement('div');
    logItem.className = `log-item log-${level}`;

    const icon = document.createElement('span');
    icon.className = 'log-icon';

    // Add icon based on log level
    switch(level) {
      case 'success':
        icon.textContent = '✓';
        break;
      case 'error':
        icon.textContent = '✗';
        break;
      case 'warning':
        icon.textContent = '⚠';
        break;
      case 'info':
      default:
        icon.textContent = 'ℹ';
        break;
    }

    const time = document.createElement('span');
    time.className = 'log-time';
    time.textContent = this.getCurrentTime();

    const msg = document.createElement('span');
    msg.className = 'log-message';
    msg.textContent = message;

    logItem.appendChild(icon);
    logItem.appendChild(time);
    logItem.appendChild(msg);

    this.elements.logContainer.appendChild(logItem);
    this.elements.logContainer.scrollTop = this.elements.logContainer.scrollHeight;
  }

  clearLogs() {
    this.elements.logContainer.innerHTML = '';
  }

  getCurrentTime() {
    const now = new Date();
    return now.toTimeString().split(' ')[0];
  }

  loadSettings() {
    chrome.storage.local.get(['settings'], (result) => {
      if (result.settings) {
        this.settings = { ...this.settings, ...result.settings };
        this.elements.delayRange.value = this.settings.delay;
        this.elements.delayValue.textContent = this.settings.delay;
        this.elements.autoScroll.checked = this.settings.autoScroll;
      }
    });
  }

  saveSettings() {
    chrome.storage.local.set({ settings: this.settings });
  }

  showHelp() {
    chrome.tabs.create({
      url: 'https://github.com/yourusername/coretax-automation#readme'
    });
  }
}

// Initialize side panel controller
document.addEventListener('DOMContentLoaded', () => {
  new SidePanelController();
});
