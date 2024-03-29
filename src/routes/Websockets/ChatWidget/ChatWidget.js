module.exports = function(io) {
    io.on('connection', (socket) => {
      socket.on('subscribe_to_notifications', (userId) => {
        // Handle subscribing to notifications for a user
        // Emit personalized notifications to the client
        //socket.emit('personalized_notification', `Welcome, User ${userId}!`);
      });
    });
  };