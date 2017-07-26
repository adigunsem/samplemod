const chai = require('chai');
const index = require('../index');

const expect = chai.expect;

describe('#index test', function () {

  it('return correctly wkwkwk', function () {
    expect(index.compute(1, 3)).to.equal(4);
  })

  it('should failed', function () {
    expect(index.compute(1, 3)).to.equal(5);
  })
});