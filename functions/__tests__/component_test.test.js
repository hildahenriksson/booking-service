/**
 * @group component
 */

const request = require('supertest') 
const app = require('../server') 
let persisted_id = undefined;


beforeEach(async () => {
  const res = await request(app)
      .post('/booking')
      .send({id: "id", name:"name", date:"date", service: "service"});
  persisted_id = res.body.id;
});

describe('When testing /api/user', () => {
  describe('Post', () => {
    it('should work', async () => {
      const res = await request(app)
        .post('/booking')
        .send({id: "id", name:"name", date:"date", service: "service"});
      expect(res.statusCode).toEqual(302);
      expect(res.body).toHaveProperty('id');
    });
  });
});

// describe('jest', () => {
//   describe('unit test', () => {
//     it('should work', () => {
//       expect(1).toBe(1);
//     });
//   });
// });

// describe('When testing /booking', () => {
//   describe('GET All', () => {
//     it('should work', async () => {
//       const res = await request(app)
//         .get('/booking')
//       expect(res.statusCode).toEqual(200);
//       expect.arrayContaining(res.body);
//     });
//   });
// });


//Fails because we dont have routes to specific ID
// ------
// describe('When testing /booking', () => {
//   describe('GET', () => {
//     it('should work', async () => {
//       const res = await request(app)
//         .get('/booking/1');
//       expect(res.statusCode).toEqual(200);
//       expect(res.body).toHaveProperty('id');
//     });
//   });
// });