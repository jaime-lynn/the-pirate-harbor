var ps = new PostService() 
Vue.component('postpage',{
    data: function(){
        return {
            post: {},
<<<<<<< HEAD
            postTitle: '',
            postContent: '',
            postMessage: '',
            postId: '',
            postComments: '',
            postComment: '',
            postSubcomments: '',
            postVotes: '',
            type: ''
=======
            comments: [],
            subComments: [],
            showCommentForm: false,
            newComment: ''
>>>>>>> e3fd78d18a69e7ac5134a0fb42722b019a09b441
        }
    },
    mounted: function(){
        this.getSinglePost();
    },
    methods: {
<<<<<<< HEAD
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
=======
        getSinglePost: function(){
            // let postId = this.$root.$data.currentPostId;
            let postId = '589ec40d15bf7d4632a43696'
            ps.getSinglePost(postId, this.setPost);
        },
        setPost: function(data){
            this.post = data.posts;
            this.comments = data.comments;
            this.subComments = data.subComments;
        },
        displayCommentForm: function(){
            this.showCommentForm = !this.showCommentForm;
        },
        addComment: function(){
            let createdComment = {
                content: this.newComment,
                user: this.$root.$data.user,
                postId: '589ec40d15bf7d4632a43696'
                // postId: this.$root.$data.currentPostId
            }
            ps.addNewComment(createdComment, this.getSinglePost)
>>>>>>> e3fd78d18a69e7ac5134a0fb42722b019a09b441
        }
    },
    template: `
    <div id="postpage">

<<<<<<< HEAD
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
=======
       <p>{{post.title}}</p>
       <p>{{post.username}}</p>
        <p>{{post.content}}</p>
        <p>{{post.date}}</p>
        <p>{{post.votes}}</p>

        <div v-for="comment in comments">
            <div>
                <p>{{ comment.content }}</p>
                <p>{{ comment.username }}</p>
                <div v-for="subcomment in subcomments">
                    <div v-if="subcomment.commentId == comment._id">
                        <p>{{ subcomment.content }}</p>
                        <p>{{ subcomment.username }}</p>
                        <p>{{ subcomment.date }}</p>
                        <p>{{ subcomment.votes }}</p>
                    </div>
                </div>
            </div>
        </div>

            <button @click="displayCommentForm" class="waves-effect waves-light btn">Add Comment</button>
            <div v-if="showCommentForm">
            <form @submit.prevent="addComment">
            <textarea id="textarea1" class="materialize-textarea" v-model="newComment"></textarea>
          <button class="waves-effect waves-light btn" type="submit">Submit</button>
          </div>
>>>>>>> e3fd78d18a69e7ac5134a0fb42722b019a09b441
    </div>
        `
 


})



