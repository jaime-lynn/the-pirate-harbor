


var es = new LandingService()
Vue.component('mainpage',{
    data: function(){
        return {
            allPosts: {},
            message: 'Hello Vue'
        }
    },
    mounted: function() {
        this.getData()
    },
    methods: {
        getData: function(){
            this.allPosts = es.getAllPosts()
        }
    },
    template: `
    <div id="MainPage">
       <div v-for="post in allPosts">
        {{post.id}}
        <div v-if="post.type == 'question'">
            <h1>{{post.title}} - {{post.user}}</h1>  
            <p>Vote: {{post.vote}}</p>
            <p>Date: {{post.date}}</p>  
        </div>
        <div v-if="post.type == 'link'">
            <h1>{{post.title}} - {{post.user}}</h1>
            <a :href="post.content">{{post.content}}</a>
            <p>Vote: {{post.vote}}</p>
            <p>Date: {{post.date}}</p>
        </div>
         <div v-if="post.type == 'image'">
            <h1>{{post.title}} - {{post.user}}</h1>
            <img :src="post.content"></img>
            <p>Vote: {{post.vote}}</p>
            <p>Date: {{post.date}}</p>
         </div>
       
        
       
        
       <hr>
       </div>
    </div>
        `
 


})



