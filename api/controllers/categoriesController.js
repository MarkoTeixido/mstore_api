const CategoriesService = require('../services/categoriesService');

// Instancia del categoriesService
const categoriesService = new CategoriesService();

// Controlador de las categorias
const categoryController = {
  getAllCategories: async (req, res, next) => {
    try {
      const categories = await categoriesService.find();
      (categories && categories.length > 0) ? res.status(200).json(categories) : res.status(204).send("There are no categories available.");
    } catch (error) {
      next(error);
    }
  },
  getCategoryByID: async (req, res, next) => {
    try {
      const { id } = req.params;
      const category = await categoriesService.findOne(id);
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  },
  createCategory: async (req, res, next) => {
    try {
      const dataCategory = req.body;
      const newCategory = await categoriesService.create(dataCategory);
      res.status(201).json({
        message: 'Category created successfully.',
        data: newCategory
      });
    } catch (error) {
      next(error);
    }
  },
  updateCategoryByID: async (req, res, next) => {
    try {
      const {id} = req.params;
      const body = req.body;
      const updatedCategory = await categoriesService.update(id, body);
      res.status(200).json({
        message: 'Category updated successfully.',
        data: updatedCategory,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteCategory: async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedCategory = await categoriesService.delete(id);
      res.status(200).json({
        message: 'Category deleted successfully.',
        data: deletedCategory,
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = categoryController;
