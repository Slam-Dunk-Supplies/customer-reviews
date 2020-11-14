const express = require('express');
const app = express();

const PORT = 3001;
const path = require('path');
const morgan = require('morgan');
var bodyParser = require('body-parser')

const {Reviews, Customers, getStarDistribution} = require('./../database/index.js');
// const { Sequelize } = require('sequelize/types');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('/api/reviews/:product_id', function(req, res) {
  let product_id = req.params.product_id;
  Reviews.findAll({where: {product_id: product_id}})
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.send(err);
  })
})

app.get('/api/reviews/customer/:customer', function(req, res) {
  let customer_id = req.params.customer;
  Customers.findAll({
    where: {customer_id: customer_id},
    include: [
      {model: Reviews}
    ]
  })
  .then((data) => {
    res.send(data);
  })
  .catch((err) => {
    res.send(err);
  })
})

app.get('/api/reviews/distribution', function(req, res) {
  console.log('this is params product_id', req.params.product_id);
  console.log('this is query', req.query);
  console.log('this is body', req.body);
  //
  res.send(req.query);
  // getStarDistribution(req.params.product_id)
  // .then((data) => {
  //   console.log('this is called')
  //   res.send(data);
  // })
  // .catch((err) => {
  //   res.send(err);
  // })
})

app.listen(PORT, () => {
    console.log(`app is running on localhost:${PORT}`);
})