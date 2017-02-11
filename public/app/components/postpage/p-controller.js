var ps = new PostService() 
Vue.component('postpage',{
    data: function(){
        return {
            post: {},
            comments: [],
            subComments: [],
            showCommentForm: false,
            newComment: ''
        }
    },
    mounted: function(){
        this.getSinglePost();
    },
    methods: {
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
        }
    },
    template: `
    <div id="postpage">

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
    </div>
        `
 


})



