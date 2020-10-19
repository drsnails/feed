
module.exports = connectSockets
var msgs = {}
function connectSockets(io) {
    io.on('connection', socket => {

        // socket.to(socket.myCharId)
        socket.on('chat id', chatId => {
            if (socket.myCharId) {
                socket.leave(socket.myCharId)
            }

            socket.join(chatId)
            socket.myCharId = chatId;
            io.to(socket.myCharId).emit('get msgs', msgs[chatId] || [])

        })


        socket.on('chat newMsg', data => {
            const { msg, toyId } = data
            if (!msgs[toyId]) msgs[toyId] = []
            msgs[toyId].push(msg)
            // io.emit('chat addMsg', msg)
            // emits only to sockets in the same room
            io.to(socket.myCharId).emit('chat addMsg', msg)
        })

        socket.on('user typing', username => {
            console.log(username)

            io.to(socket.myCharId).emit('userTyping', username)
        })
    })
}