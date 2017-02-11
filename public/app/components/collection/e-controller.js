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
            debugger
            this.$root.$data.postId = postId
            // this.$postpage.$methods.getSinglePost();
            this.$root.$data.postPage = true
            this.$root.$data.mainPage = false
        }
    },
    //if you can read this you are here.
    template: `
    <div v-if="this.$root.$data.mainPage">

    

       <div class="move" v-for="post in allPosts">
        <div v-if="post.type == 'question'" class="flex-container">
        <div>
            <h4><span @click="openPost(post._id)">{{post.title}} - {{post.username}}</span></h4> 
            <span class="content-size">{{post.content}}</span> 
            <p>Vote: {{post.vote}}</p>
            <a @click="tryVote(up)" class="waves-effect waves-light btn"><i class="fa fa-beer" aria-hidden="true"></i></a>
              <a @click="tryVote(down)" class="waves-effect waves-light btn"><i class="fa fa-bomb" aria-hidden="true"></i></a>
            <p>Date: {{post.date}}</p>  
            </div>
            <div class="flex-right">
            <img src="http://www.clipartkid.com/images/47/pirate-flag-3TGDtV-clipart.png"></img>
            </div>
        </div>
        <div v-if="post.type == 'link'" class="flex-container">
        <div class="flex-right">
            <h4>{{post.title}} - {{post.username}}</h4>
            <a class="content-size":href="post.content">{{post.content}}</a>
            <p>Vote: {{post.vote}}</p>
             <a @click="tryVote(up)" class="waves-effect waves-light btn"><i class="fa fa-beer" aria-hidden="true"></i></a>
              <a @click="tryVote(down)" class="waves-effect waves-light btn"><i class="fa fa-bomb" aria-hidden="true"></i></a>
            <p>Date: {{post.date}}</p>
            </div>
             <div class="flex-right">
            <img src="https://2.bp.blogspot.com/-T2tyqR9SbUU/V5FJQFY0iGI/AAAAAAAAFSY/SAIN3X_W_b0iA0cnnXnaeQue-d55OfO4QCEw/s1600/Frigate_%2528PSF%2529b.png"></img>
            </div>
        </div>
         <div v-if="post.type == 'image'" class="flex-container">
         <div>
            <h4>{{post.title}} - {{post.username}}</h4>
            <p>Vote: {{post.vote}}</p>
             <a @click="tryVote(up)" class="waves-effect waves-light btn"><i class="fa fa-beer" aria-hidden="true"></i></a>
              <a @click="tryVote(down)" class="waves-effect waves-light btn"><i class="fa fa-bomb" aria-hidden="true"></i></a>
            
            <p>Date: {{post.date}}</p>
            </div>
             <div class="flex-right">
            <img :src="post.content"></img>
            </div>
         </div> 
       <hr style="height:1px;border:none;color:#333;background-color:#333;" />
       </div>
    </div>
        `
})



