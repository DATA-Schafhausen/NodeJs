const { getUnitRoom } = require("./RoomManager");

module.exports = function(io) {
    io.on('connection', (socket) => {
      
      //socket.on('connect_on_unit_room', (unitId,userId,uname) => {
        // Handle subscribing to notifications for a user
        //const room=getUnitRoom(unitId)
        //socket.emit('connect_on_unit_room', `Welcome, User ${unitId}!`)
        // Emit personalized notifications to the client
        //socket.emit('personalized_notification', `Welcome, User ${userId}!`);
      //});
    });
  };