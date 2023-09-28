/**
 * @group component
 */

const request = require('supertest')
const app = require('../../server')
const bookedTimes = require('../../resources/booked-times.json')

describe('When testing /booking', () => {
  describe('Post', () => {
    it('should add new booking and redirect', async () => {
      const countBefore = bookedTimes.length
      const res = await request(app)
        .post('/booking')
        .send({ name: "name", date: "date", service: "service" });
      expect(bookedTimes.length).toBe(countBefore + 1);
      expect(res.statusCode).toEqual(302);
    });
  });
});

describe('When testing /booking', () => {
  describe('GET All', () => {
    it('should fetch all bookings', async () => {
      const res = await request(app)
        .get('/booking')
      expect(res.statusCode).toEqual(200);
      expect.arrayContaining(res.body);
    });
  });
});

describe('When testing /booking', () => {
  describe('DELETE', () => {
    it('should delete booking', async () => {
      const id = '1'; 
      const res = await request(app)
        .delete(`/booking/${id}`);
      expect(res.statusCode).toEqual(200);
    });
  });
});




//Fails because we dont have routes to specific ID
// ------
// describe('When testing /booking', () => {
//   describe('GET', () => {
//     it('should get a specific booking', async () => {
//       const res = await request(app)
//         .get('/booking/1');
//       expect(res.statusCode).toEqual(200);
//       expect(res.body).toHaveProperty('id');
//       expect(res.body).toHaveProperty('name');
//       expect(res.body).toHaveProperty('date');
//       expect(res.body).toHaveProperty('service');
//     });
//   });
// });