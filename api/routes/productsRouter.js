const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController');
const validatorHandler = require('../middlewares/validatorHandler');
const { createProductSchema, getProductSchema, updateProductSchema } = require('../schemas/productsSchema');

// Las siguientes lineas de comentarios con '@swagger' simplemente ignorenlas, solo sirven para la documentación de la API

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: M!Store - Products Data
 */

/**
 * @swagger
 *   /api/v1/products:
 *     get:
 *       summary: Get all products
 *       tags: [Products]
 *       responses:
 *         "200":
 *           description: The list of products
 *           contents:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/product'
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 */
// Obtener todos los productos
router.get('/', productController.getAllProducts);

/**
 * @swagger
 *   /api/v1/products/{id}:
 *     get:
 *       summary: Get a product by id
 *       tags: [Products]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: Id of a product
 *       responses:
 *         "200":
 *           description: The Product
 *           contents:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/product'
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "404":
 *           $ref: '#/components/responses/404'
 */

// Obtener un producto por ID
router.get('/:id', validatorHandler(getProductSchema, 'params'), productController.getProductByID);

/**
 * @swagger
 *   /api/v1/products:
 *     post:
 *       summary: Create a product
 *       tags: [Products]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/product'
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "201":
 *           description: Product created successfully
 *           contents:
 *             application/json
 */

// Crear un nuevo producto
router.post('/', validatorHandler(createProductSchema, 'body'), productController.createProduct);

/**
 * @swagger
 *   /api/v1/products/{id}:
 *     put:
 *       summary: Update a product
 *       tags: [Products]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: Id of a products
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/product'
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

// Actualizar un producto existente
router.put('/:id', validatorHandler(getProductSchema, 'params'), validatorHandler(updateProductSchema, 'body'), productController.updateProductByID);

/**
 * @swagger
 *   /api/v1/products/{id}:
 *     delete:
 *       summary: Delete a product
 *       tags: [Products]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: Id of a product
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "204":
 *           description: Product deleted successfully
 *           contents:
 *             application/json
 */

// Eliminar un producto por ID
router.delete('/:id', productController.deleteProduct);


module.exports = router;
