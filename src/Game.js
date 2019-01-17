function Game (validate = new Validate(), gameRules = new GameRules()) {
  this.validate = validate
  this.gameRules = gameRules
}

Game.prototype.move = function (row, column) {
  if (typeof this.moves === 'undefined') this._gameSetup()
  const move = { row: row, column: column, score: this.player }
  validate.check(this.moves, move)
  this.moves.push(move)
  if (this.gameRules.check(this.moves)) return `${this.player}` + ' winner'
  this._changeTurns()
  if (this.moves.length === 9) return 'draw'
  return move
}

Game.prototype._changeTurns = function () {
  if (this.player === 1) {
    this.player = -1
  } else {
    this.player = 1
  }
}

Game.prototype._gameSetup = function () {
  this.moves = []
  this.player = 1
}
