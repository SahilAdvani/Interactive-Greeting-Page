let user_name = prompt("Enter your name:")
let fav_color = prompt("Enter your favourite color:")

alert(`Hi ${user_name} !!! Welcome to my page.`)

let message = document.querySelector(".message")
message.innerHTML = `Hi ${user_name} !!! Welcome to my page.`
document.body.style.backgroundColor = `${fav_color}`