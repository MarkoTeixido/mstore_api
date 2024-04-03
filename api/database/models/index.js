const { User, UserSchema } = require ('./usersModel');
const { Product, ProductSchema } = require ('./productsModel');
const { Category, CategorySchema } = require ('./categoriesModel');
const { Customer, CustomerSchema } = require ('./customersModel');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
}

module.exports = setupModels;
