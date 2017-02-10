let express = require('express');
let router = express.Router();
let Post = require('../models/post-model');
let Comment = require('../models/comment-model');
let SubComment = require('../models/sub-comment-model');

// POST/CREATE - create a new post
router.post('/posts', (req, res) => {
    Post.create(req.body)
        .then(post => {
            res.redirect('/posts/:id')
        })
        .catch(error => {
            res.send({error: error})
        })
});

// GET/INDEX - list all posts
router.get('/posts', (req, res) => {
    Post.find()
        .then(posts => {
            res.send({
                data: posts
            })
        })
        .catch(error => {
            res.send({error: error})
        })
})

// Show Post with a specific id
router.get('/posts/:id', (req, res) => {
    Post.findById(req.params.id)
        .then(post => {
            res.send({
                data: post
            })
        })
    Comment.find({postId: req.params.id})
        .then(comments => {
            res.send({
                data: comments
            })
        })
        .catch(error => {
            res.send({error: error})
        })
    SubComment.find({})
})

module.exports = router;