const boom = require('@hapi/boom');
const { models } = require('../database/libs/sequelize');

// Clase de Customers Service que almacena todos los servicios
class CustomersService {

  // Constructor
  constructor() {
  };

  // Crear un cliente
  async create(dataCustomer) {

    const newCustomer = await models.Customer.create(dataCustomer, {
      include: ['user']
    });

    return newCustomer;
  };

  // Obtener todos los clientes
  async find() {
    const customers = await models.Customer.findAll({
      include: ['user']
    });
    if (customers.length === 0) {
      throw boom.notFound('There are no customers available.');
    }
    return customers;
  };

  // Obtener un cliente por ID
  async findOne(id) {
    const customer = await models.Customer.findByPk(id);
    if (!customer) {
      throw boom.notFound('Customer not found.');
    }
    return customer;
  };

  // Actualizar un cliente
  async update(id, updatedData) {
    const customer = await this.findOne(id);
    const customerUpdated = await customer.update(updatedData);
    return customerUpdated;
  };

  // Eliminar un cliente
  async delete(id) {
    const customer = await this.findOne(id);
    await customer.destroy();
  };
}

module.exports = CustomersService;
