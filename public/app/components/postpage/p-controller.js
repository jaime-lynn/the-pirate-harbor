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
            currentUser: {}

        }
    },
    computed: {
        postId: function(){
            return this.$root.$data.postId
        }
    },
    watch: {
        postId: function(){
            this.getSinglePost();
        }
    },
    methods: {
        getSinglePost: function () {
            let postId = this.$root.$data.postId;
            ps.getSinglePost(postId, this.setPost);
        },
        setPost: function (data) {
            this.post = data.posts;
            data.comments.forEach(c => {c.showSubcommentForm = false})
            this.comments = data.comments;
            this.comments.showSubcommentForm = false;
            this.subcomments = data.subcomments;
            this.currentUser = this.$root.$data.user;
        },
        displayCommentForm: function () {
            this.showCommentForm = !this.showCommentForm;
        },
        displaySubcommentForm: function (comment) {
            // Vue.set(comment, 'showSubcommentForm', !comment.showCommentForm)
            comment.showSubcommentForm = !comment.showSubcommentForm;
        },
        addComment: function () {
            let createdComment = {
                content: this.newComment,
                userId: this.$root.$data.user._id,
                username: this.$root.$data.user.username,
                postId: this.$root.$data.postId
            }
            ps.addNewComment(createdComment, this.getSinglePost)
            this.newComment = ''
            this.showCommentForm = false;
        },
        addSubcomment: function (comment) {
            let createdSubcomment = {
                content: this.newSubcomment,
                commentId: comment._id,
                userId: this.$root.$data.user._id,
                username: this.$root.$data.user.username,
                postId: this.$root.$data.postId
            }
            ps.addNewSubcomment(createdSubcomment, this.getSinglePost)
            this.newSubcomment = ''
        },
        upvotePost: function () {
            if(this.$root.user.username){
                this.post.votes += 1;
                let sentPost = this.post;
                sentPost.user = this.$root.$data.user;
                ps.updatePostVotes(sentPost);
            } else {
                Materialize.toast('You must be logged in to vote', 2000);
            }
        },
        downvotePost: function () {
            if(this.$root.user.username){
                this.post.votes -= 1;
                let sentPost = this.post;
                sentPost.user = this.$root.$data.user;
                ps.updatePostVotes(sentPost);
            } else {
                Materialize.toast('You must be logged in to vote', 2000);
            }
        },
        upvoteComment: function (comment) {
            if(this.$root.user.username){
                comment.votes += 1;
                comment.user = this.$root.$data.user;
                ps.updateCommentVotes(comment);
            } else {
                Materialize.toast('You must be logged in to vote', 2000);
            }
        },
        downvoteComment: function (comment) {
            if(this.$root.user.username){
                comment.votes -= 1;
                comment.user = this.$root.$data.user;
                ps.updateCommentVotes(comment);
            } else {
                Materialize.toast('You must be logged in to vote', 2000);
            }
        },
        upvoteSubcomment: function(subcomment){
            if(this.$root.user.username){
                subcomment.votes += 1;
                subcomment.user = this.$root.$data.user;
                ps.updateSubcommentVotes(subcomment);
            } else {
                Materialize.toast('You must be logged in to vote', 2000);
            }
        },
        downvoteSubcomment: function(subcomment){
            if(this.$root.user.username){
                subcomment.votes -= 1;
                subcomment.user = this.$root.$data.user;
                ps.updateSubcommentVotes(subcomment);
            } else {
                Materialize.toast('You must be logged in to vote', 2000);
            }
        },
        deletePost: function(){
            var vm = this;
            let postToDelete = {
                postId: this.post._id,
                user: {
                    username: this.$root.$data.user.username,
                    _id: this.$root.$data.user._id
                }
            }
            ps.deletePost(postToDelete, function(){
                vm.getSinglePost();
            });
        },
        deleteComment: function(comment){
            var vm = this;
            let commentToDelete = {
                commentId: comment._id,
                postId: comment.postId,
                user: {
                    username: this.$root.$data.user.username,
                    _id: this.$root.$data.user._id
                }
            }
            ps.deleteComment(commentToDelete, function(){
                vm.getSinglePost();
            });
        },
        deleteSubcomment: function(subcomment){
            var vm = this;
            let subcommentToDelete = {
                subcommentId: subcomment._id,
                postId: subcomment.postId,
                commentId: subcomment.commentId,
                user: {
                    username: this.$root.$data.user.username,
                    _id: this.$root.$data.user._id
                }
            }
            ps.deleteSubcomment(subcommentToDelete, function(){
                vm.getSinglePost();
            });
        }
    },
    template: `
    <div class="container">
    <div v-if="this.$root.$data.postPage"  id="postpage">
       <h4><strong>{{post.title}}</strong> - {{post.username}}</h4>
        <div v-if="post.type == 'image'">
            <img :src="post.content">
        </div>
        <div v-if="post.type == 'link'">
            <a :href="post.content">{{post.content}}</a>
        </div>
        <div v-if="post.type == 'question'">
            <p>{{post.content}}</p>
        </div>
        <p>Votes: {{post.votes}}</p>
        <button @click="upvotePost"><i class="fa fa-beer"></i></button>
        <button @click="downvotePost"><i class="fa fa-bomb"></i></button>
            <button v-if="post.username == this.$root.$data.user.username" @click="deletePost"><i class="fa fa-trash"></i></button>
            <button @click="displayCommentForm" class="waves-effect waves-light btn">Add Comment</button>
            <div v-if="showCommentForm">
            <form @submit.prevent="addComment">
            <textarea id="textarea1" class="materialize-textarea" v-model="newComment"></textarea>
          <button class="waves-effect waves-light btn" type="submit">Submit</button>
          </form>
          </div>

        <hr>

        <div v-for="comment in comments">
            <div>
                <p>{{ comment.content }}</p>
                <p>{{ comment.username }}</p>
                <p>{{ comment.votes }}</p>

        <button @click="upvoteComment(comment)"><i class="fa fa-beer"></i></button>
        <button @click="downvoteComment(comment)"><i class="fa fa-bomb"></i></button>
        <button v-if="comment.username == currentUser.username" @click="deleteComment(comment)"><i class="fa fa-trash"></i></button>
        <a @click="displaySubcommentForm(comment)" class="waves-effect waves-light btn"><i class="fa fa-commenting"></i></a>

        <div v-if="comment.showSubcommentForm">
            <form @submit.prevent="addSubcomment(comment)">
            <textarea id="textarea1" class="materialize-textarea" v-model="newSubcomment"></textarea>
            <button class="model-action modal-close waves-effect waves-light btn" type="submit">Shout</button>
            </form>
        </div>

                <div v-for="subcomment in subcomments">
                    <div v-if="subcomment.commentId == comment._id">
                        <p>{{ subcomment.content }}</p>
                        <p>{{ subcomment.username }}</p>
                        <p>{{ subcomment.date }}</p>
                        <p>{{ subcomment.votes }}</p>
                    <button @click="upvoteSubcomment(subcomment)"><i class="fa fa-beer"></i></button>
                    <button @click="downvoteSubcomment(subcomment)"><i class="fa fa-bomb"></i></button>
                    <button v-if="subcomment.username == currentUser.username" @click="deleteSubcomment(subcomment)"><i class="fa fa-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
        `



})



