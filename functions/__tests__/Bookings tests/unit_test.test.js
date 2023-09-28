/**
 * @group unit
 */

const bookingHandler = require('../../routes/bookings.js')

describe('When testing bookingHandler', () => {
  describe('post', () => {
    it('should respond with correct property', async () => {
      expect(bookingHandler).toHaveProperty('name')

      // add id, date and service
   })
  })
})

