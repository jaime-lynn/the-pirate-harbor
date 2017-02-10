let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let SubCommentSchemaModel= new Schema({
  content:{type:String, required:true},
  authorId:{type:ObjectId, ref:'Author', required:true},
  date:{type:Object},
  votes:{type:Number},
  //Relations
  commentId:{type: ObjectId, required:true},
  
})

let SubCommentModel = mongoose.model('SubComment', SubCommentSchemaModel)

module.exports = SubCommentModel