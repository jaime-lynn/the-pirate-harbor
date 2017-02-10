let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let AuthorModel = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    //Relations
    comments: [{ type: ObjectId, ref: 'Comment' }],
    posts: [{ type: ObjectId, ref: 'Post' }],
    subComments: [{ type: ObjectId, ref: 'SubComment' }]

})

let AuthorModel = mongoose.model('Author', AuthorSchemaModel)

module.exports = AuthorModel