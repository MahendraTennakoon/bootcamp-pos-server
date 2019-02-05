const request = require('supertest');
const app = require('../app/routes/index');
const User = require('../app/models/User');
const users = require('../tests/migrations/users.json');

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

test('users route', async () => {
    let response = await request(app).get('/users');
    response = response.body.map((user) => {
        return {
            "first_name": user.first_name,
            "last_name": user.last_name,
            "password": user.password,
            "user_name": user.user_name
        }
    });
    expect(response).toBeDefined();
    expect(response).toEqual(users);
});

