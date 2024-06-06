const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when inputs are 1.4 and 4.5', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when inputs are 1.4 and 4.5', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when inputs are 1.4 and 4.5', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when inputs are 1.4 and 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  // Additional edge cases
  describe('Edge cases', function() {
    it('should return 0 when inputs are 0 and 0 for SUM', function() {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });

    it('should return 0 when inputs are 0 and 0 for SUBTRACT', function() {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });

    it('should return "Error" when dividing by 0', function() {
      expect(calculateNumber('DIVIDE', 2, 0)).to.equal('Error');
    });
  });
});
