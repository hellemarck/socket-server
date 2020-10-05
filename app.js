const express = require('express');
const app = express();
const cors = require('cors');
const server = require('https').createServer(app);
const io = require('socket.io')(server);

app.use(cors());

io.origins(['https://mh-jsramverk.me:443']);

io.on('connection', function (socket) {
    socket.on('user connected', function(user) {
        io.emit('user connected', user)
    })
    // console.info("User connected");

    socket.on('chat message', function(message) {
        io.emit('chat message', message)
    })
});

server.listen(3001, () => console.log("working"));
