var sinon = require('sinon');
var pkg = require('..');


afterEach(function() {
  sinon.restore();
});

describe('passport-openidconnect', function() {
    
  it('should export Strategy constructor as module', function() {
    expect(pkg).to.be.a('function');
    expect(pkg).to.equal(pkg.Strategy);
  });
    
  it('should export Strategy constructor', function() {
    expect(pkg.Strategy).to.be.a('function');
  });
  
});
