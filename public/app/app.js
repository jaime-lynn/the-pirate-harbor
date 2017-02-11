var ms = new MainService()

new Vue({
    el: "#app",
    data: {
        user: {},
        username: '',
        password: '',
        existing: false,
        newUser: false,
        showLogin: false
    },
    methods: {
        login: function () {
            if (this.existing) {
                ms.login(this.username, this.password, this.assignUser)
            } else if (this.newUser) {
                ms.register(this.username, this.password, this.assignUser)   
            }
        },
        assignUser: function (user) {
            this.user._id = user.data._id
            this.user.username = user.data.username
            this.showLogin = false
            this.newUser = false
            this.existing = false
        },
        toggleLogin: function () {
            this.showLogin = !this.showLogin
            this.existing = !this.existing
        },
        toggleRegister: function () {
            this.showLogin = !this.showLogin
            this.newUser = !this.newUser
        },
        toggleLogout: function(){
        this.user= {}
        this.username= ''
        this.password= ''
        this.existing= false
        this.newUser= false
        this.showLogin= false
            
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