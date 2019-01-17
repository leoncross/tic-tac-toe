function Validate () {}

Validate.prototype.check = function (gameMoves, newMove) {
  count = 0
  for (i = 0; i < gameMoves.length; i++) {
    if (JSON.stringify(newMove['row']) === JSON.stringify(gameMoves[i]['row'])) count += 1
    if (JSON.stringify(newMove['column']) === JSON.stringify(gameMoves[i]['column'])) count += 1
    if (count === 2) throw new Error('Field already taken')
    count = 0
  }
  return false
}
