function Game (validate = new Validate()) {
  this.validate = validate
  this.player = 1
  this.moves = []
}

Game.prototype.move = function (row, column) {
  move = { row: row, column: column, score: this.player }
  validate.check(this.moves, move)
  this.moves.push(move)
  this._changeTurns()
  if (this._checkWinner('row')) return 'winner'
  if (this._checkWinner('column')) return 'winner'
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
  score = 0
  for (y = 0; y < 3; y++) {
    for (i = 0; i < this.moves.length; i++) {
      if (this.moves[i][axis] === y) score += this.moves[i]['score']
      if (score === 3 || score === -3) {
        return true
      }
    }
    score = 0
  }
}
