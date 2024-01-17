var currentlyPlaying = null;

    function playSound(soundFile) {
        // Stop the currently playing sound before playing a new one
        if (currentlyPlaying) {
            currentlyPlaying.pause();
            currentlyPlaying.currentTime = 0;
        }

        var audioElement = new Audio(soundFile);
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
