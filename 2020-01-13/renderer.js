// onload = () => {
//   const webview = document.querySelector("webview");
//   webview.addEventListener("did-finish-load", () => {
//     webview.openDevTools(); //打开子窗口的调试工具
//     webview.send("ping", "理我一下");
//   });
// };

// const mapNumbers = require("electron").remote.require("./mapNumbers");
// const withRendererCb = mapNumbers.withRendererCallback((x) => x + 1);
// const withLocalCb = mapNumbers.withLocalCallback();
// console.log(withRendererCb, withLocalCb); // [undefined, undefined, undefined], [2, 3, 4]
// const { remote } = require("electron");
// console.log(Object.getOwnPropertyNames(remote));
// //["__esModule", "getBuiltin", "getCurrentWindow", "getCurrentWebContents", "getGlobal", "createFunctionWithReturnValue", "require", "process", "clipboard", "shell", "app", "autoUpdater", "BaseWindow", "BrowserView", "BrowserWindow", "contentTracing", "crashReporter", "dialog", "globalShortcut", "ipcMain", "inAppPurchase", "Menu", "MenuItem", "nativeImage", "nativeTheme", "net", "netLog", "MessageChannelMain", "Notification", "powerMonitor", "powerSaveBlocker", "protocol", "screen", "session", "systemPreferences", "TouchBar", "Tray", "View", "webContents", "WebContentsView", "desktopCapturer", "ImageView"]

// const { remote } = require("electron");
// console.log(remote.getGlobal("process").env.age);
// console.log(remote.process.env.age);
// setTimeout(() => {
//   console.log(remote.process.env.age);
//   console.log(remote.getGlobal("process").env.age);
// }, 5000);
// console.log(remote.getCurrentWindow()); //Object
// console.log(remote.getCurrentWebContents()); //Object

const { remote } = require("electron");
console.log(remote.app.ipc);
let message = remote.app.ipc.send("老哥在嘛");
console.log(message);
