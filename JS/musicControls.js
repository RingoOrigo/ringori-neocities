var currentVolume = 0.3;
var previousVolume = 0.3;

// Function to play and pause the current audio file
function playPause () {
    // Get all necessary date from the current state of the webpage.
    const audio = document.getElementById("audioEmbed");
    var button = document.getElementById("musicButton");
    var currentText = button.innerText;

    audio.volume = currentVolume;

    // When swapping states between played and paused, also update the text on the button.
    if (currentText == "Play") {
        button.innerText = "Pause";
    }
    else {
        button.innerText = "Play";
    }

    // Return the opposite of the audio's current state.
    return audio.paused ? audio.play() : audio.pause();
}

// Update the volume
function volumeUp () {
    const audio = document.getElementById("audioEmbed");

    // Check to see if the maximum audio value has been reached
    if (audio.volume == 1.0) {
        // If so, do nothing
        return;
    } else {
        // If not, increase!
        audio.volume = (audio.volume + 0.05);
    }
}

// This function works the same exact way as the last one, so I will not comment it in detail.
function volumeDown () {
    const audio = document.getElementById("audioEmbed");

    if (audio.volume == 0.0) {
        return;
    } else {
        // Decrease volume if possible.
        audio.volume = (audio.volume - 0.05);
    }

}

// Function to mute audio, setting the volume to zero regardless of the current volume.
function muteAudio () {
    const audio = document.getElementById("audioEmbed");

    // This is self explanatory.
    audio.volume = 0.0;
}