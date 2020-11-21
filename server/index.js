const PORT = 3001;
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');

const { Reviews, Customers } = require('../database/index.js');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/:id', express.static(path.resolve(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.redirect(`http://ec2-18-216-4-88.us-east-2.compute.amazonaws.com:${3001}/20/`);
});

app.get('/api/reviews/:product_id', (req, res) => {
  const productId = req.params.product_id;
  Reviews.findAll({
    where: { product_id: productId },
    include: [
      { model: Customers },
    ],
  })
    .then((data) => {
      // I can count star distribution here and send together with data back to client
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get('/api/reviews/customer/:customer', (req, res) => {
  const customerId = req.params.customer;
  Customers.findAll({
    where: { customer_id: customerId },
    include: [
      { model: Reviews },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(PORT, () => {
  console.log(`app is running on localhost:${PORT}`);
});
