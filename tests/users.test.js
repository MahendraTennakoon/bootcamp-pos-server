const request = require('supertest');
const app = require('../app/routes/index');

test('users route', async () => {
    const users = [
        {
            "user_id": 1,
            "first_name": "john",
            "last_name": "doe",
            "user_name": "johndoe",
            "password": "123"
        }
    ];
    const response = await request(app).get('/users');
    expect(response).toBeDefined();
    expect(response.body).toEqual(users);
});

