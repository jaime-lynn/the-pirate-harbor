let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let CommentSchemaModel= new Schema({
  content:{type:String, required:true},
  userId:{type:ObjectId, ref:'User'},
  date:{type:Object},
  votes:{type:Number, default: 0},
  //Relations
  postId:{type: ObjectId, ref: 'Post' },
  subComments:[{type:ObjectId, ref:'SubComment'}]
})

let CommentModel = mongoose.model('Comment', CommentSchemaModel)

module.exports = CommentModel