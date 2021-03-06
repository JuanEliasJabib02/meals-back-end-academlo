const express = require('express')

//Controllers
const { signUp, login, updateUser, deleteUser, getOrdersByUser, getOrderById } = require('../controllers/user.controller');

//Middlewares
const { authentication, protectUserAccount } = require('../middleware/auth.middleware');
const { userExist } = require('../middleware/users.middleware');
const { userValidator } = require('../middleware/validators.middleware.js');


// Router
const usersRouter = express.Router();

// Endpoints

usersRouter.post('/signup', 
   /*  userValidator, */
   userValidator,
    signUp
)

usersRouter.post('/login',
    login
)

usersRouter.patch('/:id',
    authentication,
    userExist,
    protectUserAccount,
    updateUser
)

usersRouter.delete('/:id',
    authentication,
    userExist,
    protectUserAccount,
    deleteUser
)

usersRouter.get('/orders',
    authentication,
    getOrdersByUser
    
)


usersRouter.get('/orders/:id',
    authentication,
    getOrderById
)


module.exports = { usersRouter }

