const { app, BrowserWindow } = require("electron");
require("update-electron-app")();
if (process.mas) app.setName("electron更新演示");
const path = require("path");
const debug = /--debug/.test(process.argv[2]);
let mainWindow = null;

function initialize() {
  function createWindow() {
    const winOptions = {
      width: 1080,
      minWidth: 680,
      height: 840,
      title: app.getName(),
      webPreferences: {
        nodeIntegration: true,
      },
    };
    mainWindow = new BrowserWindow(winOptions);
    mainWindow.loadURL(path.join("file://", __dirname, "/index.html"));
    if (debug) {
      mainWindow.webContents.openDevTools(); //启动调试
      mainWindow.maximize(); //最大化窗口。如果尚未显示该窗口，则还将显示（但不聚焦）该窗口。
    }
    mainWindow.on("closed", () => {
      mainWindow = null;
    });
  }
  app.on("ready", () => {
    createWindow();
  });
  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });
  app.on("activate", () => {
    if (mainWindow === null) {
      createWindow();
    }
  });
}

initialize();
