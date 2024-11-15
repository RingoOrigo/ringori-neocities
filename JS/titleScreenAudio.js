function toggleMute () {
    const audio = document.getElementById("audioEmbed");
    const button = document.getElementById("musicButton");

    if (audio.volume != 0.0) {
        audio.volume = 0.0;
        button.text = "Unmute Music";
    } else {
        audio.volume = 1.0;
        button.innerText = "Mute Music";
    }
}