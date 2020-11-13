const {Sequelize} = require('sequelize');
const orm = new Sequelize('review', 'student', 'student', {dialect: 'mysql'});

var Reviews = orm.define('reviews', {
  review_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  product_id: {
    type: Sequelize.INTEGER,
  },
  customer_id: {
    type: Sequelize.INTEGER,
  },
  star_rating: {
    type: Sequelize.STRING,
  },
  comfort: {
    type: Sequelize.STRING,
  },
  quality: {
    type: Sequelize.STRING,
  },
  create_date: {
    type: Sequelize.DATEONLY,
  },
  comment: {
    type: Sequelize.TEXT,
  },
  category: {
    type: Sequelize.STRING,
  }
});

var Products = orm.define('products', {
  product_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

var Customers = orm.define('customers', {
  customer_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.INTEGER,
  }
});


Reviews.sync();
Products.sync();
Customers.sync();

module.exports.Reviews = Reviews;
module.exports.Products = Products;
module.exports.Customers = Customers;