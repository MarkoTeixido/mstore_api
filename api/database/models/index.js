const { User, UserSchema } = require ('./usersModel');
const { Product, ProductSchema } = require ('./productsModel');
const { Category, CategorySchema } = require ('./categoriesModel');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
}

module.exports = setupModels;
