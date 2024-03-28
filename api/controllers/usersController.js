const usersService = require('../services/usersService');

// Instancia del usersService
const userService = new usersService();

// Controlador de los usuarios
const userController = {
  getAllUsers: async (req, res, next) => {
    try {
      const users = await userService.find();
      (users && users.length > 0) ? res.status(200).json(users) : res.status(204).send("There are no users available.");
    } catch (error) {
      next(error);
    }
  },
  getUserByID: async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await userService.findOne(id);
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  },
  createUser: async (req, res, next) => {
    try {
      const { userName, userEmail, userAvatar, userAddress, userPhone, userBirthdate, userRegisteredAt } = req.body;
      const newUser = await userService.create(userName, userEmail, userAvatar, userAddress, userPhone, userBirthdate, userRegisteredAt );
      res.status(201).json({
        message: 'User created successfully.',
        data: newUser
      });
    } catch (error) {
      next(error);
    }
  },
  updateUserByID: async (req, res, next) => {
    try {
      const {id} = req.params;
      const body = req.body;
      const updatedUser = await userService.update(id, body);
      res.status(200).json({
        message: 'User updated successfully.',
        data: updatedUser,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteUser: async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedUser = await userService.delete(id);
      res.status(200).json({
        message: 'User deleted successfully.',
        data: deletedUser,
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = userController;
