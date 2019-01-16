function Game (validate = new Validate()) {
  this.validate = validate
  this.moves = []
  this.turn = 1
  this.player = 'x'
}

Game.prototype.move = function (move) {
  validate.check(this.moves, move)
  currentMove = {}
  currentMove[this.turn] = this.player
  this.moves.push(currentMove)
  this.changeTurns()
  return move
}

Game.prototype.changeTurns = function () {
  this.turn += 1
}
