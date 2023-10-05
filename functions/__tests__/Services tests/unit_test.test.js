/**
 * @group unit
 */

const express = require('express');
const supertest = require('supertest');
// const request = require('supertest');
const assert = require('assert');
// const serviceHandler = require('../../resources/services.json');
const router = require('../../routes/services');

const app = express();
app.use(express.json());
app.use('/', router);

describe('When testing jest', () => {
  describe('given i have a non failing test', () => {
    it('should be one', () => {
      expect(1).toBe(1);
    });
  });
});

describe('When fetching services', () => {
  describe('get', () => {
    it('should respond with array', async () => {
      const response = await supertest(app).get('/');
      assert(Array.isArray(response.body));
    });
  });
});

// tests!

// describe('When testing serviceHandler', () => {
//   describe('post', () => {
//     it('should respond with correct property', async () => {
//       const response = await request(serviceHandler)
//       console.log(response)
//         .post('/')
//         .send({
//           id: "8",
//           title: "test title",
//           description: "test description",
//           price: 100,
//           imgURL: "test"
//         });
//       expect(response.body).toHaveProperty('id', 'title', 'description', 'price', 'imgURL');
//     }, );
//   })
// })
