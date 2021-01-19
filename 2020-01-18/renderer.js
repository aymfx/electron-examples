// console.log(window.setImmediate);
// console.log("开始");
// setImmediate(() => {
//   console.log("结束");
// });
// console.log("中间");

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

/**
show: true
show: undefined
show: undefined
show: undefined
show: undefined
show: /Users/aymfx/gitRepository/electron-examples/2020-01-18/node_modules/_electron@11.2.0@electron/dist/Electron.app/Contents/Resources
show: /Users/aymfx/gitRepository/electron-examples/2020-01-18/node_modules/_electron@11.2.0@electron/dist/Electron.app/Contents/Resources
show: undefined
show: undefined
show: undefined
show: undefined
show: browser
show: 87.0.4280.141
show: 11.2.0
show:
 */

 /**
renderer.js:8 show: undefined
renderer.js:9 show: true
renderer.js:10 show: undefined
renderer.js:11 show: undefined
renderer.js:12 show: undefined
renderer.js:13 show: /Users/aymfx/gitRepository/electron-examples/2020-01-18/node_modules/_electron@11.2.0@electron/dist/Electron.app/Contents/Resources
renderer.js:14 show: /Users/aymfx/gitRepository/electron-examples/2020-01-18/node_modules/_electron@11.2.0@electron/dist/Electron.app/Contents/Resources
renderer.js:15 show: undefined
renderer.js:16 show: undefined
renderer.js:17 show: undefined
renderer.js:18 show: undefined
renderer.js:19 show: renderer
renderer.js:20 show: 87.0.4280.141
renderer.js:21 show: 11.2.0
  */
