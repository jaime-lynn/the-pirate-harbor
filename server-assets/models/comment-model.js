let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let CommentSchemaModel= new Schema({
  content:{type:String, required:true},
  authorId:{type:ObjectId, ref:'Author', required:true},
  date:{type:Object},
  votes:{type:Number},
  //Relations
  postId:{type: ObjectId, required:true},
  subComments:[{type:ObjectId, ref:'SubComment'}]
})

let CommentModel = mongoose.model('Comment', CommentSchemaModel)

module.exports = CommentModel