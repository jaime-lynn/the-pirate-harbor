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
$.post("/posts", newSubmit, function(result){

    Materialize.toast(result.message, 2000);
})


} 



}


