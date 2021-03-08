const titlePost = document.getElementById("titulo-post")
const autorPost = document.getElementById("autor-post")
const contentPost = document.getElementById("conteudo-post")
let arrayData= []

function createPost() {
    if (titlePost.value == 0 || autorPost == 0 || contentPost == 0){
        alert("Fill in the blank fields!")
    }else {
        const objectPost = {
            title: titlePost.value,
            autor: autorPost.value,
            content: contentPost.value
        }
        arrayData.push(objectPost)
        console.log(arrayData)
        clear(titlePost,autorPost,contentPost)
        const containerPosts = document.getElementById("container-de-posts")
        containerPosts.innerHTML += `<h1>${objectPost.title}<h1> <h3><i>${objectPost.autor}</h3></i> <p>${objectPost.content}</p>`
    }
}

function clear(element1, element2, element3){
    element1.value=""
    element2.value=""
    element3.value=""
}