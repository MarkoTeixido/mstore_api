const { Model, DataTypes } = require('sequelize');

// Definir el nombre de la tabla en la base de datos
const CATEGORY_TABLE = 'categories';

// Esquema de la categoría que define la estructura de la tabla en la base de datos
const CategorySchema = {
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
  image: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      isUrl: true
    },
  },
};

// Definir el modelo de categoría la clase Model de Sequelize
class Category extends Model {
  // Método estático para definir las asociaciones entre modelos
  static associate(models){
    this.hasMany(models.Product, {
      as: 'products',
      foreignKey: 'categoryId',
    });
  };

  // Método estático para configurar el modelo de categoría
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
