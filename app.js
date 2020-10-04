const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.origins(['https://mh-jsramverk.me/chat:443']);

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
