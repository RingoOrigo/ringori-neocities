function transition() {
    // Find every relevant object
    const loadingScreen = document.getElementById("loadingScreen");
    const titleScreen = document.getElementById("container");
    const audio = document.getElementById("audioEmbed");

    // Enable the title screen, then fade the loading screen out and play the audio.
    titleScreen.style.display = "flex";
    loadingScreen.classList.add("fadeOut");
    audio.play();

    // Make absolutely sure that the fading animation finishes before removing the loading screen.
    setTimeout(() => {
        loadingScreen.style.display = "none";
    }, 900);
}

function openThemeMenu() {
    const menu = document.getElementById("menuContainer");

    if (menu.style.display == "none") {
        menu.classList.remove("fadeOut");
        menu.classList.add("fadeIn");
        menu.style.display = "flex";
    } else {
        closeMenu();
    }
}

function closeMenu() {
    const menu = document.getElementById("menuContainer");

    menu.classList.remove("fadeIn");
    menu.classList.add("fadeOut");
    setTimeout(() => {
        menu.style.display = "none";
    }, 900);
}

function setTheme (index) {
    themeURLs = [
        "url('https://i.imgur.com/gBeGTk8.jpeg')",
        "url('https://i.imgur.com/TLI2GuX.jpeg')",
        "url('https://i.imgur.com/kqOavLy.jpeg')",
        "url('https://i.imgur.com/n65xelF.jpeg'",
        "url('https://i.imgur.com/iEm9ALE.jpeg')",
        "url('https://i.imgur.com/FwEP5e9.jpeg')",
        "url('https://i.imgur.com/JfcKvDz.png')",
        "url('https://i.imgur.com/kBZGQSx.png')",
        "url('https://i.imgur.com/0PPZFsD.jpeg')",
        "url('https://i.imgur.com/MijoBG9.jpeg')",
        "url('https://i.imgur.com/eBPVU0y.png')",
        "url('https://i.imgur.com/nvvfGnu.jpeg'"
    ];

    document.body.style.backgroundImage = themeURLs[index];
    closeMenu();
}