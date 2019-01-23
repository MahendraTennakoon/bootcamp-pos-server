const request = require('supertest');
const app = require('../app/routes/index');

/**
 * Delete all orders in orders table.
 */
const clearOrders = () => {
    
};

// test('Create order route', async () => {
//     const order = {
//         created_date: "2019-01-23"
//     };

//     const response = await request(app)
//         .post('/orders')
//         .send(order)
//         .set('Accept', 'application/json')
    
//     expect(response).toBeDefined();
// });

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

test('orders/:order_id route', async () => {
    const order = [
        {
            "id": 1,
            "name": "Classic Burger",
            "price": 450,
            "quantity": 12
        },
        {
            "id": 2,
            "name": "Backpackers Burger",
            "price": 725,
            "quantity": 21
        }
    ];

    const response = await request(app).get('/orders/1');
    expect(response).toBeDefined();
    expect(response.body).toEqual(order);
});