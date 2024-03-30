const { Model, DataTypes } = require('sequelize');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  productName: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    field: 'product_name',
  },
  productPrice: {
    allowNull: false,
    type: DataTypes.DECIMAL(10, 2),
    field: 'product_price',
  },
  productImage: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      isUrl: true
    },
    field: 'product_image',
  },
  productCategory: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'product_category',
    references: {
      model: 'categories',
      key: 'id'
    }
  },
};

class Product extends Model {
  static associate(){};

  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false,
    }
  };
};

module.exports = { PRODUCT_TABLE, ProductSchema, Product };
