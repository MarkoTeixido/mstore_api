const customersService = require('../services/customersService');

// Instancia del usersService
const customerService = new customersService();

// Controlador de los clientes
const customerController = {
  getAllCustomers: async (req, res, next) => {
    try {
      const users = await customerService.find();
      (users && users.length > 0) ? res.status(200).json(users) : res.status(204).send("There are no customers available.");
    } catch (error) {
      next(error);
    }
  },
  getCustomerByID: async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await customerService.findOne(id);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  },
  createCustomer: async (req, res, next) => {
    try {
      const { name, lastname, address, phone, birthdate } = req.body;
      const newUser = await customerService.create(name, lastname, address, phone, birthdate);
      res.status(201).json({
        message: 'Customer created successfully.',
        data: newUser
      });
    } catch (error) {
      next(error);
    }
  },
  updateCustomerByID: async (req, res, next) => {
    try {
      const {id} = req.params;
      const body = req.body;
      const updatedUser = await customerService.update(id, body);
      res.status(200).json({
        message: 'Customer updated successfully.',
        data: updatedUser,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteCustomer: async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedUser = await customerService.delete(id);
      res.status(200).json({
        message: 'Customer deleted successfully.',
        data: deletedUser,
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = customerController;
