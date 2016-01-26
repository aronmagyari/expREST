var express = require('express');
var apiRouter = express.Router();
var urlBase = '/api/customers';

app.use(urlBase, apiRouter);

apiRouter.get(urlBase, function(req, res) {
    // find all customers 
});

apiRouter.get(urlBase + '/:id', function(req, res) {
    // find customer by id
});

apiRouter.post(urlBase, function(req, res) {
    // save new customer
});

apiRouter.put(urlBase + '/:id', function(req, res) {
   // find customer by id and update
});

apiRouter.delete(urlBase + '/:id', function(req, res) {
   // find customer by id and delete
});

apiRouter.get(urlBase + '/:id/orders', function(req, res) {
   // find customer by id and return customer.orders 
});

module.exports = apiRouter;
