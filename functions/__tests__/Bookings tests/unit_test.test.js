/**
 * @group unit
 */

const express = require('express');
const supertest = require('supertest');
const assert = require('assert');
const router = require('../../routes/bookings');

const app = express();
app.use(express.json());
app.use('/', router);

describe('When fetching bookings', () => {
  describe('get', () => {
    it('should respond with array', async () => {
      const response = await supertest(app).get('/');
      assert(Array.isArray(response.body));
    });
  });
});
