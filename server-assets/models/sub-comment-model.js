let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let SubCommentSchemaModel= new Schema({
  content:{type:String, required:true},
  authorId:{type:ObjectId, ref:'Author'},
  date:{type:Object},
  votes:{type:Number, default: 0},
  //Relations
  commentId: { type: ObjectId, ref: 'Comment' },
  postId: { type: ObjectId, ref: 'Post' }
  
})

let SubCommentModel = mongoose.model('SubComment', SubCommentSchemaModel)

module.exports = SubCommentModel