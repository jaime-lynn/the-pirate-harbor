var ps = new PostService()
Vue.component('postpage', {
    data: function () {
        return {
            post: {},
            comments: [],
            subcomments: [],
            showCommentForm: false,
            newComment: '',
            newSubcomment: ''

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
            debugger
            this.post = data.posts;
            data.comments.forEach(c => {c.showSubcommentForm = false})
            this.comments = data.comments;
            this.comments.showSubcommentForm = false;
            this.subcomments = data.subcomments;
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
        },
        upvoteSubcomment: function(subcomment){
            subcomment.votes += 1;
            subcomment.user = this.$root.$data.user;
            ps.updateSubcommentVotes(subcomment);
        },
        downvoteSubcomment: function(subcomment){
            subcomment.votes -= 1;
            subcomment.user = this.$root.$data.user;
            ps.updateSubcommentVotes(subcomment);
        }
    },
    template: `
    <div v-if="this.$root.$data.postPage"  id="postpage">
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



