const boom = require('@hapi/boom');
const { models } = require('../database/libs/sequelize');

// Clase de Orders Service que almacena todos los servicios
class OrdersService {

  // Constructor
  constructor() {
  };

  // Crear una orden
  async create(dataOrder) {

    const newOrder = await models.Order.create(dataOrder);

    return newOrder;
  };

  // Obtener todos los clientes
  async find() {
    const orders = await models.Order.findAll();
    if (orders.length === 0) {
      throw boom.notFound('There are no orders available.');
    }
    return orders;
  };

  // Obtener una orden por ID
  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user']
        }
      ]
    });
    if (!order) {
      throw boom.notFound('Order not found.');
    }
    return order;
  };

  // Actualizar una orden
  async update(id, updatedData) {
    const order = await this.findOne(id);
    const orderUpdated = await order.update(updatedData);
    return orderUpdated;
  };

  // Eliminar una orden
  async delete(id) {
    const order = await this.findOne(id);
    await order.destroy();
  };
}

module.exports = OrdersService;
