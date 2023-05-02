// blog js
let postUl = document.getElementById("post-ul")

let posts;
if(JSON.parse(localStorage.getItem('posts')) ){
    posts = JSON.parse(localStorage.getItem('posts')) 
}else{
    posts =["no posts found"]
}

