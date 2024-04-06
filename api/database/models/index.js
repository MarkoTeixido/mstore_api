const { User, UserSchema } = require ('./usersModel');
const { Product, ProductSchema } = require ('./productsModel');
const { Category, CategorySchema } = require ('./categoriesModel');
const { Customer, CustomerSchema } = require ('./customersModel');
const { Order, OrderSchema } = require ('./ordersModel.js');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));

  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
}

module.exports = setupModels;
