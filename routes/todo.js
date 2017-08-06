const express = require('express')
const router = express.Router()
const controller = require('../controllers/todoController')

router.get('/', controller.getTodo)
router.get('/:id', controller.findTodo)
router.post('/', controller.createTodo)
router.put('/:id', controller.editTodo)
router.put('/tag/:id', controller.addTag)
router.delete('/:id', controller.deleteTodo)

module.exports = router