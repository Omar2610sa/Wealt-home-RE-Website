const navBar = document.querySelector("[data-navbar]")
const toggle = document.querySelector("[data-nav-toggle]")


toggle.addEventListener("click", ()=>{
    navBar.classList.toggle("active")
}) 


// Scroll Header
const header = document.querySelector("[data-header]")
window.addEventListener("scroll", ()=>{
    header.classList.toggle("active", window.scrollY > 50? "add" : "remove"("active") )
})

// Fav-Icon active 
const facIcon = document.querySelectorAll(".fav-btn")

facIcon.forEach(facIcon => {
    facIcon.addEventListener("click", ()=>{
        facIcon.classList.toggle("active")
    })
})

// Update year 

const Year = document.querySelector(".year")
const currentYear = new Date().getFullYear()
Year.textContent = currentYear

// Scroll to top
const scrollTopBtn = document.querySelector(".scroll-top-btn")
window.addEventListener("scroll", ()=>{
    scrollTopBtn.classList.toggle("active", window.scrollY > 200 ? "add" : "remove"("active"))
})

scrollTopBtn.addEventListener("click", ()=>{
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
})
