const { Model, DataTypes } = require('sequelize');
const { CATEGORY_TABLE } = require('./categoriesModel');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  price: {
    allowNull: false,
    type: DataTypes.DECIMAL(10, 2),
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      isUrl: true
    },
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  categoryId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'category_id',
    references: {
      model: CATEGORY_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
};

class Product extends Model {
  static associate(models){
    this.belongsTo(models.Category, {as: 'category'});
  };

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
