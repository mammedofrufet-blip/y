const button1 = document.querySelector(".post-btn")
const imgInput = document.querySelector(".img-input")
const postInput = document.querySelector(".post-input")
button1.addEventListener("click", () => {
    const post = {
        imgUrl: imgInput.value,
        post: postInput.value,
        user: JSON.parse(localStorage.getItem("loginUserInfo")).username,
        date: new Date().toLocaleString()
    }
    if(imgInput.value.trim().length === 0 || postInput.value.trim().length === 0){
        alert("Please fill in all fields")
        return;
    }
    const arr = localStorage.getItem("posts") ? JSON.parse(localStorage.getItem("posts")) : []
    arr.push(post)
    localStorage.setItem("posts", JSON.stringify(arr))
    window.location.href = "/index.html"
});