// const btn = document.querySelector(".reg-btn")
// const inputs = document.querySelectorAll(".reg-input")
// const namee = document.querySelector(".name")
// const surname = document.querySelector(".surname")
// const username = document.querySelector(".username")
// const reg = () => {
//     const user = {
//         name: inputs[0].value,
//         surname: inputs[1].value,
//         username: inputs[2].value,
//         email: inputs[3].value,
//         birthdate: inputs[4].value,
//         password: inputs[5].value
//     }
//     const arr = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : []
//     const usernames = arr.map(user => user.name)
//     if (usernames.length === 0) {
//         namee.classList.add("show-error")
//         return;
//     }
//     if (user.surname.length === 0) {
//         surname.classList.add("show-error")
//         return;
//     }
//     if (user.username.length === 0) {
//         username.classList.add("show-error")
//         return;
//     }
//     namee.classList.remove("show-error")
//     surname.classList.remove("show-error")
//     username.classList.remove("show-error")
//     arr.push(user)
//     localStorage.setItem("userInfo", JSON.stringify(arr))
// }
// btn.addEventListener("click", reg)


const btn = document.querySelector(".reg-btn")
const inputs = document.querySelectorAll(".reg-input")
const errors = document.querySelectorAll(".error")
const reg = () => {
    const user = {
        name: inputs[0].value,
        surname: inputs[1].value,
        username: inputs[2].value.toLowerCase(),
        email: inputs[3].value.toLowerCase(),
        birthdate: inputs[4].value,
        password: inputs[5].value,
        imgUrl: inputs[6].value
    }
    if (user.name.trim().length === 0) {
        errors[0].classList.add("show-error")
        return;
    }
    if (user.surname.trim().length === 0) {
        errors[1].classList.add("show-error")
        return;
    }
    if (user.username.trim().length === 0) {
        errors[2].classList.add("show-error")
        return;
    }
    if (user.email.trim().length === 0) {
        errors[4].classList.add("show-error")
        return;
    }
    if (user.birthdate.trim().length === 0) {
        errors[6].classList.add("show-error")
        return;
    }
    if (user.password.trim().length < 8) {
        errors[7].classList.add("show-error")
        return;
    }
    if (user.imgUrl.trim().length === 0) {
        errors[8].classList.add("show-error")
    }
    const arr = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : []
    const usernames = arr.map(user => user.username)
    if (usernames.includes(user.username)) {
        errors[3].classList.add("show-error")
        return;
    }
    const emails = arr.map(user => user.email)
    if (emails.includes(user.email)) {
        errors[5].classList.add("show-error")
        return;
    }

    errors.forEach(y => {
        y.classList.remove("show-error")
    })
    arr.push(user)
    localStorage.setItem("userInfo", JSON.stringify(arr))
    inputs.forEach(e => {
        e.value = "";
    })
    window.location = "login.html";
}
btn.addEventListener("click", reg)