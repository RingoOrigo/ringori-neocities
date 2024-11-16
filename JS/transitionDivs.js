function transition() {
    // Find every relevant object
    const loadingScreen = document.getElementById("loadingScreen");
    const titleScreen = document.getElementById("container");
    const audio = document.getElementById("audioEmbed");

    // Enable the title screen, then fade the loading screen out and play the audio.
    loadingScreen.classList.add("fadeOut");
    titleScreen.classList.add("fadeIn");
    titleScreen.style.display = "flex";
    audio.play();

    // Make absolutely sure that the fading animation finishes before removing the loading screen.
    setTimeout(() => {
        loadingScreen.style.display = "none";
        titleScreen.classList.remove("fadeIn");
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

    container = document.getElementById("container");
    buffer = document.getElementById("containerBuffer");

    // Okay this is a clusterf*ck of code genuinely
    // So basically what I am doing is swapping between an active div and a buffer so that
    //      there can be a cute fade transition when changing themes.

    if (buffer.style.display == "none") {
        // If the buffer is not currently displayed, update the buffer's background
        // Then fade out the main container and fade in the buffer.
        buffer.style.backgroundImage = themeURLs[index];
        container.classList.add("fadeOut");
        buffer.classList.add("fadeIn");
        buffer.style.display = "flex";

        setTimeout(() => {
            // Remove any fade animations that are left on the divs and fully hide the container
            container.style.display = "none";
            container.classList.remove("fadeOut");
            buffer.classList.remove("fadeIn");
        }, 1000);
    } else {
        // If the buffer is actively displayed, then do the exact same process but swap the buffer with the container.
        container.style.backgroundImage = themeURLs[index];
        buffer.classList.add("fadeOut");
        container.classList.add("fadeIn");
        container.style.display = "flex";

        setTimeout(() => {
            buffer.style.display = "none";
            buffer.classList.remove("fadeOut");
            container.classList.remove("fadeIn");
        }, 1000);
    }
    closeMenu();
}