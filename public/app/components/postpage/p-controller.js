var ps = new PostService()
Vue.component('postpage', {
    data: function () {
        return {
            post: {},
            comments: [],
            subcomments: [],
            showCommentForm: false,
            newComment: '',
            newSubcomment: '',
            showSubcommentForm: false,
            activeComment: ''
        }
    },
    mounted: function () {
        this.getSinglePost();
    },
    methods: {
        getSinglePost: function () {
            // let postId = this.$root.$data.currentPostId;
            let postId = '589ec40d15bf7d4632a43696'
            ps.getSinglePost(postId, this.setPost);
        },
        setPost: function (data) {
            this.post = data.posts;
            this.comments = data.comments;
            this.subComments = data.subComments;
        },
        displayCommentForm: function () {
            this.showCommentForm = !this.showCommentForm;
        },
        displaySubcommentForm: function (commentId) {
            this.showSubcommentForm = !this.showSubcommentForm;
            this.activeComment = commentId;
        },
        addComment: function () {
            let createdComment = {
                content: this.newComment,
                userId: this.$root.$data.user._id,
                username: this.$root.$data.user.username,
                postId: '589ec40d15bf7d4632a43696'
                // postId: this.$root.$data.currentPostId
            }
            ps.addNewComment(createdComment, this.getSinglePost)
            this.newComment = ''
        },
        addSubcomment: function (comment) {
            let createdSubcomment = {
                content: this.newSubcomment,
                commentId: comment._id,
                userId: this.$root.$data.user._id,
                username: this.$root.$data.user.username,
                postId: '589ec40d15bf7d4632a43696'
            }
            ps.addNewSubcomment(createdSubcomment, this.getSinglePost)
            this.newSubcomment = ''
        },
        upvotePost: function () {
            this.post.votes += 1;
            let sentPost = this.post;
            sentPost.user = this.$root.$data.user;
            ps.updatePostVotes(sentPost);
        },
        downvotePost: function () {
            this.post.votes -= 1;
            let sentPost = this.post;
            sentPost.user = this.$root.$data.user;
            ps.updatePostVotes(sentPost);
        },

        upvoteComment: function (comment) {
            comment.votes += 1;
            comment.user = this.$root.$data.user;
            ps.updateCommentVotes(comment);
        },

        downvoteComment: function (comment) {
            comment.votes -= 1;
            comment.user = this.$root.$data.user;
            ps.updateCommentVotes(comment);
        }
    },
    template: `
    <div id="postpage">
       <p>{{post.title}}</p>
       <p>{{post.username}}</p>
        <p>{{post.content}}</p>
        <p>{{post.date}}</p>
        <p>{{post.votes}}</p>
        <button @click="upvotePost"><i class="fa fa-beer"></i></button>
        <button @click="downvotePost"><i class="fa fa-bomb"></i></button>

        <hr>

        <div v-for="comment in comments">
            <div>
                <p>{{ comment.content }}</p>
                <p>{{ comment.username }}</p>
                <p>{{ comment.votes }}</p>

        <button @click="upvoteComment(comment)"><i class="fa fa-beer"></i></button>
        <button @click="downvoteComment(comment)"><i class="fa fa-bomb"></i></button>
        <a href="#modal1" @click="displaySubcommentForm(comment._id)" class="waves-effect waves-light btn"><i class="fa fa-commenting"></i></a>

        <div v-if="showSubcommentForm">
          <div id="modal1" class="modal">
            <div class="modal-content">
            <h4>Add Yer Insults</h4>
            
            <form @submit.prevent="addSubcomment(comment)">
            <textarea id="textarea1" class="materialize-textarea" v-model="newSubcomment"></textarea>

            </div>
            <div class="modal-footer">
            <button class="model-action modal-close waves-effect waves-light btn" type="submit">Shout</button>
            </form>
            </div>
        </div>
        </div>

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
          </form>
          </div>

    </div>
        `



})



