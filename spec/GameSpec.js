/* eslint-disable */
describe('Game', function() {
  beforeEach(() => {

    function ValidateStub() {}
    ValidateStub.prototype = {
      check() {}
    };

    function GameRulesStub() {}
    GameRulesStub.prototype = {
      check() {}
    };

    validate = new ValidateStub
    gameRules = new GameRulesStub
    game = new Game(validate, gameRules);
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
    it("returns draw", function() {
      game.move(1, 1)
      game.move(1, 2)
      game.move(1, 3)
      game.move(2, 1)
      game.move(2, 2)
      game.move(2, 3)
      game.move(3, 1)
      game.move(3, 2)
      expect(game.move(3, 3)).toEqual('draw')
    })
  });
  describe("#_changeTurns", function() {
    it("changes the player piece", function() {
      game.move(1, 1)
      expect(game.player).toEqual(-1)
    })
  })
  describe("#_gameSetup", function() {
    it("initializes the moves array", function() {
      expect(game.moves).toEqual(undefined)
      game.move(1, 1)
      expect(game.moves.length).toEqual(1)
    })
    it("initializes the players", function() {
      expect(game.player).toEqual(undefined)
      game.move(1, 1)
      expect(game.player).toEqual(-1)
    })
  })
})
