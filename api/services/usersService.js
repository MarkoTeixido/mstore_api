const faker = require('faker');
const boom = require('@hapi/boom');

// Clase de Products Service que almacena todos los servicios
class UsersService {

  // Constructor que inicializa la lista de productos y genera los datos simulados
  constructor() {
    this.users = [];
    this.generate();
  };

  // Generar los productos
  generate() {
    const limit = 100;
    this.users = Array.from({ length: limit }, () => ({
      id: faker.datatype.uuid(),
      userName: faker.internet.userName(),
      userEmail: faker.internet.email(),
      userAvatar: faker.image.avatar(),
      userAddress: faker.address.streetAddress(),
      userPhone: faker.phone.phoneNumber(),
      userBirthdate: faker.date.future(),
      UserRegisteredAt: faker.date.past(),
    }));
  };

  // Crear un producto
  async create(userName, userEmail, userAvatar, userAddress, userPhone, userBirthdate, UserRegisteredAt ) {

    const newUser = {
      id: faker.datatype.uuid(),
      userName,
      userEmail,
      userAvatar,
      userAddress,
      userPhone,
      userBirthdate,
      UserRegisteredAt,
    };

    this.users.push(newUser);
    return newUser;
  };

  // Obtener todos los productos
  async find() {
    if (this.users.length === 0) {
      throw boom.notFound('There are no users available.');
    }
    return this.users;
  };

  // Obtener un producto por ID
  async findOne(id) {
    const user = this.users.find(item => item.id === id);
    if (!user) {
      throw boom.notFound('User not found.');
    }
    return user;
  };

  // Actualizar un producto
  async update(id, updatedData) {
    const index = this.users.findIndex(item => item.id === id);
    if (index !== -1) {
      this.users[index] = {
        ...this.users[index],
        ...updatedData,
      };
      return this.users[index];
    }else {
      throw boom.notFound("The user to update was not found.");
    }
  };

  // Eliminar un producto
  async delete(id) {
    const index = this.users.findIndex(item => item.id === id);
    if (index !== -1) {
      const deletedUser = this.users.splice(index, 1);
      return deletedUser[0];
    } else {
      throw boom.notFound("The user was not found.");
    }
  };
}

module.exports = UsersService;
