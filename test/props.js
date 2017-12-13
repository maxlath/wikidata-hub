require('should')
const { get } = require('./lib/utils')

describe('hub:prop', () => {
  it('should reject invalid properties', done => {
    get('/Q37033?prop=P8561241251')
    .catch(err => {
      err.statusCode.should.equal(400)
      err.body.message.should.equal('invalid property id')
      done()
    })
    .catch(done)
  })

  it('should support properties of type Url', done => {
    get('/Q37033?prop=P856')
    .then(res => {
      res.statusCode.should.equal(302)
      res.headers.location.should.equal('https://www.w3.org/')
      done()
    })
    .catch(done)
  })

  it('should support properties of type ExternalId', done => {
    get('/Q34981?prop=P1938')
    .then(res => {
      res.statusCode.should.equal(302)
      res.headers.location.should.equal('https://www.gutenberg.org/ebooks/author/35316')
      done()
    })
    .catch(done)
  })
})
