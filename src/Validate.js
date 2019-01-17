function Validate () {
  this.count = 0
}

Validate.prototype.check = function (gameMoves, newMove, status) {
  this._fieldTaken(gameMoves, newMove)
  this._playerMove(newMove)
  this._gameStatus(status)
  return false
}

Validate.prototype._fieldTaken = function (gameMoves, newMove) {
  for (let i = 0; i < gameMoves.length; i++) {
    if (JSON.stringify(newMove['row']) === JSON.stringify(gameMoves[i]['row'])) this.count += 1
    if (JSON.stringify(newMove['column']) === JSON.stringify(gameMoves[i]['column'])) this.count += 1
    if (this.count === 2) throw new Error('Field already taken')
    this.count = 0
  }
  return false
}

Validate.prototype._playerMove = function (newMove) {
  if (newMove['row'] >= 4 || newMove['row'] <= 0) this.count += 1
  if (newMove['column'] >= 4 || newMove['column'] <= 0) this.count += 1
  if (this.count >= 1) throw new Error('Invalid Move')
  this.count = 0
}

Validate.prototype._gameStatus = function (status) {
  if (status.length >= 1) throw new Error('Game already won')
}
