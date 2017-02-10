let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let PostSchemaModel= new Schema({
  content:{type:String, required:true},
  title:{type:String, required: true},
  authorId:{type:ObjectId, ref:'Author', required:true},
  date:{type:Object},
  votes:{type:Number},
  //Relations
  comments:[{type:ObjectId, ref:'Comment'}]
})

let PostModel = mongoose.model('Post', PostSchemaModel)

module.exports = PostModel