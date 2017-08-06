const express = require('express')
const router = express.Router()
const controller = require('../controllers/userController')

router.get('/:id', controller.showTodo)
router.post('/signin', controller.signin)
router.post('/signup', controller.signup)
router.put('/:id', controller.addTodo)
router.delete('/:id/:idT', controller.removeTodo)

module.exports = router