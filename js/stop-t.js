document.addEventListener('DOMContentLoaded', function () {
    const clickableArea1 = document.getElementById('clickableArea1');
    const clickableArea2 = document.getElementById('clickableArea2');
    const clickableArea3 = document.getElementById('clickableArea3');
    const audio1 = document.getElementById('clickSound1');

    clickableArea1.addEventListener('click', function () {
        startLoop(audio1);
    });

    clickableArea2.addEventListener('click', function () {
        stopLoop(audio1);
    });

    clickableArea3.addEventListener('click', function () {
        forceStop(audio1);
    });

    function startLoop(audioElement) {
        // ループ再生を有効にして再生
        audioElement.loop = true;
        audioElement.play();
    }

    function stopLoop(audioElement) {
        // ループ再生の停止
        audioElement.loop = false;
        // timeupdate イベントを使って、音声が最後まで再生されたら停止
        audioElement.addEventListener('timeupdate', function onTimeUpdate() {
            if (audioElement.currentTime === audioElement.duration) {
                audioElement.pause();
                audioElement.currentTime = 0;
                audioElement.removeEventListener('timeupdate', onTimeUpdate);
            }
        });
    }

    function forceStop(audioElement) {
        // 強制的に停止
        audioElement.pause();
        audioElement.currentTime = 0;
    }
});
