const { app, BrowserWindow, ipcMain } = require("electron");
let win;
let ids = {
  "index.html": null,
};
function createWindow() {
  win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webviewTag: true, //需要设置webview来启用这个
    },
  });
  const contents = win.webContents;
  contents.openDevTools(); //打开调试工具
  win.loadURL("http://127.0.0.1:5500/2020-01-11/index.html");
  ids["index.html"] = contents.id;
}

ipcMain.on("registerFrameId", (event, arg) => {
  console.log(arg);
  ids = Object.assign(ids, arg);
});

ipcMain.on("getFrameId", (event, arg) => {
  event.returnValue = ids[arg];
});

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
