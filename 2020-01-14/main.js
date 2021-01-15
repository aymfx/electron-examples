const {
  app,
  BrowserWindow,
  ipcMain,
  Menu,
  MenuItem,
  globalShortcut,
} = require("electron");
// const notifier = require("node-notifier");
let win;
// const dockMenu = Menu.buildFromTemplate([
//   {
//     label: "标签1",
//     click() {
//       console.log("标签1");
//     },
//   },
//   {
//     label: "标签菜单",
//     submenu: [{ label: "标签1" }, { label: "标签2" }],
//   },
//   { label: "新菜单。。。" },
// ]);
// const menu = new Menu();
// menu.append(
//   new MenuItem({
//     label: "Electron",
//     submenu: [
//       {
//         role: "help",
//         accelerator:
//           process.platform === "darwin" ? "Alt+Cmd+I" : "Alt+Shift+I",
//         click: () => {
//           console.log("Electron rocks!");
//         },
//       },
//     ],
//   })
// );
// Menu.setApplicationMenu(menu);
function createWindow() {
  win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true, //需要设置webview来启用这个
    },
  });
  const contents = win.webContents;
  contents.openDevTools(); //打开调试工具
  // win.loadFile("index.html");
  // win.setFullScreen(true); //全屏幕
  // win.setProgressBar(0.5); //设置进度条
  // app.dock.setMenu(dockMenu); //设置自定义的dock菜单

  win.loadURL("http://127.0.0.1:5500/2020-01-14/index.html");

  // globalShortcut.register("Alt+CommandOrControl+I", () => {
  //   console.log("electron 全局监听者呢");
  // });
  win.webContents.on("before-input-event", (event, input) => {
    if (input.control && input.key.toLowerCase() === "i") {
      console.log("Pressed Control+I");
      event.preventDefault();
    }
  });
}
app.whenReady().then(createWindow);

// app.addRecentDocument("/Users/liuyang/Desktop/work.type");
app.clearRecentDocuments();
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
// ipcMain.on("notice", (event, arg) => {
//   setInterval(() => {
//     console.log(223, notifier);
//     notifier.notify({
//       title: "通知",
//       message: "收到了",
//     });
//   }, 1000);
// });
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
