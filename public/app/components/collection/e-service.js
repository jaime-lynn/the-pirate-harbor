

function LandingService(){
    var allPosts = {
        123: {
            id: 123,
            author: "timmy",
            title: "whatever",
            comments: [{}],
            date: "1/2/13",
            vote: 22,
            content: "My QUestion? "
        },
        124: {
            id: 124,
            author: "timmy",
            title: "whatever image",
            comments: [{}],
            date: "1/2/13",
            vote: 2,
            content: "placehold.it/200x200"
        },
        125: {
            id: 125,
            author: "timmy",
            title: "whatever",
            comments: [{}],
            date: "1/2/13",
            vote: 22,
            content: "google.com"
        }
    }

this.getAllPosts = function(){
    return allPosts
}

}





