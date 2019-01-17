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
  return move
}

Game.prototype._changeTurns = function () {
  if (this.player === 1) {
    this.player = -1
  } else {
    this.player = 1
  }
}
