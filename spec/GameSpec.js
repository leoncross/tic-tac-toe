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
      expect(game.move(1)).toEqual(1)
    });
    it("error if field already taken", function() {
      game.move(1)
      spyOn(validate, "check").and.throwError("field already taken");
      expect(function() { game.move(1)}).toThrowError("field already taken")
    });
    it("pushes move to array if no error", function() {
      game.move(1)
      expect(game.moves[0]).toEqual({1: 'x'})
    })
  });
  describe("#turn", function() {
    it("tracks the turns", function() {
      game.move(1)
      expect(game.turn).toEqual(2)
    })
  })
});
