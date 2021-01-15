exports.send = (...arg) => {
  return MainWatcher(arg);
};

function MainWatcher(arg) {
  console.log("收到消息:", arg);
  return "老弟真棒";
}
