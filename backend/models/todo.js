const mongoose = require('mongoose');

//you can define the type of document which you want to save in your mongodb database.

//create the document structure of data saved in mongoDB database
const todoSchema = new mongoose.Schema({
  name: { type: String, required: true, minlenght: 3, maxlenght: 200 },
  author: { type: String, required: true },
  uid: { type: String },
  isComplete: { type: Boolean },
  date: {
    type: Date, default: new Date()
  }
})

const Todo = mongoose.model('Todo', todoSchema)

exports.Todo = Todo