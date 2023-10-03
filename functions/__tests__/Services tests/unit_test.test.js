/**
 * @group unit
 */

const request = require('supertest')
const serviceHandler = require('../../resources/services.json')

describe('When testing jest', () => {
	describe('given i have a non failing test', () => {
		it('should be one', () => {
			expect(1).toBe(1)
		})
	})
})

// describe('When testing serviceHandler', () => {
//   describe('post', () => {
//     it('should respond with correct property', async () => {
//       const response = await request(serviceHandler)
//       console.log(response)
//         .post('/')
//         .send({
//           id: "8",
//           title: "test title",
//           description: "test description",
//           price: 100,
//           imgURL: "test"
//         });
        
//       expect(response.body).toHaveProperty('id', 'title', 'description', 'price', 'imgURL');
//     }, );
    
//   })
// })