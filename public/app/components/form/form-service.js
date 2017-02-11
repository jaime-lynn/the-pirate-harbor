function FormService(){
    var form = {}
this.submit = function(title, content, type, author){
let newSubmit = {
    title:  title,
    content: content,
    type: type,
    author: author,
    date: Date.now()
}
form = newSubmit
//this is where we will do a post request later
} 



}