const { app, BrowserWindow, ipcMain } = require("electron");
function createWindow() {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  win.webContents.openDevTools(); //打开调试工具
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

/* ----------------five------------------- */
// ipcMain.on("port", (e, msg) => {
//   const [port] = e.ports;
//   console.log(port, msg, e.ports);
//   port.postMessage("发信息给渲染进程");
// });
/* ----------------five------------------- */

/* ----------------four------------------- */

// ipcMain.handle("message", async (event, ...args) => {
//   let someMessage = await Promise.resolve("我是异步回来的消息");
//   return someMessage;
// });

// ipcMain.removeHandler("message");

/* ----------------four------------------- */

/* ----------------three------------------- */
// function callback(event, arg) {
//   event.reply("reply", `主进程返回信息:${arg}`);
// }
// ipcMain.on("message", callback);
// ipcMain.removeAllListeners("message");
// ipcMain.removeAllListeners();

/* ----------------three------------------- */

/* ----------------one------------------- */
// ipcMain.on("async-message", (event, arg) => {
//   //异步消息回复
//   console.log(`async-message:我接收到了异步消息`, arg);
//   console.log(event);
//   event.reply("async-reply", "哥们我收到消息了-来自异步");
// });

// ipcMain.on("sync-message", (event, arg) => {
//   //同步消息回复
//   console.log(`async-message:我接收到了同步消息`, arg);
//   event.returnValue = "哥们我收到消息了-来自同步";
// });

/* ----------------one------------------- */

/* ----------------two------------------- */
// 正常的监听回复
// ipcMain.on("one-message", (event, arg) => {
//   event.reply("one-reply-message", arg);
// });

/* ----------------two------------------- */
