'use strict';

const { ProductSchema, PRODUCT_TABLE } = require('../models/productsModel');
const { UserSchema, USER_TABLE } = require('../models/usersModel');
const { CategorySchema, CATEGORY_TABLE } = require('../models/categoriesModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(USER_TABLE , UserSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.dropTable(USER_TABLE , UserSchema);
    await queryInterface.dropTable(CATEGORY_TABLE, CategorySchema);
  }
};
