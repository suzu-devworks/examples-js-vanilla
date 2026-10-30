import net from "net"

const server = net
  .createServer((socket: net.Socket) => {
    socket.on("data", (data: unknown) => {
      console.log(`${data}·from·${socket.remoteAddress}:${socket.remotePort}`)
      socket.write(`Echo:·${data}`)
    })
    socket.on("close", () => {
      console.log("Client closed connection")
    })
  })
  .listen(3000)

server.on("listening", () => {
  console.log("Server is listening on port 3000")
})
