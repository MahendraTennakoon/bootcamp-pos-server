const request = require('supertest');
const app = require('../app/routes/index');
const items = require('./migrations/items.json');
const Item = require('../app/models/Item');

/**
 * Delete all orders in orders table.
 */
const clearItems = () => {
    return Item.destroy({
        where: {}
    })
};

/**
 * Populate orders table.
 */
const populateItems = () => {
    return Item.bulkCreate(items)
};

beforeEach(() => {
    return clearItems()
        .then(() => populateItems())
});

test('items route', async () => {
    const response = await request(app).get('/items');
    expect(response).toBeDefined();
    expect(response.body).toEqual(items);
});

