const request = require('supertest');
const app = require('./server');

describe('Endpoints', () => {
  describe('/', () => {
    it('should respond accordingly', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({ status: 'OK' });
    });
  });

  describe('/api', () => {
    it('should respond accordingly', async () => {
      const res = await request(app).get('/api');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual({ name: 'John', surname: 'Doe' });
    });
  });
});
