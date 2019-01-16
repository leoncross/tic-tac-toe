/* eslint-disable */
describe('Validate', function() {
  beforeEach(() => {
    validate = new Validate
  });
  describe("#check", function() {
    it("returns false if no error", function() {
      expect(validate.check(1)).toEqual(false)
    });
  });
});
