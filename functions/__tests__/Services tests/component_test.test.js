/**
 * @group component
 */

const request = require('supertest');
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
  });
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
      .delete(`/services/${nonExistentId}`);

    expect(response.statusCode).toBe(404);
  });
});

describe('PUT /service/id', () => {
  it('should update a service and return a 200 status code', async () => {
    const update = {
      title: "Dust Testing",
      description: "Some description",
      price: "5",
      imgURL: "image"
    };
    const idToUpdate = "4";

    const putResponse = await request(app)
      .put(`/services/${idToUpdate}`)
      .send(update);

    expect(putResponse.statusCode).toBe(200);

    const getResponse = await request(app).get('/services');

    const title = getResponse.body[2].title;
    const description = getResponse.body[2].description;
    const price = getResponse.body[2].price;
    const imgURL = getResponse.body[2].imgURL;

    expect(title).toBe("Dust Testing");
    expect(description).toBe("Some description");
    expect(price).toBe("5");
    expect(imgURL).toBe("image");
  });
});
