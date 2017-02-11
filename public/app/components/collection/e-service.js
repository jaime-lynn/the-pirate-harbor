

function LandingService(){

    this.getAllPosts = function(cb){
       
        $.get('/posts',{}, cb)
        }
}


function tryVote (direction) {
    $.put('/posts/:postId/comments/:commentId//subcomments/:subId/votes')

}


