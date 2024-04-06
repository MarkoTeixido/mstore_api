const express = require('express');
const router = express.Router();
const orderController = require('../controllers/ordersController');
const validatorHandler = require('../middlewares/validatorHandler');
const { createOrderSchema, addItemOrderSchema, getOrderSchema } = require('../schemas/ordersSchema');

// Las siguientes lineas de comentarios con '@swagger' simplemente ignorenlas, solo sirven para la documentación de la API

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: M!Store - Orders Data
 */

/**
 * @swagger
 *   /api/v1/orders/{id}:
 *     get:
 *       summary: Get a order by id
 *       tags: [Orders]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: Id of a order
 *       responses:
 *         "200":
 *           description: The Order
 *           contents:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/order'
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "404":
 *           $ref: '#/components/responses/404'
 */

// Obtener una orden por ID
router.get('/:id', validatorHandler(getOrderSchema, 'params'), orderController.getOrderByID);

/**
 * @swagger
 *   /api/v1/orders:
 *     post:
 *       summary: Create a order
 *       tags: [Orders]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/order'
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "201":
 *           description: Order created successfully
 *           contents:
 *             application/json
 */

// Crear un nuevo usuario
router.post('/', validatorHandler(createOrderSchema, 'body'), orderController.createOrder);

/**
 * @swagger
 *   /api/v1/orders/add-item:
 *     post:
 *       summary: Add order item
 *       tags: [Orders]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/orderItem'
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "201":
 *           description: Item added to order successfully
 *           contents:
 *             application/json
 */

// Crear un nuevo usuario
router.post('/add-item', validatorHandler(addItemOrderSchema, 'body'), orderController.addItemOrder);



module.exports = router;
