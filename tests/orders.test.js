const request = require('supertest');
const app = require('../app/routes/index');

test('orders route', async () => {
    const orders = [
        {
            "order_id": 1,
            "created_date": "2019-01-22",
        },
        {
            "order_id": 2,
            "created_date": "2019-01-22"
        }
    ];
    const response = await request(app).get('/orders');
    expect(response).toBeDefined();
    expect(response.body).toEqual(orders);
});

