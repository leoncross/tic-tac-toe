function Game (validate = new Validate()) {
  this.validate = validate
  this.player = 1
  this.moves = []
}

Game.prototype.move = function (row, column) {
  const move = { row: row, column: column, score: this.player }
  validate.check(this.moves, move)
  this.moves.push(move)
  if (this._checkWinner('row')) return `${this.player}` + ' winner'
  if (this._checkWinner('column')) return `${this.player}` + ' winner'
  if (this._checkWinnerDiagonal()) return `${this.player}` + ' winner'
  this._changeTurns()
  return move
}

Game.prototype._changeTurns = function () {
  if (this.player === 1) {
    this.player = -1
  } else {
    this.player = 1
  }
}

Game.prototype._checkWinner = function (axis) {
  let score = 0
  for (let y = 0; y < 3; y++) {
    for (let i = 0; i < this.moves.length; i++) {
      if (this.moves[i][axis] === y) score += this.moves[i]['score']
      if (score === 3 || score === -3) return true
    }
    score = 0
  }
}

Game.prototype._checkWinnerDiagonal = function () {
  let diagonals = [[1, 1, 2, 2, 3, 3], [1, 3, 2, 2, 3, 1]]
  let score = 0
  for (let y = 0; y < diagonals.length; y++) {
    for (let i = 0; i < this.moves.length; i++) {
      if (this.moves[i]['row'] === diagonals[y][0] && this.moves[i]['column'] === diagonals[y][1]) { score += this.moves[i]['score'] }
      if (this.moves[i]['row'] === diagonals[y][2] && this.moves[i]['column'] === diagonals[y][3]) { score += this.moves[i]['score'] }
      if (this.moves[i]['row'] === diagonals[y][4] && this.moves[i]['column'] === diagonals[y][5]) { score += this.moves[i]['score'] }
      if (score === 3 || score === -3) return true
      console.log(score)
    }
    score = 0
  }
}
