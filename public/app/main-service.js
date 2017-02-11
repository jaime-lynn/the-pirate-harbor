function MainService() {

    this.login = function (username, password) {
        var userLogin = {
            username: username,
            password: password
        }
        $.post("./login", userLogin, function (user) {
            alert(username + " has logged in")
            return { username: user.username, _id: user._id }
        })
    }

    this.register = function (username, password) {
        var userLogin = {
            username: username,
            password: password
        }
        $.post("./register", userLogin, function (user) {
            alert(username + " has been created")
            return { username: user.username, _id: user._id }
        })
    }




}