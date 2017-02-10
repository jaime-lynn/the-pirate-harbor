


var es = new LandingService()
em = new Vue ({
    el: '#MainPage',
    data: {
        allPosts: {
        },
        message: 'Hello Vue'
    },
    mounted: function() {
        this.getData()
    },
    methods: {
        getData: function(){
            this.allPosts = es.getAllPosts()
        }
    }



})