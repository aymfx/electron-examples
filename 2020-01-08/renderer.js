const { ipcRenderer } = require("electron");

/* ----------------five------------------- */
const { port1, port2 } = new MessageChannel();
ipcRenderer.postMessage("port", { message: "hello" }, [port2]);
port1.onmessage = (arg) => {
  console.log(arg.data);
};
/* ----------------five------------------- */

/* ----------------four------------------- */
// (async () => {
//     let result = await ipcRenderer.invoke("message");
//     console.log(result);
//   })();
/* ----------------four------------------- */

/* ----------------three------------------- */
// function watcher(event, arg) {
//   console.log(arg);
// }
// ipcRenderer.send("message", "渲染进程发信息");
// ipcRenderer.on("reply", watcher);

/* ----------------three------------------- */

/* ----------------one------------------- */
// // 同步消息
// let message = ipcRenderer.sendSync("sync-message", "发个同步消息");
// console.log("同步消息:", message);
// //异步消息
// ipcRenderer.on("async-reply", (event, arg) => {
//   console.log("异步消息:", arg);
// });

// ipcRenderer.send("async-message", "发个异步消息");
/* ----------------one------------------- */

/* ----------------two------------------- */
// for (let index = 0; index < 5; index++) {
//     ipcRenderer.send("one-message", `第${index}次`);
//   }

//   ipcRenderer.once("one-reply-message", (event, arg) => {
//     console.log(`回复:${arg}`);
//   });
/* ----------------two------------------- */
