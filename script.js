const loginUser = localStorage.getItem("loginUserInfo")
if (!loginUser) {
    window.location.href = "/login.html";
}
const header = document.querySelector(".all")
header.innerHTML = `
<div>
           <a href="/index.html" class="img-cover"> <img src="https://img.magnific.com/premium-photo/png-gradient-purple-business-logo-element-sticker-transparent-background_53876-947495.jpg?semt=ais_hybrid&w=740&q=80"
                alt="" class="img"></a>
        </div>
        <div class="input">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
                <path
                    d="M18 10c0-4.41-3.59-8-8-8s-8 3.59-8 8 3.59 8 8 8c1.85 0 3.54-.63 4.9-1.69l5.1 5.1L21.41 20l-5.1-5.1A8 8 0 0 0 18 10M4 10c0-3.31 2.69-6 6-6s6 2.69 6 6-2.69 6-6 6-6-2.69-6-6">
                </path>
            </svg>
            <input type="search" placeholder=" Search" class="search">
        </div>
        <ul class="menu">
            <li class="item"><a href="/connect.html" class="item-link">Connections</a></li>
            <li class="item"><a href="/users/users.html" target="_blank" class="item-link">Users</a></li>
            <li class="item"><a href="/post.html" class="item-link">My posts</a></li>
            <li class="item"><button class="item-link btn">My profile</button></li>
        </ul>
`

const body = document.querySelector("body")
body.innerHTML = body.innerHTML +
    `
<section class="profile">
        <div class="profile-info">
            <button class="x"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                    viewBox="0 0 24 24">
                    <!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
                    <path
                        d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z">
                    </path>
                </svg>
            </button>
            <div class="img-box">
                <img src="" alt="" class="profile-user">
                <div class="online">

                </div>
            </div>


            <div class="user-info">
                <span class="info">
                    Name:
                </span>
                <span class="info name">

                </span>
            </div>
            <div class="user-info">
                <span class="info">
                    Surname:
                </span>
                <span class="info surname">

                </span>

            </div>
            <div class="user-info">
                <span class="info">
                    Username:
                </span>
                <span class="info username">

                </span>
            </div>
            <div class="user-info">
                <span class="info">
                    Email:
                </span>
                <span class="info email">

                </span>
            </div>
            <button class="logout">Log out <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    fill="currentColor" viewBox="0 0 24 24">
                    <!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
                    <path d="M9 13h7v-2H9V7l-6 5 6 5z"></path>
                    <path d="M19 3h-7v2h7v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></path>
                </svg>
            </button>
            <button class="create">Create Post<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="currentColor" viewBox="0 0 24 24" >
<!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
<path d="M20 2H10c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 12H10V4h10z"></path><path d="M4 22h10c1.1 0 2-.9 2-2v-2h-2v2H4V10h2V8H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2m10-10h2v-2h2V8h-2V6h-2v2h-2v2h2z"></path>
</svg></button>
<a class="game" href="/game/play.html">Play <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="currentColor" viewBox="0 0 24 24" >
<!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
<path d="M15 12a1 1 0 1 0 0 2 1 1 0 1 0 0-2m2-2a1 1 0 1 0 0 2 1 1 0 1 0 0-2m-7-1H8v2H6v2h2v2h2v-2h2v-2h-2z"></path><path d="M15 5H9c-3.85 0-6.99 3.13-7 6.99v.04C2.01 15.88 5.15 19 9 19h6c3.85 0 6.99-3.13 7-6.97V12c-.01-3.87-3.15-7-7-7m0 12H9c-2.75 0-5-2.24-5-4.99C4 9.25 6.25 7 9 7h6c2.75 0 5 2.25 5 5.01 0 2.75-2.25 4.99-5 4.99"></path>
</svg></a>
        </div>
        
    </section>
    <section class="img-large">
        <img src="" alt="" class="profile-large">
        <button class="x x2"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                viewBox="0 0 24 24">
                <!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
                <path
                    d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z">
                </path>
            </svg>
        </button>
    </section>
`

const profile = document.querySelector(".profile")
const link = document.querySelector(".btn")
const imageProf = document.querySelector(".profile-user")
const name = document.querySelector(".name")
const surname = document.querySelector(".surname")
const username = document.querySelector(".username")
const email = document.querySelector(".email")
const imgBox = document.querySelector(".img-box")
const imgLarge = document.querySelector(".img-large")
const profileLarge = document.querySelector(".profile-large")
const x2 = document.querySelector(".x2")
const button = document.querySelector(".create")
const allPost = document.querySelector(".all-post")
const itemLink = document.querySelector(".item-link")
const play = document.querySelector(".game")


const user = JSON.parse(loginUser);

const showUser = () => {
    profile.classList.add("show-profile")
    imageProf.setAttribute("src", user.imgUrl)
    name.textContent = user.name
    surname.textContent = user.surname
    username.textContent = user.username
    email.textContent = user.email
}

link.addEventListener("click", showUser)

const close = document.querySelector(".x");
const closeInfo = () => {
    profile.classList.remove("show-profile")
}
close.addEventListener("click", closeInfo);

const logout = document.querySelector(".logout");
logout.addEventListener("click", () => {
    localStorage.removeItem("loginUserInfo")
    window.location.reload();
})

imgBox.addEventListener("click", () => {
    imgLarge.classList.add("show-large")
    profileLarge.setAttribute("src", user.imgUrl)
})

x2.addEventListener("click", () => {
    imgLarge.classList.remove("show-large")

})
button.addEventListener("click", () => {
    window.location.href = "/post.html"
});


itemLink.addEventListener("click", () => {
    window.location.href = "/connect.html"
});

play.addEventListener("click", () => {
    window.location.href = "/play.html"
})


const currentUser = location.href.includes("post.html") ? user.username : null;
const userPostsX = localStorage.getItem("posts") ? JSON.parse(localStorage.getItem("posts")) : []
const userPosts = currentUser ? userPostsX.filter((p) => p.user === user.username) : userPostsX.filter((p) => p.user !== user.username);
if (location.href.includes("post.html") || location.href.includes("index.html")) {
    userPosts.forEach((item) => {
        allPost.innerHTML = allPost.innerHTML + `
    <div class="post-item">
      <div class="ll">
        <div class="post-user">
            <img src="${item.imgUrl}" alt="" class="post-user-img">
            <div class="post-user-info">
                <span class="post-user-name">${item.user}</span>
                <span class="post-user-date">${item.date}</span>
            </div>
        </div>
        <div class="post-content">
            <p>${item.post}</p>
        </div>
      </div>
    </div>
    `
    });
};

