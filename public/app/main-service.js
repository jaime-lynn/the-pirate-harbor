function MainService() {

    this.login = function (username, password, cb) {
        var userLogin = {
            username: username,
            password: password
        }
        $.post("/login", userLogin,cb)
    }

    this.register = function (username, password, cb) {
        var userLogin = {
            username: username,
            password: password
        }
         $.post("/register", userLogin, cb)
    }
}