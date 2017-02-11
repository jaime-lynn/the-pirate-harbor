


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
        {{message}}
        {{allPosts}}
    </div>
    
    `



})