// p2p.js

const Peer = require('peerjs');
const peer = new Peer();

let localPlayerId;
const players = {};

peer.on('open', function(id) {
    console.log('My peer ID is: ' + id);
    localPlayerId = id;
});

peer.on('connection', function(conn) {
    conn.on('data', function(data) {
        // Receive data from another player
        console.log('Received', data);
        // Here you can handle the move of the other player
    });
});

function connectToPeer(peerId) {
    const conn = peer.connect(peerId);
    conn.on('open', function() {
        // Send a message to the connected peer
        conn.send('Hello from ' + localPlayerId);
    });
}

function sendMove(move) {
    const conn = peer.connect(remotePeerId);
    conn.on('open', function() {
        conn.send(move);
    });
}