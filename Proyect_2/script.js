let menuButton = document.getElementById("menu-button")

menuButton.addEventListener("click",()=>{
    let  menu   = document.getElementById("menu")
    menu.classList.toggle("show-menu")
})