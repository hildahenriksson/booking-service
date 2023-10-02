/**
 * @group integration
 */

const express = require('express');
const request = require('supertest');
const router = require('../../routes/bookings');
const bookedTimes = require('../../resources/booked-times.json')
const app = express();
app.use(express.json());
app.use('/booking', router);

describe('When testing /booking', () => {
  describe('Post', () => {
    it('should add new booking and redirect', async () => {
      const countBefore = bookedTimes.length
      const res = await request(app)
        .post('/booking')
        .send({ 
          name: "name", 
          date: "date", 
          service: "service" });
      expect(bookedTimes.length).toBe(countBefore + 1);
      expect(res.statusCode).toEqual(302);
    });
  });
});

describe('GET /booking', () => {
  it('should return all bookings with a 200 status code', async () => {
    const response = await request(app)
      .get('/booking');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(bookedTimes);
  });
});

describe('DELETE /booking/:id', () => {
  it('should delete a booking and return a 200 status code', async () => {
    const idToDelete = '1';

    const response = await request(app)
      .delete(`/booking/${idToDelete}`);

    expect(response.statusCode).toBe(200);
    expect(bookedTimes.some(booking => booking.id === idToDelete)).toBe(false);
  });

  it('should return a 404 status code if booking not found', async () => {
    const nonExistentId = 'nonexistentid';

    const response = await request(app)
      .delete(`/booking/${nonExistentId}`);

    expect(response.statusCode).toBe(404);
  });
});
