let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let bcrypt = require('bcryptjs')
const SALT_FACTOR = 10

let UserModel = new Schema({
    username: { type: String, unique: true, dropDups: true, required: true },
    password: { type: String, required: true },
    //Relations
    comments: [{ type: ObjectId, ref: 'Comment' }],
    posts: [{ type: ObjectId, ref: 'Post' }],
    subComments: [{ type: ObjectId, ref: 'SubComment' }]
})

UserModel.pre('save', function(next){
    var user = this;
    if(!user.isModified('password')){
        return next();
    }
    bcrypt.genSalt(SALT_FACTOR, function(err, salt){
        if(err){
            return next(err);
        } else {
            bcrypt.hash(user.password, salt, function(err, hash){
                user.password = hash;
                next();
            })
        }
    })
})

UserModel.methods.validatePassword = function(password){
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, this.password, function(err, isMatch){
            if(err || !isMatch){
                return reject(err);
            }
            return resolve(isMatch);
        })
    })
}

let User = mongoose.model('User', UserModel)

module.exports = User