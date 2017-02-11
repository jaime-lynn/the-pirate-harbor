

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
 
}
    

this.getSinglePost = function(){
    return singlePost
}




}





