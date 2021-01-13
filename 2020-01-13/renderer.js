onload = () => {
  const webview = document.querySelector("webview");
  webview.addEventListener("ipc-message", (event) => {
    console.log("来自webview的回话:", event);
  });
  webview.addEventListener("did-finish-load", () => {
    webview.openDevTools();
    webview.send("ping", "理我一下");
  });
};
