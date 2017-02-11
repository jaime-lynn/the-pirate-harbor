var es = new LandingService()
Vue.component('mainpage', {
    data: function () {
        return {
            allPosts: [],
            message: 'Hello Vue from the mainpage'
        }
    },
    mounted: function () {
        this.getData()
    },

    methods: {
        getData: function () {
            es.getAllPosts(this.setData)
        },
        setData: function (result) {
            this.allPosts = result.data
        },
        openPost:function(postId){
            this.$root.$data.postId = postId
            this.$root.$data.postPage = true
            this.$root.$data.mainPage = false
        }
    },
    //if you can read this you are here.
    template: `
    <div v-if="this.$root.$data.mainPage">

    

       <div v-for="post in allPosts">
        {{post._id}}
        <div v-if="post.type == 'question'">
            <h1><span @click="openPost(post._id)">{{post.title}} - {{post.username}}</span></h1> 
            <p>{{post.content}}</p> 
            <p>Vote: {{post.vote}}</p>
            <button v-on:click="tryVote(up)"> Vote up</button>
            <button v-on:click=tryVote(down)"> Vote down</button>
            <p>Date: {{post.date}}</p>  
        </div>
        <div v-if="post.type == 'link'">
            <h1>{{post.title}} - {{post.username}}</h1>
            <a :href="post.content">{{post.content}}</a>
            <p>Vote: {{post.vote}}</p>
            <button v-on:click="tryVote(up)">Vote up</button>
            <button v-on:click="tryVote(down)">Vote down</button>
            <p>Date: {{post.date}}</p>
        </div>
         <div v-if="post.type == 'image'">
            <h1>{{post.title}} - {{post.username}}</h1>
            <img :src="post.content"></img>
            <p>Vote: {{post.vote}}</p>
            <button v-on:click="tryVote(up)"> Vote up</button>
            <button v-on:click="tryVote(down)">Vote down</button>
            <p>Date: {{post.date}}</p>
         </div> 
       <hr>
       </div>
    </div>
        `
})



