/* eslint-disable */
describe('Game', function() {
  beforeEach(() => {
    game = new Game();
  })
  describe("#move", function() {
    it("accepts a move", function() {
      expect(game.move(1)).toEqual(1)
    })
  })
})
