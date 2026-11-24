const username = document.querySelector(".username")
const password = document.querySelector(".password")
const usernameError2 = document.querySelector(".username-error-2")
const passwordError2 = document.querySelector(".password-error-2")
const totalError = document.querySelector(".total-error")
const button = document.querySelector(".sent")
const login = () => {
    const object = {
        username: username.value,
        password: password.value
    }
    if(object.username.trim().length === 0){
        usernameError2.classList.add("show-error")
        return;
    }
    if(object.password.trim().length < 8){
        passwordError2.classList.add("show-error")
        return;
    }
    const arr = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : [];
    if (arr.length === 0) {
      totalError.classList.add("show-error")
      totalError.textContent = "No user in your data"
        return;
    }
    const findedUser = arr.find(e => e.username === object.username && e.password === object.password);
    if (!findedUser){
        totalError.classList.add("show-error")
        totalError.textContent = "Username or Password is not correct";
        return;
    }
    passwordError2.classList.remove("show-error")
    totalError.classList.remove("show-error")
    usernameError2.classList.remove("show-error")
    localStorage.setItem("loginUserInfo", JSON.stringify(findedUser))
    window.location = "index.html"
}
button.addEventListener("click", login)

