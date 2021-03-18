const request = require('supertest');
const assert = require('assert');
const Server = require('../../server');

describe('Testing', () => {
  const { app } = new Server();
  it('Get All Items', async () => {
    const res = await request(app).get('/get-item')

    assert.equal(res.statusCode, 200);

    const responseType = typeof res.body;
    assert.equal(responseType, 'object', 'response type must be an object');
  });
});
