const { Model, DataTypes, Sequelize } = require('sequelize');
const { CUSTOMER_TABLE } = require('./customersModel');

// Definir el nombre de la tabla en la base de datos
const ORDER_TABLE = 'orders';

// Esquema de orden que define la estructura de la tabla en la base de datos
const OrderSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  customerId: {
    field: 'customer_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: CUSTOMER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  total: {
    type: DataTypes.VIRTUAL,
    get() {
      if (this.items.length > 0) {
        return this.items.reduce((total, item) => {
          return total + (item.price * item.OrderProduct.amount);
        }, 0);
      }
      return 0;
    }
  }
}

// Definir el modelo de orden la clase Model de Sequelize
class Order extends Model {
  // Método estático para definir las asociaciones entre modelos
  static associate(models) {
    this.belongsTo(models.Customer, {
      as: 'customer',
    });

    this.belongsToMany(models.Product, {
      as: 'items',
      through: models.OrderProduct,
      foreignKey: 'orderId',
      otherKey: 'productId',
    });
  }

  // Método estático para configurar el modelo de orden
  static config(sequelize) {
    return {
      sequelize,
      tableName: ORDER_TABLE,
      modelName: 'Order',
      timestamps: false
    }
  }
}

module.exports = {ORDER_TABLE, OrderSchema, Order };
