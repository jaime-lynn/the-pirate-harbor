var ms = new MainService()

new Vue({
    el: "#app",
    data: {
        user:{},
        username:'',
        password: '',
        existing: false,
        newUser: false,
        showLogin: false
    },
    methods:{
        login: function(){
           if(existing){
            ms.login(this.username, this.password)
           } else if(newUser){
            ms.register(this.username, this.password)
           }
        },
        toggleLogin: function(){
            this.showLogin = !this.showLogin
            this.existing= !this.existing
        },
        toggleRegister: function(){
            this.showLogin = !this.showLogin
            this.newUser = !this.newUser
        }
    }
    




})

// var  VueTimeago = require('vue-timeago')

// Vue.use(VueTimeago, {
//   name: 'timeago', // component name, `timeago` by default
//   locale: 'en-US',
//   locales: {
//     // you will need json-loader in webpack 1
//     'en-US': require('vue-timeago/locales/en-US.json')
//   }
// })