const OrdersService = require('../services/ordersService');

// Instancia del productsService
const ordersService = new OrdersService();

// Controlador de los productos
const orderController = {
  getAllOrders: async (req, res, next) => {
    try {
      const orders = await ordersService.find();
      (orders && orders.length > 0) ? res.status(200).json(orders) : res.status(204).send("There are no orders available.");
    } catch (error) {
      next(error);
    }
  },
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
  updateOrderByID: async (req, res, next) => {
    try {
      const {id} = req.params;
      const body = req.body;
      const updatedOrder = await ordersService.update(id, body);
      res.status(200).json({
        message: 'Order updated successfully.',
        data: updatedOrder,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteOrder: async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedOrder = await ordersService.delete(id);
      res.status(200).json({
        message: 'Order deleted successfully.',
        data: deletedOrder,
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = orderController;
