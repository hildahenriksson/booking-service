/**
 * @group component
 */

const request = require('supertest')
const app = require('../../server')
const OurServices = require('../../resources/services.json')

describe('When testing /services', () => {
  describe('Post', () => {
    it('should add new booking and redirect', async () => {
      const countBefore = OurServices.length
      const res = await request(app)
        .post('/services')
        .send({ id:'id', title: "title", description: "description", price: 500, imgURL: "test img" });
        expect(res.statusCode).toEqual(302);
      expect(OurServices.length).toBe(countBefore + 1);
    });
  });
});

describe('When testing /service', () => {
  describe('GET All', () => {
    it('should fetch all services', async () => {
      const res = await request(app)
        .get('/services')
      expect(res.statusCode).toEqual(200);
      expect.arrayContaining(res.body);
    });
  });
});

describe('When testing /service', () => {
  describe('DELETE', () => {
    it('should delete service', async () => {
      const id = '1'; 
      const res = await request(app)
        .delete(`/services/${id}`);
      expect(res.statusCode).toEqual(200);
    });
  });
});