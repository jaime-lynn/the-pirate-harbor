let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let SubCommentSchemaModel= new Schema({
  content:{type:String, required:true},
  userId:{type:ObjectId, ref:'User'},
  date:{type:Object},
  votes:{type:Number, default: 0},
  //Relations
  userId: { type: ObjectId, ref: 'User' },
  username: { type: String },
  commentId: { type: ObjectId, ref: 'Comment' },
  postId: { type: ObjectId, ref: 'Post' },
  // subcomments: [{ type: ObjectId, ref: 'SubComment' }]
  
})

let SubCommentModel = mongoose.model('SubComment', SubCommentSchemaModel)

module.exports = SubCommentModel