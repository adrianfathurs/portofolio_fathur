/**
 * Background Service Worker
 * Handles extension lifecycle and download management
 */

// Keep track of active downloads
const activeDownloads = new Set();

// Listen for extension installation
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('Coretax Automation installed');
  } else if (details.reason === 'update') {
    console.log('Coretax Automation updated');
  }
});

// Open side panel when extension icon is clicked
chrome.action.onClicked.addListener(async (tab) => {
  try {
    // Open side panel for the current window
    await chrome.sidePanel.open({ windowId: tab.windowId });
  } catch (error) {
    console.error('Failed to open side panel:', error);
  }
});

// Listen for downloads
chrome.downloads.onCreated.addListener((downloadItem) => {
  activeDownloads.add(downloadItem.id);
});

chrome.downloads.onChanged.addListener((delta) => {
  if (delta.state && delta.state.current === 'complete') {
    activeDownloads.delete(delta.id);
  }
});

// Handle messages from content script and popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'log') {
    // Forward log to popup if open
    chrome.runtime.sendMessage(message).catch(() => {});
  }

  if (message.type === 'stats') {
    // Store stats in storage for persistence
    chrome.storage.local.set({ lastStats: message.data });
  }

  return true;
});

// Keep service worker alive
let keepAlive;

function createKeepAliveChannel() {
  const channel = new BroadcastChannel('keepalive');
  channel.onmessage = () => {
    keepAlive = setTimeout(createKeepAliveChannel, 30000); // 30 seconds
  };
}

createKeepAliveChannel();

// Clean up on unload
self.onclose = () => {
  clearTimeout(keepAlive);
};
