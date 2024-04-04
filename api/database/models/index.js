const { User, UserSchema } = require ('./usersModel');
const { Product, ProductSchema } = require ('./productsModel');
const { Category, CategorySchema } = require ('./categoriesModel');
const { Customer, CustomerSchema } = require ('./customersModel');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));

  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
}

module.exports = setupModels;
