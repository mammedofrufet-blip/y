const allUsers = document.querySelector(".all-users")
const people = localStorage.getItem("loginUserInfo") ? JSON.parse(localStorage.getItem("loginUserInfo")) : []
const connects = localStorage.getItem("connects") ? JSON.parse(localStorage.getItem("connects")) : []
const current = connects.length === 0 ? {} : connects.find((u) => u.user === people.username)
const peoples = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")).filter((u) => people.username !== u.username && !current?.followers?.includes(u.username)) : []
const connect = (i) => {
    
    const u = peoples[i];
    const obj = {
        user: people.username,
        followers: []
    }
    if (connects.length === 0) {
        obj.followers.push(u.username)
        connects.push(obj)
        localStorage.setItem("connects", JSON.stringify(connects))
    }
    else {
        if (!current) {
            obj.followers.push(u.username)
            connects.push(obj)
            localStorage.setItem("connects", JSON.stringify(connects))
            window.location.reload()
            return;
        }
        if(current.followers.includes(u.username)){
            return;
        }
        current.followers.push(u.username)
        const newConnects = connects.filter((u) => u.user !== people.username)
        newConnects.push(current)
        localStorage.setItem("connects", JSON.stringify(newConnects))

        // const arr = [5, 9, 6, 3, 6, 7]
        // const arr2 = arr.filter((e) => e !== 6)
    }
    window.location.reload()

    // [
    //     {
    //         user: "jack",
    //         followers: ["Michel", "Nermin"]
    //     },
    //     {
    //         user: "tural",
    //         followers: ["Michel", "Nermin"]
    //     },
    //     {
    //         user: "ehmed",
    //         followers: ["Michel", "Nermin"]
    //     }
    // ]
}
peoples.forEach((item, i) => {
    allUsers.innerHTML = allUsers.innerHTML + `
            <div class="user-item">
                <img src="${item.imgUrl}" alt="" class="user-cover">
                <div class="user-item-info">
                    <span class="item-name">${item.name}</span>
                    <span class="item-surname">${item.surname}</span>
                </div>
                ${current?.followers?.includes(item.username)? "<span>Connects</span>" :`<button class="item-connect" onclick="connect(${i})">Connect +</button>` }   
            </div>
 `

})

const date = new Date();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const il = date.getFullYear();
console.log(il, month + 1, day, hour, minute)
console.log(date)