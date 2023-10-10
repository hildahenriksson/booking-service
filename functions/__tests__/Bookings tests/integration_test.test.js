/**
 * @group integration
 */

const request = require('supertest');
const HOST = 'https://api-s5hih6nmta-uc.a.run.app/';
const container = request(HOST);

describe('When testing /', () => {
  describe('GET All', () => {
    it('should work', async () => {
      const res = await container.get('/');
      expect(res.statusCode).toEqual(200);
      expect.arrayContaining(res.body);
    });
  });
});

describe('When testing /booking', () => {
  describe('GET All', () => {
    it('should work', async () => {
      const res = await container.get('/booking');
      expect(res.statusCode).toEqual(200);
      expect.arrayContaining(res.body);
    });
  });

  describe('Post', () => {
    it('should work', async () => {
      const res = await container
        .post('/booking')
        .send({ name: "name", service: "Everyday cleaning" });
      expect(res.statusCode).toEqual(302);
    });
  });

  describe('Post', () => {
    it('should return status 404', async () => {
      const res = await container
        .post('/booking/hej')
        .send({ name: "name", service: "Everyday cleaning" });
      expect(res.statusCode).toEqual(404);
    });
  });
});

// describe('When testing router', () => {
//   describe('post', () => {
//     it('should create id', async () => {
//       const response = await supertest(app)
//         .post('/')
//         .send({ name: "name", date: "2024-01-01", startTime: 9, service: "Floor swabbing" });
//       const getResponse = await supertest(app).get('/booking');

//       console.log('Test log: ' + JSON.stringify(getResponse));
//       expect(response.body[1]).toHaveProperty('id');
//     });
//   });
// });
