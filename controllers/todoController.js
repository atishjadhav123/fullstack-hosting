const asyncHandler = require("express-async-handler")
const Todo = require("../modules/Todo")

exports.addTodo = asyncHandler(async (req, res) => {
    await Todo.create(req.body)
    res.json({ message: "Todo Create success" })
})
exports.getTodos = asyncHandler(async (req, res) => {
    const result = await Todo.find()
    res.json({ message: "Todo Fetch success" })
})
exports.updateTodo = asyncHandler(async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id, req.body)
    res.json({ message: "Todo Update success" })
})
exports.deleteTodo = asyncHandler(async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.id)
    res.json({ message: "Todo delete success" })
})