let express = require('express');
let router = express.Router();
let Post = require('../models/post-model');
let Comment = require('../models/comment-model');
let SubComment = require('../models/sub-comment-model');

router.post('/posts/:postId/comments/:commentId/subcomments', (req, res) => {
    let newSub = req.body;
    if(req.body.username){
        SubComment.create(newSub)
            .then(subcomment => {
                res.send({
                    data: subcomment
                })
            })
            .catch(error => {
                res.send({ error: error })
            })
    } else {
        res.send({ message: 'You must be logged in to do that' })
    }
})

router.delete('/posts/:postId/comments/:commentId/subcomments/:subId', (req, res) => {
    SubComment.findById(req.params.subId)
        .then(subcomment => {
            if (subcomment.userId == req.body.user._id) {
                SubComment.findByIdAndRemove(req.params.subId)
                    .then(subComment => {
                        res.send({message: 'Your subcomment will be deleted'})
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

router.put('/posts/:postId/comments/:commentId/subcomments/:subId', (req, res) => {
    SubComment.findById(req.params.subId)
        .then(subcomment => {
            if (post.userId == req.body.user._id) {
                SubComment.findByIdAndUpdate(req.params.subId, { $set: req.body })
                    .then(subComment => {
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

router.put('/posts/:postId/comments/:commentId//subcomments/:subId/votes', (req, res) => {
    if (req.body.user) {
        SubComment.findByIdAndUpdate(req.params.subId, { $set: { votes: req.body.votes } })
            .then(subcomment => {
                res.send({ data: subcomment })
            })
            .catch(error => {
                res.send({ error: error })
            })
    } else {
        res.send({ message: 'You must be logged in to vote' })
    }
})

module.exports = router;