

function LandingService(){

    this.getAllPosts = function(cb){
        debugger
        $.get('/posts',{}, cb)
        }
}


function tryVote (direction) {
    $.put('/posts/:postId/comments/:commentId//subcomments/:subId/votes')

}


