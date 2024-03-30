const { Model, DataTypes } = require('sequelize');

const CATEGORY_TABLE = 'categories';

const CategorySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  categoryName: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    field: 'category_name',
  },
  categoryImage: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      isUrl: true
    },
    field: 'category_image',
  },
};

class Category extends Model {
  static associate(){};

  static config(sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: false,
    }
  };
};

module.exports = { CATEGORY_TABLE, CategorySchema, Category };
