var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Développeur web')
    .pauseFor(2500)
    .deleteChars(3)
    //.deleteAll()
    .typeString("d'applications")
    .pauseFor(2500)
    .deleteChars(14)
    .typeString('back-end')
    .pauseFor(2500)
    .deleteChars(9)
    .typeString("")
    .pauseFor(2500)
    .deleteAll()
    .start();

document.querySelectorAll("*:not(a)").forEach(e => {
    if(e.getAttribute("href")){
        let args = e.getAttribute("href").split("|");
        console.log(args)
        if(args.length > 1){
            e.addEventListener("click", () => {
                window.open(args[1]+"?ref=portfolio-lgjs", args[0])
            })
        }
        else{
            e.addEventListener("click", () => {
                window.open(args[0]+"?ref=portfolio-lgjs","_self")
            })
        }
    }
})

document.addEventListener("DOMContentLoaded", (event) => {
    setTimeout(() => {
        document.querySelector(".loader").style.animation = "out 2s"
        document.querySelector(".container").style.display = "block"
        
    }, 1000)
    setTimeout(() => {
        document.querySelector(".loader").style.display = "none"
    }, 2000)
});