/* eslint-disable */
describe('Validate', function() {
  beforeEach(() => {
    validate = new Validate
  });
  describe("#check", function() {
    it("returns false if no error", function() {
      expect(validate.check([ { 1: 'o' } ], 5)).toEqual(false)
    });
    it("error if field already taken", function() {
      expect(function() { validate.check([ { 1: 'o' } ], 1)}).toThrowError("Field already taken")
    });
  });
});
