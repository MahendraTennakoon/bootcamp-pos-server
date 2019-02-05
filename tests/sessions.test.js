const request = require('supertest');
const app = require('../app/routes/index');
const User = require('../app/models/User');
const users = require('./migrations/users.json');

const clearUsers = () => {
    return User.destroy({
        where: {},
        truncate: true
    });
};

const populateUsers = () => {
    return User.bulkCreate(users);
};

beforeAll(() => {
    return clearUsers()
        .then(() => populateUsers())
        .catch(error => {
            console.log(error);
        });
});

afterAll(() => {
    return clearUsers();
});

test('POST /sessions', async () => {
    const credentials = {
        user_name: 'johndoe',
        password: '123'
    }
    const response = await request(app)
        .post('/sessions')
        .send(credentials)
        .set('Accept', 'application/json')

    expect(response).toBeDefined();
    expect(response.body.first_name).toEqual(users[0].first_name);
    expect(response.body.last_name).toEqual(users[0].last_name);
    expect(response.body.user_name).toEqual(users[0].user_name);
});