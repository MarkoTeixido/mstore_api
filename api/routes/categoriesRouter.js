const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoriesController');
const validatorHandler = require('../middlewares/validatorHandler');
const { createCategorySchema, updateCategorySchema, getCategorySchema } = require('../schemas/categoriesSchema');


router.get('/', categoryController.getAllCategories);

router.get('/:id', validatorHandler(getCategorySchema, 'params'), categoryController.getCategoryByID);

router.post('/', validatorHandler(createCategorySchema, 'body'), categoryController.createCategory);

router.put('/:id', validatorHandler(getCategorySchema, 'params'), validatorHandler(updateCategorySchema, 'body') , categoryController.getCategoryByID);

router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
