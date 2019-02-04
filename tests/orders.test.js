const request = require('supertest');
const app = require('../app/routes/index');
const Order = require('../app/models/Order');
const OrderDetails = require('../app/models/OrderDetail');
const orders = require('./migrations/orders.json');

/**
 * Order table is referenced in a foreign key in OrderDetails table.
 */
const clearOrderDetails = () => {
    return OrderDetails.destroy({
        where: {},
        truncate: true
    })
};

/**
 * Delete all orders in orders table.
 */
const clearOrders = () => {
    return Order.destroy({
        where: {}
    })
};

/**
 * Populate orders table.
 */
const populateOrders = () => {
    return Order.bulkCreate(orders)
};

describe('all orders can be retrieved', () => {
    beforeEach(() => {
        return clearOrderDetails()
            .then(() => clearOrders())
            .catch(error => {
                console.log(error);
            })
    });

    afterAll(() => {
        return clearOrderDetails()
            .then(() => clearOrders())
            .catch(error => {
                console.log(error);
            })
    });

    test('GET /orders', async () => {
        await populateOrders();
        let response = await request(app).get('/orders');

        /**
         * order_id can be ignored since it is set to auto increment.
         */
        response = response.body.map(order => {
            return {
                created_date: order.created_date
            }
        });
        expect(response).toBeDefined();
        expect(response.length).toBe(orders.length);
        expect(response).toEqual(orders);
    });

    test('POST /orders', async () => {
        const order = {
            created_date: "2019-01-23"
        };

        const response = await request(app)
            .post('/orders')
            .send(order)
            .set('Accept', 'application/json')

        expect(response).toBeDefined();
        expect(response.body.created_date).toBe(order.created_date);
    });
});



// test('orders/:order_id route', async () => {
//     const order = [
//         {
//             "id": 1,
//             "name": "Classic Burger",
//             "price": 450,
//             "quantity": 12
//         },
//         {
//             "id": 2,
//             "name": "Backpackers Burger",
//             "price": 725,
//             "quantity": 21
//         }
//     ];

//     const response = await request(app).get('/orders/1');
//     expect(response).toBeDefined();
//     expect(response.body).toEqual(order);
// });