const OrdersService = require('../services/ordersService');

// Instancia del ordersService
const ordersService = new OrdersService();

// Controlador de las ordenes
const orderController = {
  getOrderByID: async (req, res, next) => {
    try {
      const { id } = req.params;
      const order = await ordersService.findOne(id);
      res.status(200).json(order);
    } catch (error) {
      next(error);
    }
  },
  createOrder: async (req, res, next) => {
    try {
      const dataOrder = req.body;
      const newOrder = await ordersService.create(dataOrder);
      res.status(201).json({
        message: 'Order created successfully.',
        data: newOrder
      });
    } catch (error) {
      next(error);
    }
  },
  addItemOrder: async (req, res, next) => {
    try {
      const dataItem = req.body;
      const newItem = await ordersService.addItem(dataItem);
      res.status(201).json({
        message: 'Item added to order successfully',
        data: newItem
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = orderController;
