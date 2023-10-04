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
    const idToDelete = '4';

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

describe('PUT /booking/id', () => {
  it('should update a booking and return a 200 status code', async () => {
    const update = {
      name: "Testarsson",
      date: "2024-04-19",
      startTime: "10",
      duration: "5",
      service: "Vårstädning"
    }
    const idToUpdate = "3";

    const putResponse = await request(app)
      .put(`/booking/${idToUpdate}`)
      .send(update);

    expect(putResponse.statusCode).toBe(200);

    const getResponse = await request(app).get('/booking');

    const name = getResponse.body[2].name; 
    const date = getResponse.body[2].date; 
    const startTime = getResponse.body[2].startTime; 
    const duration = getResponse.body[2].duration; 
    const service = getResponse.body[2].service; 

    console.log('the title: ' + JSON.stringify(getResponse.body));
    expect(name).toBe("Testarsson")
    expect(date).toBe("2024-04-19")
    expect(startTime).toBe("10")
    expect(duration).toBe("5")
    expect(service).toBe("Vårstädning")
  })
})