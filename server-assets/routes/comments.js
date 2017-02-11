let express = require('express');
let router = express.Router();
let Post = require('../models/post-model');
let Comment = require('../models/comment-model');
let SubComment = require('../models/sub-comment-model');


router.post('/posts/:id/comments', (req, res) => {
    var newComm = req.body;
    newComm.userId = req.sessions.uid;
    newComm.userId = req.body.user._id;
    newComm.username = req.body.user.username;
    if(req.body.user){
        Comment.create(newComm)
            .then(comment => {
                res.send({
                    data: comment
                });
                // res.redirect('/posts/' + req.params.id);
            })
            .catch(error => {
                res.send({ error: error })
            })
    } else {
        res.send({ message: 'You must be logged in to do that' })
    }
})

router.delete('/posts/:postId/comments/:commentId', (req, res) => {
    Comment.findById(req.params.commentId)
        .then(comment => {
            if (comment.userId == req.body.user._id) {
                Comment.findByIdAndRemove(req.params.commentId)
                    .then(comment => {
                        console.log(comment)
                        res.redirect('/posts/' + req.params.postId)
                    })
                    .catch(error => {
                        res.send({ error: error })
                    })
            } else {
                res.send({ message: 'You must be logged in, or this post does not belong to you.' })
            }
        })
        .catch(error => {
            res.send({ error: error })
        })
})

router.put('/posts/:postId/comments/:commentId', (req, res) => {
    Comment.findById(req.params.commentId)
        .then(comment => {
            if (comment.userId == req.body.user._id) {
                Comment.findByIdAndUpdate(req.params.commentId, { $set: req.body })
                    .then(comment => {
                        res.redirect('/posts/' + req.params.postId)
                    })
                    .catch(error => {
                        res.send({ error: error })
                    })
            } else {
                res.send({ message: 'You must be logged in, or this post does not belong to you.' })
            }
        })
        .catch(error => {
            res.send({ error: error })
        })
})

router.put('/posts/:postId/comments/:commentId/votes', (req, res) => {
    if (req.body.user) {
        Comment.findByIdAndUpdate(req.params.commentId, { $set: { votes: req.body.votes } })
            .then(comment => {
                res.send({ data: comment })
            })
            .catch(error => {
                res.send({ error: error })
            })
    } else {
        res.send({ message: 'You must be logged in to vote' })
    }
})




module.exports = router;