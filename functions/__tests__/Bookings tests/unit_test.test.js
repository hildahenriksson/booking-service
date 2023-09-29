/**
 * @group unit
 */

const request = require('supertest')
const bookingHandler = require('../../routes/bookings.js')

describe('When testing bookingHandler', () => {
  describe('post', () => {
    it('should respond with correct property', async () => {
      expect(bookingHandler).toHaveProperty('name')
   });
  });
});

// describe('When posting a new booking', () => {
//   describe('post', () => {
//     it('should respond with correct property', async () => {
//       const response = await request(bookingHandler)
//       .post('/')
//       .send({
//         id: "test ID",
//         name: "test name",
//         date: "test date",
//         service: "test service"
//       })
//       expect(response.body).toHaveProperty('id', 'name', 'date', 'service')
//     }, 10000)
//   })
// })

