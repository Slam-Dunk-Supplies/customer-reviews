/* eslint-disable object-shorthand */
/* eslint-disable camelcase */
const { Sequelize } = require('sequelize');
const loginInfo = require('./mySQLpw.js');

const orm = new Sequelize('review', loginInfo.u, loginInfo.p, { dialect: 'mysql' });

const Reviews = orm.define('reviews', {
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
  category: {
    type: Sequelize.STRING,
  },
  comment: {
    type: Sequelize.TEXT,
  },
  fitness: {
    type: Sequelize.STRING,
  },
  helpful: {
    type: Sequelize.INTEGER,
  },
  unhelpful: {
    type: Sequelize.INTEGER,
  },
});

const Products = orm.define('products', {
  product_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

const Customers = orm.define('customers', {
  customer_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
});

// Customers.hasMany(Reviews, {
//   foreignKey: {
//     name: 'customer_id',
//     allowNull: false,
//   },
// });
// Reviews.belongsTo(Customers, { foreignKey: 'customer_id' });

Products.sync();
Customers.sync();
Reviews.sync();

// eslint-disable-next-line func-names
const getStarDistribution = function (product_id, star_rating) {
  return Reviews.findAll({
    where: { product_id: product_id, star_rating: star_rating },
    attributes: [
      [orm.fn('COUNT', orm.col('star_rating')), 'n_stars'],
    ],
  });
};

module.exports.Reviews = Reviews;
module.exports.Products = Products;
module.exports.Customers = Customers;
module.exports.getStarDistribution = getStarDistribution;
