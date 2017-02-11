let express = require('express');
let router = express.Router();
let Post = require('../models/post-model');
let Comment = require('../models/comment-model');
let SubComment = require('../models/sub-comment-model');

router.post('/posts/:postId/comments/:commentId/subcomments', (req, res) => {
    let newSub = req.body;
    newSub.postId = req.params.postId;
    newSub.commentId = req.params.commentId;
    SubComment.create(newSub)
        .then(subcomment => {
            res.send({
                data: subcomment
            })
        })
        .catch(error => {
            res.send({error: error})
        })
})

router.delete('/posts/:postId/comments/:commentId/subcomments/:subId', (req, res)=>{
    SubComment.findByIdAndRemove(req.params.subId)
        .then(subComment =>{
            console.log(subComment)
            res.redirect('/posts/' + req.params.postId)
        })
        .catch(error => {
            res.send({error: error})
        })
})

router.put('/posts/:postId/comments/:commentId/subcomments/:subId', (req, res) =>{
    SubComment.findByIdAndUpdate(req.params.subId, {$set: req.body})
        .then(subComment => {
            res.redirect('/posts/' + req.params.postId)
        })
        .catch(error => {
            res.send({error: error})
        })
})

router.put('/posts/:postId/comments/:commentId//subcomments/:subId/votes', (req, res) => {
    SubComment.findByIdAndUpdate(req.params.subId, {$set: {votes: req.body.votes}})
        .then(subcomment => {
            res.send({data: subcomment})
        })
        .catch(error => {
            res.send({error: error})
        })
})

module.exports = router;