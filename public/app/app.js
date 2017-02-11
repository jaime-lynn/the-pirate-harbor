

var ms = new MainService()


new Vue({
    el: "#app",
    data: {
        user: {},
        username: '',
        password: '',
        existing: false,
        newUser: false,
        showLogin: false,
        mainPage: true,
        postPage: false,
        postId: '',
        submitPage: false
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
        toggleLogout: function () {
            this.user = {}
            this.username = ''
            this.password = ''
            this.existing = false
            this.newUser = false
            this.showLogin = false

        },
        toggleSubmit: function () {
            this.postPage = false
            this.mainPage = false
            this.submitPage = true
        },
        toggleMain: function () {
            this.postPage = false
            this.mainPage = true
            this.submitPage = false
        }
    }


})








