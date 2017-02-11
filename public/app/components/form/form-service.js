function FormService(){
    var form = {}
this.submit = function(title, content, type, user, cb){
   var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yy = today.getFullYear();
var hour = today.getHours();
var minutes = today.getMinutes();
var now = mm + '-' + dd + '-'+ yy +' '+hour +':'+minutes

let newSubmit = {
    title:  title,
    content: content,
    type: type,
    user: user,
    date: now
}
$.post("/posts", newSubmit, function(result){
    cb();

    Materialize.toast(result.message, 2000);
})


} 



}


