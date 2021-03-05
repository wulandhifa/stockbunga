const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add bungas
 *  @method GET /add-bunga
 */
route.get('/add-bunga', services.add_bunga)

/**
 *  @description for update bunga
 *  @method GET /update-bunga
 */
route.get('/update-bunga', services.update_bunga)


// API
route.post('/api/bungas', controller.create);
route.get('/api/bungas', controller.find);
route.put('/api/bungas/:id', controller.update);
route.delete('/api/bungas/:id', controller.delete);


module.exports = route