// puzzles.js

class Puzzle {
    constructor(title, problem, solution, difficulty) {
        this.title = title;
        this.problem = problem;
        this.solution = solution;
        this.difficulty = difficulty;
        this.hints = [];
        this.score = 0;
    }

    addHint(hint) {
        this.hints.push(hint);
    }

    verifySolution(userSolution) {
        return userSolution === this.solution;
    }

    updateScore(points) {
        this.score += points;
    }
}

class PuzzleManager {
    constructor() {
        this.puzzles = [];
    }

    addPuzzle(puzzle) {
        this.puzzles.push(puzzle);
    }

    getPuzzleByDifficulty(difficulty) {
        return this.puzzles.filter(puzzle => puzzle.difficulty === difficulty);
    }
}

// Example usage
const puzzle1 = new Puzzle('Checkmate in One', 'What is the best move for White?', 'Qh5', 'easy');
puzzle1.addHint('Look for checks!');

const puzzleManager = new PuzzleManager();
puzzleManager.addPuzzle(puzzle1);
