document.addEventListener('DOMContentLoaded', function () {
    const clickableArea1 = document.getElementById('clickableArea1');
    const clickableArea2 = document.getElementById('clickableArea2');
    const audio1 = document.getElementById('clickSound1');
    const audio2 = document.getElementById('clickSound2');
    const stopButton = document.getElementById('stopButton');

    clickableArea1.addEventListener('click', function () {
        stopAllSounds();
        playSoundLoop(audio1);
    });

    clickableArea2.addEventListener('click', function () {
        stopLoopAndPlay(audio1, audio2);
    });

    stopButton.addEventListener('click', function () {
        stopAllSounds();
    });

    function playSoundLoop(audioElement) {
        // ループ再生を有効にして再生
        audioElement.loop = true;
        audioElement.play();
    }

    function stopLoopAndPlay(loopAudio, playAudio) {
        // ループ再生の停止
        loopAudio.loop = false;
        loopAudio.pause();
        loopAudio.currentTime = 0;

        // 非ループ音声の再生
        playAudio.play();
    }

    function stopAllSounds() {
        // すべての音声を停止
        audio1.pause();
        audio1.currentTime = 0;
        audio2.pause();
        audio2.currentTime = 0;
    }
});







