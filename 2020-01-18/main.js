const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
app.whenReady().then(() => {
  let win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      // preload: path.resolve(__dirname, "./preload.js"), //preload String (可选) -在页面运行其他脚本之前预先加载指定的脚本 无论页面是否集成Node, 此脚本都可以访问所有Node API 脚本路径为文件的绝对路径。 当 node integration 关闭时, 预加载的脚本将从全局范围重新引入node的全局引用标志
      nodeIntegration: true,
      devTools: true,
      contextIsolation: false,
      enableRemoteModule: true, //启用remote
      webviewTag: true, //需要设置webview来启用这个
    },
  });
  const contents = win.webContents;
  contents.openDevTools(); //打开调试工具
  win.loadFile("index.html");

  console.log("show:", process.defaultApp);
  console.log("show:", process.isMainFrame);
  console.log("show:", process.mas);
  console.log("show:", process.noAsar);
  console.log("show:", process.noDeprecation);
  console.log("show:", process.resourcesPath);
  console.log("show:", process.resourcesPath);
  console.log("show:", process.sandboxed);
  console.log("show:", process.throwDeprecation);
  console.log("show:", process.traceDeprecation);
  console.log("show:", process.traceProcessWarnings);
  console.log("show:", process.type);
  console.log("show:", process.versions.chrome);
  console.log("show:", process.versions.electron);
  console.log("show:", process.windowsStore);
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
