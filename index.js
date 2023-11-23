const app = require("./app")
// const color = require("chalk")
 const path = require("path");
 const http = require("http");
 var server = http.createServer(app);


app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
const port = 4000
app.listen(port, () =>
  console.log(`The server is listning on port 400 `)
)
const io = require('socket.io')(server);
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
