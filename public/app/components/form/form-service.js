function FormService(){
    var form = {}
this.submit = function(title, content, type, user){
let newSubmit = {
    title:  title,
    content: content,
    type: type,
    user: user,
    date: Date.now()
}
form = newSubmit
console.log(form)
//this is where we will do a post request later
} 



}