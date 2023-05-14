const buttonTheme = document.getElementById ("button-theme");
const body = document.querySelector("body");
const imageButton = document.querySelector(".image-button")

buttonTheme.addEventListener("click", () => {
    const modMoonActive = body.classList.contains("mod-moon")
    
    if(modMoonActive) {
        body.classList.remove("mod-moon");

        imageButton.setAttribute("src", "./imagens/sun.png");
    }

    else {
        body.classList.add("mod-moon");

        imageButton.setAttribute("src", "./imagens/moon.png");
    }
});

