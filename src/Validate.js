function Validate () {}

Validate.prototype.check = function (moves, newMove) {
  for (i = 0; i < moves.length; i++) {
    if (moves[i].hasOwnProperty(newMove)) {
      throw new Error('Field already taken')
    } else {
      return false
    }
  }
}
