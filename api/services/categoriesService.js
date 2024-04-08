const boom = require('@hapi/boom');
const { models } = require('../database/libs/sequelize');

// Clase de Category Service que almacena todos los servicios
class CategoryService {

  // Crear una categoria
  async create(dataCategory) {
    const newCategory = await models.Category.create(dataCategory);

    return newCategory;
  }

  // Obtener todos las categorias
  async find() {
    const categories = await models.Category.findAll();
    if (categories.length === 0) {
      throw boom.notFound('There are no categories available.');
    }
    return categories;
  }

  // Obtener una cateogria por ID
  async findOne(id) {
    const category = await models.Category.findByPk(id);
    if (category.length === 0) {
      throw boom.notFound('Category not found.');
    }
    return category;
  }

  // Actualizar una categoria
  async update(id, updatedData) {
    const category = await this.findOne(id);
    const categoryUpdated = await category.update(updatedData);
    return categoryUpdated;
  }

  // Eliminar una categoria
  async delete(id) {
    const category = await this.findOne(id);
    await category.destroy();
  }
};

module.exports = CategoryService;
