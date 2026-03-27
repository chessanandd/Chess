// reviews.js

// Game Review and Analysis Features

// Move History
let moveHistory = [];

function addMove(move) {
    moveHistory.push(move);
}

function getMoveHistory() {
    return moveHistory;
}

// Board Replay
function replayMoves() {
    moveHistory.forEach((move) => {
        // Code to replay each move on the board.
        console.log(`Replaying move: ${move}`);
    });
}

// Game Statistics
let gameStats = {
    totalMoves: 0,
    startTime: null,
    endTime: null,
};

function startGame() {
    gameStats.startTime = new Date();
}

function endGame() {
    gameStats.endTime = new Date();
    gameStats.totalMoves = moveHistory.length;
}

function getGameStatistics() {
    return gameStats;
}

// Export the functions
module.exports = {
    addMove,
    getMoveHistory,
    replayMoves,
    startGame,
    endGame,
    getGameStatistics,
};