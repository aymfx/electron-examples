const { app, BrowserWindow, ipcMain, nativeTheme } = require("electron");
const fs = require("fs");
const path = require("path");
// -------------
app.whenReady().then(createWindow);
function createWindow() {
  let win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true, //需要设置webview来启用这个
    },
  });
  const contents = win.webContents;
  contents.openDevTools(); //打开调试工具
  win.loadURL("http://127.0.0.1:5500/2020-01-15/index.html");
}

ipcMain.handle("dark-mode:toggle", () => {
  if (nativeTheme.shouldUseDarkColors) {//判断是不是dark模式
    nativeTheme.themeSource = "light";
  } else {
    nativeTheme.themeSource = "dark";
  }
  return nativeTheme.shouldUseDarkColors;
});

ipcMain.handle("dark-mode:system", () => {
  nativeTheme.themeSouce = "system";
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
