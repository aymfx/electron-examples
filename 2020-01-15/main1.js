const { app, BrowserWindow, ipcMain } = require("electron");

// ipcMain.on("is-offlne", (event, arg) => {
//   console.log("现在所处的网络", arg);
// });

ipcMain.on("ondragstart", (event, filePath) => {
  event.sender.startDrag({
    file: filePath,
    icon: "/Users/liuyang/aymfx/flowerPot.png",
  });
});

// -------------
app.whenReady().then(createWindow);
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

function createWindow() {
  let win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true, //需要设置webview来启用这个
    },
  });
  // win.setRepresentedFilename("/Users/liuyang/aymfx/学习/pr");
  // win.setDocumentEdited(true);
  const contents = win.webContents;
  contents.openDevTools(); //打开调试工具
  win.loadURL("http://127.0.0.1:5500/2020-01-15/index.html");
}
