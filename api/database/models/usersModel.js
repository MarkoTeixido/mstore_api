const { Model, DataTypes } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  userName: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    field: 'username',
  },
  userEmail: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
    field: 'user_email',
  },
  userAvatar: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      isUrl: true
    },
    field: 'user_avatar',
  },
  userAddress: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'user_address',
  },
  userPhone: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'user_phone',
  },
  userBirthdate: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'user_birthdate',
  },
  userCreatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'user_created_at',
    defaultValue: DataTypes.NOW,
  },
  userRole: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'user_role',
    defaultValue: "client",
  }
};

class User extends Model {
  static associate(){};

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
