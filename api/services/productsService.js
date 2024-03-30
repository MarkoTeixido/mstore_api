const faker = require('faker');
const boom = require('@hapi/boom');
const { models } = require('../database/libs/sequelize');

// Clase de Products Service que almacena todos los servicios
class ProductsService {

  // Constructor que inicializa la lista de productos y genera los datos simulados
  constructor() {
    this.products = [];
    this.generate();
  };

  // Generar los productos
  generate() {
    const limit = 100;
    this.products = Array.from({ length: limit }, () => ({
      id: faker.datatype.uuid(),
      productName: faker.commerce.productName(),
      productPrice: parseFloat(faker.commerce.price()),
      productImage: faker.image.imageUrl(),
      productCategory: 1,
    }));
  };

  // Crear un producto
  async create(productName, productPrice, productImage, productCategory) {

    const newProduct = {
      id: faker.datatype.uuid(),
      productName,
      productPrice,
      productImage,
      productCategory,
    };

    this.products.push(newProduct);
    return newProduct;
  };

  // Obtener todos los productos
  async find() {
    const product = await models.User.findAll();
    if (product.length === 0) {
      throw boom.notFound('There are no products available.');
    }
    return product;
  };

  // Obtener un producto por ID
  async findOne(id) {
    const product = await models.User.findByPk(id);
    if (!product) {
      throw boom.notFound('Product not found.');
    }
    return product;
  };

  // Actualizar un producto
  async update(id, updatedData) {
    const index = this.products.findIndex(item => item.id === id);
    if (index !== -1) {
      this.products[index] = {
        ...this.products[index],
        ...updatedData,
      };
      return this.products[index];
    }else {
      throw boom.notFound("The product to update was not found.");
    }
  };

  // Eliminar un producto
  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index !== -1) {
      const deletedProduct = this.products.splice(index, 1);
      return deletedProduct[0];
    } else {
      throw boom.notFound("The product was not found.");
    }
  };
}

module.exports = ProductsService;
