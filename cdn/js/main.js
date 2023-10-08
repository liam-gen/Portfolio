document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".open-menu").addEventListener("click", () => {
        document.querySelector(".mobile-menu").style.display = "block"
    })

    document.querySelector(".close-menu").addEventListener("click", () => {
        document.querySelector(".mobile-menu").style.display = "none"
    })

    document.querySelectorAll("*:not(a)").forEach((e) => {
        e.addEventListener("click", () => {
            if(e.getAttribute("href")){
                window.open(e.getAttribute("href"), e.getAttribute("target") ? e.getAttribute("target") : "_self")
            }
        })
    })

    document.querySelectorAll(".mobile-menu ul li").forEach((e) => {
        e.addEventListener("click", () => {
            document.querySelector(".mobile-menu").style.display = "none"
        })
    })
})