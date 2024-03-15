const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    task: String,
    desc: String,
    complate: Boolean,
}, { timestamps: true })

module.exports = mongoose.model.todo || mongoose.model("todo", todoSchema)