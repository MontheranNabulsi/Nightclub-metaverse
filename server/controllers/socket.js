const { updateUserPoints } = require("../utilities/User.utilities");

module.exports.Socket = (server) => {
    
    const io = require("socket.io")(server, { cors: true });

    io.on("connection", (socket) => {
        console.log("socket", socket.id);
        socket.on("send-message", (data) => {
            data.message = data.message.trim();
            if (data.message.length === 0) {
                return;
            }
            updateUserPoints(1, data.user);

            socket.broadcast.emit("receive-message", data);
        });
    });
};
