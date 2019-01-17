/* eslint-disable */
describe('Validate', function() {
  beforeEach(() => {
    validate = new Validate
  });
  describe("#check", function() {
    it("returns false if no error", function() {
      expect(validate.check([{row: 1, column: 1, score: 1}], {row: 1, column: 2, score: -1})).toEqual(false)
    });
    it("error if field already taken", function() {
      expect(function() { validate.check([{row: 1, column: 1, score: 1}], {row: 1, column: 1, score: -1})}).toThrowError("Field already taken")
    });
  });
});
