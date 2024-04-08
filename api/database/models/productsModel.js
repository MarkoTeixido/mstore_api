const { Model, DataTypes } = require('sequelize');
const { CATEGORY_TABLE } = require('./categoriesModel');

// Definir el nombre de la tabla en la base de datos
const PRODUCT_TABLE = 'products';

// Esquema de producto que define la estructura de la tabla en la base de datos
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

// Definir el modelo de producto la clase Model de Sequelize
class Product extends Model {
  // Método estático para definir las asociaciones entre modelos
  static associate(models){
    this.belongsTo(models.Category, {as: 'category'});
  };

  // Método estático para configurar el modelo de producto
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
