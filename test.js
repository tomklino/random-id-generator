const generateRandomId = require('./app');
const chai = require('chai')

const expect = chai.expect;

describe('testing generation of random IDs with different options', function() {
  it('generates with default settings', () => {
    let result = generateRandomId();

    expect(result).to.be.a('string')
    expect(result).to.have.lengthOf(8)
  })

  it('generates an id with a lenght of 12', () => {
    let result = generateRandomId({ length: 12 });

    expect(result).to.be.a('string');
    expect(result).to.have.lengthOf(12);
  })

  it('generates an id with a custom prefix', () => {
    let result = generateRandomId({ prefix: 'id-' });

    expect(result).to.be.a('string');
    expect(result.indexOf('id-')).to.eql(0);
    expect(result).to.have.lengthOf(11);
  })

  it('generates an id with a custom prefix and a lenth of 12', () => {
    let result = generateRandomId({ prefix: 'id-', length: 12 })

    expect(result).to.be.a('string');
    expect(result.indexOf('id-')).to.eql(0);
    expect(result).to.have.lengthOf(15)
  })

  it('generates a urlsafe id', () => {
    let result_includes_url_usafe_chars = false;

    for(let i = 0; i < 100; i++) {
      let result = generateRandomId({ character_set: 'base64url' });
      if(result.indexOf('+') !== -1 || result.indexOf('/') !== -1) {
        result_includes_url_usafe_chars = true;
        break;
      }
    }

    expect(result_includes_url_usafe_chars).to.be.false;
  })
})
