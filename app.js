const express = require('express');
const app = express();

const server = require('http').createServer(app);
const io = require('socket.io')(server);


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
