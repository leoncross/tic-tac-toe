function GameRules () {
  this.moves = []
}

GameRules.prototype.check = function (gameMoves) {
  this.moves = gameMoves
  if (this._checkWinner('row')) return true
  if (this._checkWinner('column')) return true
  if (this._checkWinnerDiagonal()) return true
  return false
}

GameRules.prototype._checkWinner = function (axis) {
  let score = 0
  for (let y = 0; y < 3; y++) {
    for (let i = 0; i < this.moves.length; i++) {
      if (this.moves[i][axis] === y) score += this.moves[i]['score']
      if (score === 3 || score === -3) return true
    }
    this.score = 0
  }
}

GameRules.prototype._checkWinnerDiagonal = function () {
  let score = 0
  let diagonals = [[1, 1, 2, 2, 3, 3], [1, 3, 2, 2, 3, 1]]
  for (let y = 0; y < diagonals.length; y++) {
    for (let i = 0; i < this.moves.length; i++) {
      if (this.moves[i]['row'] === diagonals[y][0] && this.moves[i]['column'] === diagonals[y][1]) score += this.moves[i]['score']
      if (this.moves[i]['row'] === diagonals[y][2] && this.moves[i]['column'] === diagonals[y][3]) score += this.moves[i]['score']
      if (this.moves[i]['row'] === diagonals[y][4] && this.moves[i]['column'] === diagonals[y][5]) score += this.moves[i]['score']
      if (score === 3 || score === -3) return true
    }
    score = 0
  }
}
