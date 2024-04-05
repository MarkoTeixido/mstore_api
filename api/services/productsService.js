const boom = require('@hapi/boom');
const { models } = require('../database/libs/sequelize');

// Clase de Products Service que almacena todos los servicios
class ProductsService {

  // Constructor
  constructor() {
  };

  // Crear un producto
  async create(dataProduct) {
    const newProduct = await models.Product.create(dataProduct);

    return newProduct;
  };

  // Obtener todos los productos
  async find() {
    const product = await models.Product.findAll({
      include: ['category']
    });
    if (product.length === 0) {
      throw boom.notFound('There are no products available.');
    }
    return product;
  };

  // Obtener un producto por ID
  async findOne(id) {
    const product = await models.Product.findByPk(id, {
      include: ['category']
    });
    if (!product) {
      throw boom.notFound('Product not found.');
    }
    return product;
  };

  // Actualizar un producto
  async update(id, updatedData) {
    const product = await this.findOne(id);
    const productUpdated = await product.update(updatedData);
    return productUpdated;
  };

  // Eliminar un producto
  async delete(id) {
    const product = await this.findOne(id);
    await product.destroy();
  };
}

module.exports = ProductsService;
