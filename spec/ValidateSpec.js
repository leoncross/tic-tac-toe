/* eslint-disable */
describe('Validate', function() {
  beforeEach(() => {
    validate = new Validate
  });
  describe("#_fieldTaken", function() {
    it("returns false if no error", function() {
      expect(validate._fieldTaken([{row: 1, column: 1, score: 1}], {row: 1, column: 2, score: -1})).toEqual(false)
    });
    it("error if field already taken", function() {
      expect(function() { validate._fieldTaken([{row: 1, column: 1, score: 1}], {row: 1, column: 1, score: -1})}).toThrowError("Field already taken")
    });
  });
  describe("#_playerMove", function() {
    it("raises error if incorrect move", function() {
      expect(function() { validate._playerMove({row: 4, column: 1, score: 1})}).toThrowError("Invalid Move")
    })
  })
  describe("#_gameStatus", function() {
    it("raises error after won game", function() {
      expect(function() { validate._gameStatus('1 is the Winner!')}).toThrowError("Game already won")
    })
  })
});
