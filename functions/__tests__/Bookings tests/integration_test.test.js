/**
 * @group integration
 */

describe('When testing router', () => {
  describe('post', () => {
    it('should create id', async () => {
      const response = await supertest(app)
        .post('/')
        .send({ name: "name", date: "2024-01-01", startTime: 9, service: "Floor swabbing" });
      const getResponse = await supertest(app).get('/booking');

      console.log('Test log: ' + JSON.stringify(getResponse));
      expect(response.body[1]).toHaveProperty('id');
    });
  });
});
