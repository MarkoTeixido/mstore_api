const { User, UserSchema } = require ('./usersModel');
const { Product, ProductSchema } = require ('./productsModel');
const { Category, CategorySchema } = require ('./categoriesModel');
const { Customer, CustomerSchema } = require ('./customersModel');
const { Order, OrderSchema } = require ('./ordersModel.js');
const { OrderProduct, OrderProductSchema } = require ('./order-productModel.js');

// Función setupModels para configurar los modelos y sus relaciones en la base de datos
function setupModels(sequelize) {
  // Inicializar los modelos con sus respectivos esquemas y configuraciones
  User.init(UserSchema, User.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

   // Establecer las asociaciones entre los modelos
  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
  OrderProduct.associate(sequelize.models);
}

module.exports = setupModels;
