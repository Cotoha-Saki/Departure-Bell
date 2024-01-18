var currentlyPlaying = null;

function playSound(soundFile, volume) {
    // Stop the currently playing sound before playing a new one
    if (currentlyPlaying) {
        currentlyPlaying.pause();
        currentlyPlaying.currentTime = 0;
    }

    var audioElement = new Audio(soundFile);

    // Set the volume (0.0 to 1.0)
    audioElement.volume = volume;

    audioElement.play();
    currentlyPlaying = audioElement;
}

function stopAllSounds() {
    // Stop all currently playing sounds
    if (currentlyPlaying) {
        currentlyPlaying.pause();
        currentlyPlaying.currentTime = 0;
    }
}

// 例: 音量を0.5にしてサウンドを再生
playSound('example.mp3', 0.5);

