const _setImmediate = setImmediate;
const _clearImmediate = clearImmediate;
process.once("loaded", () => {
  window.setImmediate = _setImmediate;
  window.clearImmediate = _clearImmediate;
  console.log(global, "加载完");
});
console.log(global, "加载完");
