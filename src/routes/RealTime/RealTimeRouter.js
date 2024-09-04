const express=require('express');
const http = require('http');
const { Server } = require('socket.io');
const router = express.Router(); 
const lib = require('../../Utils/connectorHeader');  
const cors =require('cors'); 
router.use(cors());
const server = http.createServer(router);
const io = new Server(server, {
  cors: {
      origin: 'http://localhost:5173', // Vite's default port
      methods: ['GET', 'POST']
  }
});
io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle custom events
  socket.on('message', (data) => {
      console.log('Message received:', data);

      // Emit the message to all connected clients
      io.emit('message', data);
  });

  // Handle disconnection
  socket.on('disconnect', () => {
      console.log('A user disconnected');
  });
}); 
  
module.exports = router;