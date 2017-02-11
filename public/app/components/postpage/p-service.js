function PostService() {

    this.getSinglePost = function (postId, cb) {
        let url = '/posts/' + postId;
        $.get(url, {}, cb);
    }

    this.addNewComment = function (createdComment, cb) {
        let url = '/posts/' + createdComment.postId + '/comments'
        $.post(url, createdComment, cb);
    }

    this.addNewSubcomment = function (createdSubcomment, cb) {
        let url = '/posts/' + createdSubcomment.postId + '/comments/' + createdSubcomment.commentId + '/subcomments'
        $.post(url, createdSubcomment, cb);
    }

    this.updatePostVotes = function (post) {
        let url = '/posts/' + post._id + '/votes';
        $.ajax({
            url: url,
            type: 'PUT',
            data: post,
            success: function (result) {
                console.log("Thar she blows! -- a vote has been tallied.")
            }
        })
    }



    this.updateCommentVotes = function (comment) {
        let url = '/posts/' + comment.postId + '/comments/' + comment._id + '/votes';
        $.ajax({
            url: url,
            type: 'PUT',
            data: comment,
            success: function (result) {
                console.log(result)
            },
            fail: function (error) {
                console.log(error);
            }
        })
    }

    this.updateSubcommentVotes = function (subcomment) {
        let url = '/posts/' + subcomment.postId + '/comments/' + subcomment.commentId + '/subcomments/' + subcomment._id + '/votes';
        $.ajax({
            url: url,
            type: 'PUT',
            data: subcomment,
            success: function (result) {
                console.log(result)
            },
            fail: function (error) {
                console.log(error);
            }
        })
    }

    this.deletePost = function (post, cb) {
        debugger
        let url = '/posts/' + post.postId;
        $.ajax({
            url: url,
            type: 'DELETE',
            data: post,
            success: function (result) {
                console.log(result)
                cb();
            },
            fail: function (error) {
                console.log(error);
            }
        })
    }

    this.deleteComment = function (comment, cb) {
        debugger
        let url = '/posts/' + comment.postId + '/comments/' + comment.commentId;
        $.ajax({
            url: url,
            type: 'DELETE',
            data: comment,
            success: function (result) {
                Materialize.toast(result.message, 2000);
                cb();
            },
            fail: function (error) {
                console.log(error);
            }
        })
    }

    this.deleteSubcomment = function (subcomment, cb) {
        debugger
        let url = '/posts/' + subcomment.postId + '/comments/' + subcomment.commentId + '/subcomments/' + subcomment.subcommentId;
        $.ajax({
            url: url,
            type: 'DELETE',
            data: subcomment,
            success: function (result) {
                Materialize.toast(result.message, 2000);
                cb();
            },
            fail: function (error) {
                console.log(error);
            }
        })
    }

}




