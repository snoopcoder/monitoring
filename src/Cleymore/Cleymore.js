import openSocket from "socket.io-client";
const dedent = require("dedent");
const timeout = 5000;
export function GetData(host, port) {
  //let socket = new WebSocket("wss://echo.websocket.org");
  //return "1";
  let MyPromis = new Promise((resolve, reject) => {
    const request =
      JSON.stringify({
        id: 0,
        jsonrpc: "2.0",
        method: "miner_getstat1"
      }) + "\n";
    const socket = openSocket("http://localhost:8000");
    /*     
    const socket = new net.Socket()
      .on("connect", () => {
        client.send(request);
        client.setTimeout(timeout);
      })
      .on("timeout", () => {
        reject(`Claymore didnt answer within ${timeout}ms.`);
        client.destroy();
      })
      .on("data", data => {
        const result = JSON.parse(data.toString().trim()).result;
        resolve(result);
      })
      .on("error", e => {
        reject(e.message);
      });

    client.connect(
      port,
      host
    ); */
  });
  //return MyPromis;
  return "ddd";
}
