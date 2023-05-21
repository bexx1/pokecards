const changeThemeButton = document.getElementById("change-theme-button");
const body = document.querySelector("body");
const moonImage = document.querySelector(".button-image");
const darkModeActive = body.classList.contains("dark-mode");

changeThemeButton.addEventListener("click", () => {
    const darkModeActive = body.classList.contains("dark-mode");
    if (darkModeActive) {
        body.classList.remove("dark-mode");
        moonImage.setAttribute("src", "./src/images/sun.png");
    }
    else {
        body.classList.add("dark-mode");
        moonImage.setAttribute("src", "./src/images/moon.png");
    }
});