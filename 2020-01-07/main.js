const { app, BrowserWindow, ipcMain } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  win.webContents.openDevTools();
  win.loadFile("index.html");
}

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

// 两种回复方式
ipcMain.on("asynchronous-message", (event, arg) => {
  console.log(`主进程监听者1：`, arg); // prints "ping"
  event.reply("asynchronous-reply", "主进程:这是我回复的");
});

ipcMain.on("synchronous-message", (event, arg) => {
  console.log(`主进程监听者2：`,arg); // prints "ping"
  event.returnValue = "回复发送者1";
});
