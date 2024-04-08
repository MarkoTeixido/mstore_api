const customersService = require('../services/customersService');

// Instancia del customersService
const customerService = new customersService();

// Controlador de los clientes
const customerController = {
  getAllCustomers: async (req, res, next) => {
    try {
      const customers = await customerService.find();
      (customers && customers.length > 0) ? res.status(200).json(customers) : res.status(204).send("There are no customers available.");
    } catch (error) {
      next(error);
    }
  },
  getCustomerByID: async (req, res, next) => {
    try {
      const { id } = req.params;
      const customer = await customerService.findOne(id);
      res.status(200).json(customer);
    } catch (error) {
      next(error);
    }
  },
  createCustomer: async (req, res, next) => {
    try {
      const dataCustomer = req.body;
      const newCustomer = await customerService.create(dataCustomer);
      res.status(201).json({
        message: 'Customer created successfully.',
        data: newCustomer
      });
    } catch (error) {
      next(error);
    }
  },
  updateCustomerByID: async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updatedCustomer = await customerService.update(id, body);
      res.status(200).json({
        message: 'Customer updated successfully.',
        data: updatedCustomer,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteCustomer: async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedCustomer = await customerService.delete(id);
      res.status(200).json({
        message: 'Customer deleted successfully.',
        data: deletedCustomer,
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = customerController;
