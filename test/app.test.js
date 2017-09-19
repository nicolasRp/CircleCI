const request = require('supertest');
const app =  require('../app')

describe('app', () => {
    it('should render html on index', (done) => {
        request(app).get('/adssd').expect('Content-Type', /html/).expect(400, done)
    });
});
