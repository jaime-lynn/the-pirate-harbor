function PostService(){   

<<<<<<< HEAD

function PostService(){

// var singlePost = { 
//     message: "test message",
//     posts:  {
//     _id: "589e3ae25f190131d88f1072",
//     title: "Zmudakann!!",
//     content: "sure, yeah, sr",
//     __v: 0,
//     comments: [],
//     votes: 3
//     },
//   comments: [],
//   subcomments: [],
 
// }
       
var singlePost = { 
    message: "test message",
    posts:  {
    _id: "589e3ae25f190131d88f1072",
    title: "Zmudakann!!",
    content: 'https://openclipart.org/image/2400px/svg_to_png/220801/Pirate-Flag.png',
    __v: 0,
    comments: [],
    votes: 3,
    type: 'image'
    },
  comments: [],
  subcomments: [],
 
=======
this.getSinglePost = function(postId, cb){
    let url = '/posts/' + postId;
    $.get(url, {}, cb);
>>>>>>> e3fd78d18a69e7ac5134a0fb42722b019a09b441
}

this.addNewComment = function(createdComment, cb){
    let url = '/posts/' + createdComment.postId + '/comments'
    $.post(url, createdComment, cb);
}

}





