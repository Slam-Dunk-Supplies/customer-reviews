const Sequelize = require('sequelize');
const orm = new Sequelize('review', username, password, {dialect: 'mysql'});

var Reviews = orm.define('reviews', {
  review_id: {
    type: Sequelize.INTEGER,
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
  is_helpful: {
    type: Sequelize.BOOLEAN,
  }
});

var Products = orm.define('products', {
  product_id: {
    type: Sequelize.INTEGER,
  },
  category_id: {
    type: Sequelize.INTEGER,
  }
});

var Customers = orm.define('customers', {
  customer_id: {
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.INTEGER,
  }
});

var Categories = orm.define('categories', {
  category_id: {
    type: Sequelize.INTEGER,
  },
  description: {
    type: Sequelize.STRING,
  }
});

Reviews.sync({force: true});
Products.sync({force: true});
Customers.sync({force: true});
Categories.sync({force: true});

module.exports.Reviews = Reviews;
module.exports.Products = Products;
module.exports.Customers = Customers;
module.exports.Categories = Categories;