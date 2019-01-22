const request = require('supertest');
const app = require('../app/routes/index');

test('items route', async () => {
    const items = [
        {
            "id": 1,
            "name": "Classic Burger",
            "price": 450
        },
        {
            "id": 2,
            "name": "Backpackers Burger",
            "price": 725
        },
        {
            "id": 3,
            "name": "Bistro Burger",
            "price": 250
        },
        {
            "id": 4,
            "name": "Chicken Burger",
            "price": 300
        },
        {
            "id": 5,
            "name": "BBQ Burger",
            "price": 360
        }
    ];
    const response = await request(app).get('/items');
    expect(response).toBeDefined();
    expect(response.body).toEqual(items);
});

