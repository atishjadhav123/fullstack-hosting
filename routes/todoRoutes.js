const router = require("express").Router()

const todoController = require("./../controllers/todoController")

router
    .get("/", todoController.getTodos)
    .post("/", todoController.addTodo)
    .put("/", todoController.updateTodo)
    .delete("/", todoController.deleteTodo)

module.exports = router