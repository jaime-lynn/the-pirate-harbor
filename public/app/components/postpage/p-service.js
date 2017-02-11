function PostService(){   

this.getSinglePost = function(postId, cb){
    let url = '/posts/' + postId;
    $.get(url, {}, cb);
}

this.addNewComment = function(createdComment, cb){
    let url = '/posts/' + createdComment.postId + '/comments'
    $.post(url, createdComment, cb);
}

}





