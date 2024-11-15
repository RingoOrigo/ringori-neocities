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