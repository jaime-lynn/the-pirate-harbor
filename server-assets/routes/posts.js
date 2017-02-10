let express = require('express');
let router = express.Router();
let Post = require('../models/post-model');
let Comment = require('../models/comment-model');
let SubComment = require('../models/sub-comment-model');

// POST/CREATE - create a new post
router.post('/posts', (req, res) => {
    Post.create(req.body)
        .then(post => {
            // res.redirect('/posts')
            res.send({
                data: post
            })
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
    var foundPost;
    var foundComments;
    var foundSubcomments;
    var errors = [];
    Post.findById(req.params.id)
        .then(post => {
            foundPost = post;
            Comment.find({postId: req.params.id})
                .then(comments => {
                    foundComments = comments
                    SubComment.find({postId: req.params.id})
                    .then(subcomments => {
                        foundSubcomments = subcomments;
                        res.send({
                            posts: foundPost,
                            comments: foundComments,
                            subcomments: foundSubcomments
                        })
                    })
                })
        })
        .catch(error => {
            errors.push(error);
        })
})

router.post('/posts/:id/comments', (req, res) => {
    Comment.create(req.body)
        .then(comment => {
            res.send({
                data: comment
            });
            // res.redirect('/posts/' + req.params.id);
        })
        .catch(error => {
            res.send({error: error})
        })
})

router.post('/posts/:id/comments/:id/subcomments', (req, res) => {
    SubComment.create(req.body)
        .then(subcomment => {
            res.send({
                data: subcomment
            })
        })
        .catch(error => {
            res.send({error: error})
        })
})

module.exports = router;