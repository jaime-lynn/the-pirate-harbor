

function LandingService(){
    var allPosts = [
        {
            id: 123,
            user: {username:"Jamie Lacivita", token:"someSessionUID"},
            title: "How to buy a cat",
            comments: [{}],
            date: "1/2/13",
            vote: 22,
            content: "How do I buy a cat?",
            type: "question"

            
        },
        {
            id: 124,
            user: {username:"Jamie Lacivita", token:"someSessionUID"},
            title: "whatever link",
            comments: [{}],
            date: "1/2/13",
            vote: 2,
            content: "http://www.google.com",
            type: "link"
        },
        {
            id: 125,
            user: {username:"Jamie Lacivita", token:"someSessionUID"},
            title: "this is the title of the image",
            comments: [{}],
            date: "1/2/13",
            vote: 22,
            content: "http://boattoursjohnspass.com/pirate-ship-cruise/wp-content/uploads/2013/05/home-slide-photo1.jpg",
            type: "image"
            
        }
    ]

this.getAllPosts = function(){
    return allPosts
}




}





