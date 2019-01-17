function Game (validate = new Validate(), gameRules = new GameRules()) {
  this.validate = validate
  this.gameRules = gameRules
  this.player = 1
  this.moves = []
}

Game.prototype.move = function (row, column) {
  const move = { row: row, column: column, score: this.player }
  validate.check(this.moves, move)
  this.moves.push(move)
  if (this.gameRules.check(this.moves)) return `${this.player}` + ' winner'
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
