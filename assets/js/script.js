const navBar = document.querySelector("[data-navbar]")
const toggle = document.querySelector("[data-nav-toggle]")


toggle.addEventListener("click", () => {
    navBar.classList.toggle("active")
})


// Scroll Header
const header = document.querySelector("[data-header]")
window.addEventListener("scroll", () => {
    header.classList.toggle("active", window.scrollY > 50 ? "add" : "remove"("active"))
})

// Fav-Icon active 
const facIcon = document.querySelectorAll(".fav-btn")

facIcon.forEach(facIcon => {
    facIcon.addEventListener("click", () => {
        facIcon.classList.toggle("active")
    })
})

// Update year 

const Year = document.querySelector(".year")
const currentYear = new Date().getFullYear()
Year.textContent = currentYear

// Scroll to top
const scrollTopBtn = document.querySelector(".scroll-top-btn")

window.addEventListener("scroll", () => {
    if (window.scrollY >= 200) {
        scrollTopBtn.classList.add("active")
    } else {
        scrollTopBtn.classList.remove("active")
    }
})

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

//  Dark Mode Toggle
const darkModeToggle = document.querySelector(".dark-mode-toggle")
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    darkModeToggle.classList.toggle("active")
})
