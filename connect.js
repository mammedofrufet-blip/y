const myProfile = localStorage.getItem("loginUserInfo") ? JSON.parse(localStorage.getItem("loginUserInfo")) : [];
const followers = localStorage.getItem("connects") ? JSON.parse(localStorage.getItem("connects")).find((u) => u.user === myProfile.username)?.followers : [];
const allUsersInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")).filter((u) => myProfile.username !== u.username && followers?.includes(u.username)) : [];
const myConnections = document.querySelector(".my-connections");
const connections = localStorage.getItem("connects") ? JSON.parse(localStorage.getItem("connects")) : [];


const deleteItem = (username) => {
    const item = connections.find((u) => u.user === myProfile.username)
    const i = item.followers.indexOf(username)
    const index = connections.indexOf(item)
    connections[index].followers.splice(i, 1)
    console.log(item, index, connections, i)
    localStorage.setItem("connects", JSON.stringify(connections))
    window.location.reload()
}
allUsersInfo?.forEach((item, i) => {
    myConnections.innerHTML = myConnections.innerHTML + `
   <div class="connection-item">
        <div class="bb">
            <img src="${item.imgUrl}" alt="" class="connection-cover">
            <span class="item-name">${item.name} ${item.surname}</span>
            <span class="item-connect-info">
                Connected 
                <svg class="tick"  xmlns="http://www.w3.org/2000/svg" width="24" height="24"fill="currentColor" viewBox="0 0 24 24" >
                    <path d="M9 15.59 4.71 11.3 3.3 12.71l5 5c.2.2.45.29.71.29s.51-.1.71-.29l11-11-1.41-1.41L9.02 15.59Z"></path>
                </svg>
            </span>
        </div>

        <button class="delete" onclick="deleteItem('${item.username}')">
            <span class="delete-connection">
                <svg  xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24" >
                    <path d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z"></path><path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                </svg>
            </span>
        </button>
   </div>
    `
})