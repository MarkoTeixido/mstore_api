const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoriesController');
const validatorHandler = require('../middlewares/validatorHandler');
const { createCategorySchema, updateCategorySchema, getCategorySchema } = require('../schemas/categoriesSchema');

// Las siguientes lineas de comentarios con '@swagger' simplemente ignorenlas, solo sirven para la documentación de la API

/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: M!Store - Categories Data
 */

/**
 * @swagger
 *   /api/v1/categories:
 *     get:
 *       summary: Get all categories
 *       tags: [Categories]
 *       responses:
 *         "200":
 *           description: The list of categories
 *           contents:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/category'
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 */
// Obtener todas las categorias
router.get('/', categoryController.getAllCategories);

/**
 * @swagger
 *   /api/v1/categories/{id}:
 *     get:
 *       summary: Get a category by id
 *       tags: [Categories]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: Id of a category
 *       responses:
 *         "200":
 *           description: The category
 *           contents:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/category'
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "404":
 *           $ref: '#/components/responses/404'
 */

// Obtener una categoria por ID
router.get('/:id', validatorHandler(getCategorySchema, 'params'), categoryController.getCategoryByID);

/**
 * @swagger
 *   /api/v1/categories:
 *     post:
 *       summary: Create a category
 *       tags: [Categories]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/category'
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "201":
 *           description: Category created successfully
 *           contents:
 *             application/json
 */

// Crear una nueva categoria
router.post('/', validatorHandler(createCategorySchema, 'body'), categoryController.createCategory);

/**
 * @swagger
 *   /api/v1/categories/{id}:
 *     put:
 *       summary: Update a category
 *       tags: [Categories]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: Id of a categories
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/category'
 *               required:
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "204":
 *           description: Product updated successfully
 *           contents:
 *             application/json
 */

// Actualizar una categoria existente
router.put('/:id', validatorHandler(getCategorySchema, 'params'), validatorHandler(updateCategorySchema, 'body') , categoryController.getCategoryByID);

/**
 * @swagger
 *   /api/v1/categories/{id}:
 *     delete:
 *       summary: Delete a category
 *       tags: [Categories]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: Id of a category
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "204":
 *           description: Category deleted successfully
 *           contents:
 *             application/json
 */

// Eliminar una categoria por ID
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
