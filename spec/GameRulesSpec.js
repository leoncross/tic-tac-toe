/* eslint-disable */
describe('GameRules', function() {
  beforeEach(() => {
    gameRules = new GameRules();
  });

  var winnerX = [{ row: 1, column: 1, score: 1 }, { row: 2, column: 1, score: -1 }, { row: 1, column: 2, score: 1 }, { row: 2, column: 2, score: -1 }, { row: 1, column: 3, score: 1 }]
  var winnerO = [{ row: 3, column: 3, score: 1 }, { row: 1, column: 1, score: -1 }, { row: 2, column: 1, score: 1 }, { row: 1, column: 2, score: -1 }, { row: 2, column: 2, score: 1 }, { row: 1, column: 3, score: -1 }]
  var noWin = [{ row: 3, column: 3, score: 1 }, { row: 1, column: 1, score: -1 }]
  var winDiagX = [{ row: 1, column: 1, score: 1 }, { row: 1, column: 2, score: -1 }, { row: 2, column: 2, score: 1 }, { row: 1, column: 3, score: -1 }, { row: 3, column: 3, score: 1 }]
  var winDiagO = [{ row: 1, column: 2, score: 1 }, { row: 1, column: 3, score: -1 }, { row: 1, column: 1, score: 1 }, { row: 2, column: 2, score: -1 }, { row: 2, column: 1, score: 1 }, { row: 3, column: 1, score: -1 }]


describe("#_checkWinner", function() {
  it("win found 'x')", function() {
    expect(gameRules.check(winnerX)).toEqual(true)
  })
  it("win found 'o')", function() {
    expect(gameRules.check(winnerO)).toEqual(true)
  })
  it("no win", function() {
    expect(gameRules.check(noWin)).toEqual(false)
  })
})
describe("#_checkWinnerDiagonal", function() {
  it("win in diagonal 1 'x'", function() {
    expect(gameRules.check(winDiagX)).toEqual(true)
  })
  it("win in diagonal 2 'o'", function() {
    expect(gameRules.check(winDiagO)).toEqual(true)
  })
})
});
