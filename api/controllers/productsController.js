const ProductsService = require('../services/productsService');

// Instancia del productsService
const productsService = new ProductsService();

// Controlador de los productos
const productController = {
  getAllProducts: async (req, res, next) => {
    try {
      const products = await productsService.find();
      (products && products.length > 0) ? res.status(200).json(products) : res.status(204).send("There are no products available.");
    } catch (error) {
      next(error);
    }
  },
  getProductByID: async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await productsService.findOne(id);
      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  },
  createProduct: async (req, res, next) => {
    try {
      const { name, price, image, categoryId } = req.body;
      const newProduct = await productsService.create(name, price, image, categoryId);
      res.status(201).json({
        message: 'Product created successfully.',
        data: newProduct
      });
    } catch (error) {
      next(error);
    }
  },
  updateProductByID: async (req, res, next) => {
    try {
      const {id} = req.params;
      const body = req.body;
      const updatedProduct = await productsService.update(id, body);
      res.status(200).json({
        message: 'Product updated successfully.',
        data: updatedProduct,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteProduct: async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedProduct = await productsService.delete(id);
      res.status(200).json({
        message: 'Product deleted successfully.',
        data: deletedProduct,
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = productController;
