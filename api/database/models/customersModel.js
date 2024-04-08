const { Model, DataTypes } = require('sequelize');
const { USER_TABLE } = require('./usersModel');

// Definir el nombre de la tabla en la base de datos
const CUSTOMER_TABLE = 'customers';

// Esquema de cliente que define la estructura de la tabla en la base de datos
const CustomerSchema = {
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
  lastname: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  birthdate: {
    allowNull: true,
    type: DataTypes.STRING,
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    unique: true,
    field: 'user_id',
    references: {
      model: USER_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
};

// Definir el modelo de cliente la clase Model de Sequelize
class Customer extends Model {
  // Método estático para definir las asociaciones entre modelos
  static associate(models) {
    this.belongsTo(models.User, {as: 'user'});
    this.hasMany(models.Order, {
      as: 'orders',
      foreignKey: 'customerId'
    })
  }

  // Método estático para configurar el modelo de cliente
  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMER_TABLE,
      modelName: 'Customer',
      timestamps: false,
    }
  };
};

module.exports = { CUSTOMER_TABLE, CustomerSchema, Customer };
