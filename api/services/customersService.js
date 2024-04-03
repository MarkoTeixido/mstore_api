const boom = require('@hapi/boom');
const { models } = require('../database/libs/sequelize');

// Clase de Customers Service que almacena todos los servicios
class CustomersService {

  // Constructor
  constructor() {
  };

  // Crear un cliente
  async create(name, lastname, address, phone, birthdate) {

    const newUser = await models.User.create({
      name,
      lastname,
      address,
      phone,
      birthdate,
    });

    return newUser;
  };

  // Obtener todos los clientes
  async find() {
    const users = await models.User.findAll();
    if (users.length === 0) {
      throw boom.notFound('There are no customers available.');
    }
    return users;
  };

  // Obtener un cliente por ID
  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('Customer not found.');
    }
    return user;
  };

  // Actualizar un cliente
  async update(id, updatedData) {
    const user = await this.findOne(id);
    const userUpdated = await user.update(updatedData);
    return userUpdated;
  };

  // Eliminar un cliente
  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
  };
}

module.exports = CustomersService;
