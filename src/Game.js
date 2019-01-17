function Game (validate = new Validate(), gameRules = new GameRules()) {
  this.validate = validate
  this.gameRules = gameRules
}

Game.prototype.move = function (row, column) {
  if (typeof this.moves === 'undefined') this.newGame()
  const move = { row: row, column: column, score: this.player }
  this.validate.check(this.moves, move)
  this.moves.push(move)
  if (this.gameRules.check(this.moves)) return `${this.playerDisplay}` + ' is the Winner!'
  this._changeTurns()
  if (this.moves.length === 9) return 'Draw'
  return move
}

Game.prototype.newGame = function () {
  this.moves = []
  this.player = 1
  this.playerDisplay = 'X'
}

Game.prototype._changeTurns = function () {
  if (this.player === 1) {
    this.player = -1
    this.playerDisplay = 'O'
  } else {
    this.player = 1
    this.playerDisplay = 'X'
  }
}
