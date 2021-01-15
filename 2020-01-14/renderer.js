// const { ipcRenderer } = require("electron");
// ipcRenderer.send("notice");
// onload = () => {
//   const notifier = require("node-notifier");
//   setInterval(() => {
//     console.log(12121);
//     notifier.notify({
//       title: "通知",
//       message: "收到了",
//     });
//   }, 1000);
// };
// var Mousetrap = require("mousetrap");
// Mousetrap.bind("4", function () {
//   console.log("4");
// });
// Mousetrap.bind("?", function () {
//   console.log("show shortcuts!");
// });
// Mousetrap.bind(
//   "esc",
//   function () {
//     console.log("escape");
//   },
//   "keyup"
// );

const watcher = () => {
  console.log(navigator.onLine ? "在线" : "离线");
};
window.addEventListener("online", watcher);
window.addEventListener("offline", watcher);
