const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 860,
    minWidth: 900,
    minHeight: 600,
    title: 'LedgerLite',
    backgroundColor: '#f0f4f9',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      // Allow localStorage to persist across sessions
      partition: 'persist:ledgerlite'
    },
    // Modern frameless feel (optional — remove if you prefer default OS chrome)
    // titleBarStyle: 'hiddenInset',  // Mac: uncomment for Mac-style
  });

  win.loadFile('index.html');

  // Remove default menu bar (app has its own UI)
  Menu.setApplicationMenu(null);
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
