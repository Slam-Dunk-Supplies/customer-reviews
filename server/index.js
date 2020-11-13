const express = require('express');
const app = express();

const PORT = 3001;
const path = require('path');
const morgan = require('morgan');

const {Reviews, Customers} = require('./../database/index.js');

app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, '../client/dist')));

app.get('/api/reviews/:id', function(req, res) {
  let review_id = req.params.id;
  Reviews.findOne({where: {review_id: review_id}})
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

app.listen(PORT, () => {
    console.log(`app is running on localhost:${PORT}`);
})