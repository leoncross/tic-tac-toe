function Game (validate = new Validate()) {
  this.validate = validate
  this.moves = []
}

Game.prototype.move = function (move) {
  validate.check(this.moves, move)
  return move
}
