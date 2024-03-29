const CategoriesService = require('../services/categoriesService');

// Instancia del productsService
const categoriesService = new CategoriesService();

// Controlador de los productos
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
      const product = await categoriesService.findOne(id);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  },
  createCategory: async (req, res, next) => {
    try {
      const { categoryName, categoryImage } = req.body;
      const newCategory = await categoriesService.create(categoryName, categoryImage);
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
