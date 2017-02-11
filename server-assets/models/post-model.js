let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId



let PostSchemaModel= new Schema({
  content:{type:String, required:true},
  title:{ type:String, required: true },
  date: { type: String, required: true, default: Date.now() },
  votes:{type:Number, default: 0},
  type: { type: String, required: true },
  //Relations
  userId:{type:ObjectId, ref:'User'},
  username: { type: String },
  comments:[{type:ObjectId, ref:'Comment'}]
})

let PostModel = mongoose.model('Post', PostSchemaModel)

module.exports = PostModel