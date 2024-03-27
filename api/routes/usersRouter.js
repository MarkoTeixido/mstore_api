const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const validatorHandler = require('../middlewares/validatorHandler');
const { createUserSchema, getUserSchema, updateUserSchema } = require('../schemas/usersSchema');

// Las siguientes lineas de comentarios con '@swagger' simplemente ignorenlas, solo sirven para la documentación de la API

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: M!Store - Users Data
 */

/**
 * @swagger
 *   /api/v1/users:
 *     get:
 *       summary: Get all users
 *       tags: [Users]
 *       responses:
 *         "200":
 *           description: The list of products
 *           contents:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/user'
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 */
// Obtener todos los usuarios
router.get('/', userController.getAllUsers);

/**
 * @swagger
 *   /api/v1/users/{id}:
 *     get:
 *       summary: Get a user by id
 *       tags: [Users]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: Id of a user
 *       responses:
 *         "200":
 *           description: The User
 *           contents:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/user'
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "404":
 *           $ref: '#/components/responses/404'
 */

// Obtener un usuario por ID
router.get('/:id', validatorHandler(getUserSchema, 'params'), userController.getUserByID);

/**
 * @swagger
 *   /api/v1/users:
 *     post:
 *       summary: Create a user
 *       tags: [Users]
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "201":
 *           description: User created successfully
 *           contents:
 *             application/json
 */

// Crear un nuevo usuario
router.post('/', validatorHandler(createUserSchema, 'body'), userController.createUser);

/**
 * @swagger
 *   /api/v1/users/{id}:
 *     put:
 *       summary: Update a user
 *       tags: [Users]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: Id of a user
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *               required:
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "204":
 *           description: User updated successfully
 *           contents:
 *             application/json
 */

// Actualizar un usuario existente
router.put('/:id', validatorHandler(getUserSchema, 'params'), validatorHandler(updateUserSchema, 'body'), userController.updateUserByID);

/**
 * @swagger
 *   /api/v1/users/{id}:
 *     delete:
 *       summary: Delete a user
 *       tags: [Users]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: Id of a user
 *       responses:
 *         "400":
 *           $ref: '#/components/responses/400'
 *         "401":
 *           $ref: '#/components/responses/401'
 *         "204":
 *           description: User deleted successfully
 *           contents:
 *             application/json
 */

// Eliminar un usuario por ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
