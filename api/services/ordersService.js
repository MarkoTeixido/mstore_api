const boom = require('@hapi/boom');
const { models } = require('../database/libs/sequelize');

// Clase de Orders Service que almacena todos los servicios
class OrdersService {

  // Crear una orden
  async create(dataOrder) {
    const newOrder = await models.Order.create(dataOrder);

    return newOrder;
  };

  // Agregar un item en una orden
  async addItem(dataOrderItem) {

    const newItem = await models.OrderProduct.create(dataOrderItem);

    return newItem;
  };

  // Obtener una orden por ID
  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user']
        },
        'items'
      ]
    });
    if (!order) {
      throw boom.notFound('Order not found.');
    }
    return order;
  };
}

module.exports = OrdersService;
