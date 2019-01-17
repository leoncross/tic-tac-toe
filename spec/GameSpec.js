/* eslint-disable */
describe('Game', function() {
  beforeEach(() => {
    function ValidateStub() {}
    ValidateStub.prototype = {
      check() {}
    };
    validate = new ValidateStub
    game = new Game(validate);
  });
  describe("#move", function() {
    it("accepts a move", function() {
      game.move(1, 1)
      expect(game.moves).toEqual([{row: 1, column: 1, score: 1}])
    });
    it("accepts multiple moves", function() {
      game.move(1, 1)
      game.move(1, 2)
      expect(game.moves).toEqual([{row: 1, column: 1, score: 1}, {row: 1, column: 2, score: -1}])
    });
    it("error if field already taken", function() {
      game.move(1, 1)
      spyOn(validate, "check").and.throwError("field already taken");
      expect(function() { game.move(1, 1) }).toThrowError("field already taken")
    });
  });
  describe("#_changeTurns", function() {
    it("changes the player piece", function() {
      game.move(1)
      expect(game.player).toEqual(-1)
    })
  })
});
