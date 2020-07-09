const nodeRestFull = require('node-restful')
const { MongooseDocument } = require('mongoose')
const mongoose = nodeRestFull.mongoose

const todoSchema = new mongoose.Schema({
  description : {
    type: String, require:true
  },
  done: {
    type: Boolean, require: true, default:false
  },
  createAt: {
    type: Date, default: Date.now
  }
})

module.exports = nodeRestFull.model('todo', todoSchema)