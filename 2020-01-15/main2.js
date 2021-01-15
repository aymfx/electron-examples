const { app, BrowserWindow, ipcMain } = require("electron");
const fs = require("fs");
const path = require("path");
app.disableHardwareAcceleration(); //禁用当前应用程序的硬件加速。这个方法只能在应用程序准备就绪（ready）之前调用。
// -------------
app.whenReady().then(createWindow);
function createWindow() {
  win = new BrowserWindow({ webPreferences: { offscreen: true } });
  win.loadURL("http://127.0.0.1:5500/2020-01-15/index.html");
  win.webContents.on("paint", (event, dirty, image) => {
    console.log("paint");
    fs.writeFileSync(path.resolve(__dirname, "ex.png"), image.toPNG()); //截屏生成一张图片
  });
  win.webContents.setFrameRate(60); //设置渲染的帧率
}

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
