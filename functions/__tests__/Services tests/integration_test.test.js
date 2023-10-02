/**
 * @group integration
 */

const request = require('supertest')
const express = require('express');
const router = require('../../routes/services');
const services = require('../../resources/services');
const app = express();
app.use(express.json());
app.use('/services', router);

describe('When testing serviceHandler', () => {
  describe('Post', () => {
    it('should respond with correct property', async () => {
      const countBefore = services.length;
      const res = await request(app)
        .post('/services') 
        .send({
          title: "test title",
          description: "test description",
          price: 100,
          url: "test"
        });
    
      expect(res.status).toBe(302);
      expect(services.length).toBe(countBefore + 1);
    });
  })
});

describe('GET /services', () => {
  it('should return all services with a 200 status code', async () => {
    const response = await request(app)
      .get('/services');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(services);
  });
});

describe('DELETE /service/:id', () => {
  it('should delete a service and return a 200 status code', async () => {
    const idToDelete = '1';

    const response = await request(app)
      .delete(`/services/${idToDelete}`);

    expect(response.statusCode).toBe(200);
    expect(services.some(service => service.id === idToDelete)).toBe(false);
  });

  it('should return a 404 status code if service not found', async () => {
    const nonExistentId = 'nonexistentid';

    const response = await request(app)
      .delete(`/service/${nonExistentId}`);

    expect(response.statusCode).toBe(404);
  });
});
