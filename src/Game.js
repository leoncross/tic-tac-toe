function Game (validate = new Validate()) {
  this.validate = validate
  this.moves = []
  this.turnCounter = 1
  this.player = 'x'
}

Game.prototype.move = function (move) {
  validate.check(this.moves, move)
  currentMove = {}
  currentMove[this.turnCounter] = this.player
  this.moves.push(currentMove)
  return move
}
