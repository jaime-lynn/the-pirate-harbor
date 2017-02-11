

function LandingService() {

    this.getAllPosts = function (cb) {

        $.get('/posts', {}, cb)
    }



// function tryVote (direction) {
//     $.put('/posts/:postId/comments/:commentId//subcomments/:subId/votes')

// }

//started adding here.
this.updatePostVotes = function (post) {
    let url = '/posts/' + post._id + '/votes';
    $.ajax({
        url: url,
        method: 'PUT',
        data: post,
        success: function (result) {
            console.log(result)
        },
        fail: function (error) {
            console.log(error);
        }
    })
}
}

    //added here