'use strict';

const { UserSchema, USER_TABLE } = require('../models/usersModel');
const { CategorySchema, CATEGORY_TABLE } = require('../models/categoriesModel');
const { ProductSchema, PRODUCT_TABLE } = require('../models/productsModel');
const { CustomerSchema, CUSTOMER_TABLE } = require('../models/customersModel');


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(USER_TABLE, UserSchema);
    await queryInterface.dropTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.dropTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.dropTable(CUSTOMER_TABLE, CustomerSchema);
  }
};
