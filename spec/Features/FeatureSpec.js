/* eslint-disable */
describe('Feature', function() {
  beforeEach(() => {
    game = new Game();
  });

  describe("#fullgame", function() {
    it("winner", function() {
      game.move(1, 1)
      game.move(1, 3)
      game.move(2, 2)
      game.move(1, 2)
      expect(game.move(3, 3)).toEqual('1 is the Winner!')
    })
    it("draw", function() {
      game.move(1, 1)
      game.move(1, 3)
      game.move(1, 2)
      game.move(2, 1)
      game.move(2, 3)
      game.move(2, 2)
      game.move(3, 1)
      game.move(3, 3)
      expect(game.move(3, 2)).toEqual('Draw')
    })
    it("error - field occupied", function() {
      game.move(1, 1)
      game.move(1, 3)
      expect(function() { game.move(1, 1)}).toThrowError("Field already taken")
    })
  })
})
