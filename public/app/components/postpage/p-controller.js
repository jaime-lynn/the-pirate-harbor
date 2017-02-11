


var ps = new PostService() 
Vue.component('postpage',{
    data: function(){
        return {
            post: {},
            postTitle: '',
            postContent: '',
            postMessage: '',
            postId: '',
            postComments: '',
            postComment: '',
            postSubcomments: '',
            postVotes: ''
        }
    },
    mounted: function() {
        this.getData()
    },
    methods: {
        getData: function(){
            var postData = ps.getSinglePost()
            //debugger
            //this.post = postData
            this.postTitle = postData.posts.title
            this.postContent = postData.posts.content
            this.postMessage = postData.message
            this.postId = postData.posts._id
            this.postComments = postData.posts.comments 
            this.postComment = postData.comments 
            this.postSubcomments = postData.subcomments 
            this.postVotes = postData.posts.votes
        }
    },
    template: `
    <div id="postpage">

       <p>{{postTitle}}</p>
        <p>{{postMessage}}</p>
        <p>{{postId}}</p>
        <p>{{postVotes}}</p>
        <p>{{postContent}}</p>
        <p>{{postComments}}</p>
        <p>{{postComment}}</p>
        <p>{{postSubcomments}}</p>
    </div>
        `
 


})



