// Develope by Abdur Rahman Roky
// mdroky2016s.s.c@gmail.com
// https://github.com/startup-git


// Select All fields
let form = document.getElementById("message_form")
let textArea = document.getElementById("input_text")
let successMsg = document.getElementById("mgs")
let showPost = document.getElementById("posts")

form.addEventListener("submit", (e)=> {
    e.preventDefault()
    formValidation()
})
let formValidation = () => {
    if(textArea.value === ""){
        successMsg.innerHTML = "Post can't be blank"
    }else{
        successMsg.innerHTML = ""
        acceptData()
    }
}
// accept data from input fields
let data = {}
let acceptData = () => {
    data['text'] = textArea.value
    console.log(data)
    createPost()
}

// Create post
let createPost = () => {
    showPost.innerHTML += `
    <div class="posts-content d-flex justify-content-between">
    <p class="text-muted">${data.text}</p>
    <span class="options">
      <i onclick="editPost(this)" class="fas fa-edit" title="Edit Post" id="Edit_icon"></i>
      <i onclick="deletePost(this)" class="fas fa-trash-alt" title="Delete Post" id="Delete_icon"></i>
    </span>
  </div>
    `
    textArea.value = ""
}

// Delete Post
let deletePost = (e) => {
    e.parentElement.parentElement.remove()
    textArea.value = ""
}
// Edit Post
let editPost = (e) => {

    textArea.value = e.parentElement.previousElementSibling.innerHTML
    e.parentElement.parentElement.remove()
}