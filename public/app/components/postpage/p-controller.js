


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
            postVotes: '',
            type: ''
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
            this.type = postData.posts.type
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
        <p>All above this is good.</p>

        <div v-if="type == 'link'">
            <p>This is the vue for a link.</p> 
            <p>We need data for the username form the server.</p>
            <p>Vote: {{postVotes}}</p>
             <a :href="postContent">{{postContent}}</a>
            <p>We need data for the date form the server.</p>
        </div>

        <div v-if="type == 'question'">
            <p>This is the vue for a question.</p> 
            <p>We need data for the username form the server.</p>
            <p>Vote: {{postVotes}}</p>
            <p>{{postContent}}      </p>
            <p>We need data for the date form the server.</p>
        </div>

        <div v-if="type == 'image'">
            <p>This is the vue for a image.</p> 
            <p>We need data for the username form the server.</p>
            <p>Vote: {{postVotes}}</p>
            <img  width="200" :src="postContent">
            <p>We need data for the date form the server.</p>
        </div>
     

       <hr>
       </div>
    </div>
        `
 


})



