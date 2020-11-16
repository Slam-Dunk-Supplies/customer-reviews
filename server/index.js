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
app.use(express.static(path.resolve(__dirname, '../client/dist')));

// app.get('/api/reviews/distribution', (req, res) => {
//   console.log('this is params', req.params);
//   console.log('this is query', req.query);
//   console.log('this is body, empty', req.body);
//   res.send(req.query);
//   // only recieved empty array in post man, and don't see any console.log massage
//   // http://localhost:3001/api/reviews/distribution/?productId=1&star=one_stars
// });

app.get('/api/reviews/:product_id', (req, res) => {
  const productId = req.params.product_id;
  Reviews.findAll({ where: { product_id: productId } })
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
