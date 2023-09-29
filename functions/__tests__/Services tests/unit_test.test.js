/**
 * @group unit
 */

const request = require('supertest')
const serviceHandler = require('../../routes/services.js')

describe('When testing serviceHandler', () => {
  describe('post', () => {
    it('should respond with correct property', async () => {
      const response = await request(serviceHandler)
        .post('/')
        .send({
          title: "test title",
          description: "test description",
          price: 100,
          url: "test"
        });
    
      expect(response.body).toHaveProperty('title', 'description', 'price', 'imgURL');
    }, 10000);
    
  })
})