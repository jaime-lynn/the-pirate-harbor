let express = require('express');
let router = express.Router();
let Post = require('../models/post-model');
let Comment = require('../models/comment-model');
let SubComment = require('../models/sub-comment-model');

// POST/CREATE - create a new post
router.post('/posts', (req, res) => {
    let newPost = req.body;
    newPost.userId = req.sessions.uid;
    newPost.username = req.user.username;
    if(req.sessions.uid){
    Post.create(newPost)
        .then(post => {
                // res.redirect('/posts')
                res.send({
                    data: post
                })
        })
        .catch(error => {
            res.send({error: error})
        })
    } else {
        res.send({message: 'You must be logged in to do that'})
    }
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

router.delete('/posts/:id', (req, res)=>{
    Post.findByIdAndRemove(req.params.id)
        .then(post =>{
            res.redirect('/posts')
        })
        .catch(error => {
            res.send({error: error})
        })
})

router.put('/posts/:id', (req, res) =>{
    if(post.userId == req.sessions.uid) {
        Post.findByIdAndUpdate(req.params.id, {$set: req.body})
        .then(post => {
                res.redirect('/posts/' + req.params.id)
            })
        .catch(error => {
            res.send({error: error})
        })
    } else {
        res.send({message: 'You must be logged in, or this post does not belong to you.'})
    }
})

router.put('/posts/:id/votes', (req, res) => {
    if(req.sessions.uid){
        Post.findByIdAndUpdate(req.params.id, {$set: {votes: req.body.votes}})
            .then(post => {
                    res.send({data: post})
            })
            .catch(error => {
                res.send({error: error})
            })
    } else {
        res.send({message: 'You must be logged in to vote'})
    }
})


module.exports = router;