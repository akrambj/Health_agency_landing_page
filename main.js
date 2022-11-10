const header = document.querySelector("header")


document.addEventListener("scroll", function(){
    let y = scrollY

    if (y>=30) {
        header.style.backgroundColor = "#2F8DFB"
    } else {
        header.style.backgroundColor = "transparent"
    }
})