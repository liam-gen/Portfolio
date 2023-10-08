const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


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

    document.querySelectorAll(".projects .container div img").forEach((e) => {
        e.addEventListener("mouseover", () => {
            if(!isMobile.any()){
                e.style = "transform: scale(3);z-index: 9;position: sticky;left: 20%;top: 50%;transform-origin: 50% 50%;"
            }
        })

        e.addEventListener("mouseout", () => {
            if(!isMobile.any()){
                e.style = "transform: scale(1);z-index: 1;position: relative;left: unset;top: unset;transform-origin: unset;"
            }
        })
    })
})
