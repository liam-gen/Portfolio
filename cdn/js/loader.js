document.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
        document.querySelector(".loader").style.animation = "out 2s"
        document.querySelector(".container").style.display = "block"
        
    }, 1000)
    setTimeout(() => {
        document.querySelector(".loader").style.display = "none"
    }, 2000)
});