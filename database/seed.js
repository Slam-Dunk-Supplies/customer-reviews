/* eslint-disable camelcase */
/* eslint-disable no-plusplus */
const faker = require('faker');
const { Reviews, Products, Customers } = require('./index.js');

faker.locale = 'en_US';
const getRadomInt = (num) => Math.floor(Math.random() * Math.floor(num)) + 1;

const populateFakeDataReviews = () => {
  const stars = ['one_stars', 'two_stars', 'three_stars', 'four_stars', 'five_stars'];
  const levels = ['first', 'second', 'third', 'fourth', 'fifth'];
  const categories = ['shoes', 'clothes'];
  // outer loop product id, primary records, inner loop random number of reviews for a product
  for (let i = 1; i <= 100; i++) {
    const num_of_reviews = getRadomInt(30) - 1;
    for (let j = 0; j < num_of_reviews; j++) {
      Reviews.create({
        product_id: i,
        customer_id: getRadomInt(20),
        star_rating: stars[getRadomInt(5) - 1],
        comfort: levels[getRadomInt(5) - 1],
        quality: levels[getRadomInt(5) - 1],
        create_date: faker.date.past(),
        comment: faker.lorem.sentences(),
        category: categories[getRadomInt(2) - 1],
      })
        .then(() => {
          console.log('created');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};

const populateFakeDataCustomers = () => {
  for (let i = 0; i < 20; i++) {
    Customers.create({
      name: faker.name.findName(),
    })
      .then(() => {
        console.log('created');
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const populateFakeDataProducts = () => {
  for (let i = 1; i <= 100; i++) {
    Products.create({
      product_id: i,
    });
  }
};

populateFakeDataReviews();
populateFakeDataCustomers();
populateFakeDataProducts();
