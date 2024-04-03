const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customersController');
const validatorHandler = require('../middlewares/validatorHandler');
const { createCustomerSchema, getCustomerSchema, updateCustomerSchema } = require('../schemas/customersSchema');

// Las siguientes lineas de comentarios con '@swagger' simplemente ignorenlas, solo sirven para la documentación de la API

/**
 * @swagger
 * tags:
 *   name: Customers
 *   description: M!Store - Customers Data
 */

/**
 * @swagger
 *   /api/v1/customers:
 *     get:
 *       summary: Get all customers
 *       tags: [Customers]
 *       responses:
 *         "200":
 *           description: The list of customers
 *           contents:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/customer'
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 */
// Obtener todos los clientes
router.get('/', customerController.getAllCustomers);

/**
 * @swagger
 *   /api/v1/customers/{id}:
 *     get:
 *       summary: Get a customer by id
 *       tags: [Customers]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: Id of a customer
 *       responses:
 *         "200":
 *           description: The Customer
 *           contents:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/customer'
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "404":
 *           $ref: '#/components/responses/404'
 */

// Obtener un cliente por ID
router.get('/:id', validatorHandler(getCustomerSchema, 'params'), customerController.getCustomerByID);

/**
 * @swagger
 *   /api/v1/customers:
 *     post:
 *       summary: Create a customer
 *       tags: [Customers]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/customer'
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "201":
 *           description: Customer created successfully
 *           contents:
 *             application/json
 */

// Crear un nuevo cliente
router.post('/', validatorHandler(createCustomerSchema, 'body'), customerController.createCustomer);

/**
 * @swagger
 *   /api/v1/customers/{id}:
 *     put:
 *       summary: Update a customer
 *       tags: [Customers]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: Id of a customer
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/customer'
 *               required:
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "204":
 *           description: Customer updated successfully
 *           contents:
 *             application/json
 */

// Actualizar un cliente existente
router.put('/:id', validatorHandler(getCustomerSchema, 'params'), validatorHandler(updateCustomerSchema, 'body'), customerController.updateCustomerByID);

/**
 * @swagger
 *   /api/v1/customers/{id}:
 *     delete:
 *       summary: Delete a customer
 *       tags: [Customers]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: Id of a customer
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "204":
 *           description: Customer deleted successfully
 *           contents:
 *             application/json
 */

// Eliminar un cliente por ID
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;
