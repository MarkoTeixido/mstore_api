const { Model, DataTypes, Sequelize } = require('sequelize');

// Definir el nombre de la tabla en la base de datos
const USER_TABLE = 'users';

// Esquema de usuario que define la estructura de la tabla en la base de datos
const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: "costumer",
  }
};

// Definir el modelo de usuario la clase Model de Sequelize
class User extends Model {
  // Método estático para definir las asociaciones entre modelos
  static associate(models){
    this.hasOne(models.Customer, {
      as: 'customer',
      foreignKey: 'userId',
    });
  };

  // Método estático para configurar el modelo de usuario
  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false,
    }
  };
};

module.exports = { USER_TABLE, UserSchema, User };
