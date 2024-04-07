const boom = require('@hapi/boom');
const { Op } = require('sequelize');
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
  async find(dataQuery) {

    const options = {
      include: ['category'],
      where: {}
    }

    const { limit, offset } = dataQuery;

    if (limit && offset) {
      options.limit =  limit;
      options.offset =  offset;
    }

    const { price_min, price_max } = dataQuery;
    if (price_min && price_max) {
      options.where.price = {
        [Op.gte]: price_min,
        [Op.lte]: price_max,
      };
    }

    const products = await models.Product.findAll(options);

    if (products.length === 0) {
      throw boom.notFound('There are no products available.');
    }

    return products;
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
