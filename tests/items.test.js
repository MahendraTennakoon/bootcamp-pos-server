const request = require('supertest');
const app = require('../app/routes/index');

test('items route', async () => {
    const orders = [
        {
            "id": "0001",
            "name": "Classic Burger",
            "price": 450
        },
        {
            "id": "0002",
            "name": "Backpackers Burger",
            "price": 725
        },
        {
            "id": "0003",
            "name": "Bistro Burger",
            "price": 250
        },
        {
            "id": "0004",
            "name": "Chicken Burger",
            "price": 300
        },
        {
            "id": "0005",
            "name": "BBQ Burger",
            "price": 360
        }
    ];
    const response = await request(app).get('/items');
    expect(response).toBeDefined();
    expect(response.body).toEqual(orders);
});

