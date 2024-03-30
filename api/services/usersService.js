const boom = require('@hapi/boom');
const { models } = require('../database/libs/sequelize');

// Clase de Products Service que almacena todos los servicios
class UsersService {

  // Constructor
  constructor() {
  };

  // Crear un producto
  async create(userName, userEmail, userAvatar, userAddress, userPhone, userBirthdate ) {

    const newUser = await models.User.create({
      userName,
      userEmail,
      userAvatar,
      userAddress,
      userPhone,
      userBirthdate,
    });

    return newUser;
  };

  // Obtener todos los productos
  async find() {
    const users = await models.User.findAll();
    if (users.length === 0) {
      throw boom.notFound('There are no users available.');
    }
    return users;
  };

  // Obtener un producto por ID
  async findOne(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      throw boom.notFound('User not found.');
    }
    return user;
  };

  // Actualizar un producto
  async update(id, updatedData) {
    const user = await this.findOne(id);
    const userUpdated = await user.update(updatedData);
    return userUpdated;
  };

  // Eliminar un producto
  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
  };
}

module.exports = UsersService;
