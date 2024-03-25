const express=require('express');
const https =require('https')
const createCert = require('create-cert');

const WebSocket = require('ws')
const fs = require('fs')

const app=express();

createCert().then(keys => {
  const server=https.createServer(keys, app);
  const wss= new WebSocket.Server({server});
  const groups = {};

  wss.on('connection', function connection(ws) {
    let groupId;

    // Function to send message to a specific group
    /*const sendMessageToGroup = (groupId, message) => {
        if (groups[groupId]) {
            groups[groupId].forEach(client => {
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(message);
                }
            });
        }
    };*/

    /*ws.on('message', function incoming(message) {
        // Assuming message format: "JOIN:groupId"
        if (message.startsWith('JOIN:')) {
            const parsedMessage = message.split(':');
            groupId = parsedMessage[1];
            
            // Add client to group
            if (!groups[groupId]) {
                groups[groupId] = new Set();
            }
            groups[groupId].add(ws);
        } else {
            // Broadcast message to the group
            if (groupId) {
                sendMessageToGroup(groupId, message);
            }
        }
    });*/

    /*ws.on('close', function() {
        // Remove client from group when connection closes
        if (groupId && groups[groupId]) {
            groups[groupId].delete(ws);
            if (groups[groupId].size === 0) {
                delete groups[groupId]; // Delete group if no clients left
            }
        }
    });*/
  });

  server.listen(443, function() {
    console.log('WebSocket server running on port 443');
  });

});
