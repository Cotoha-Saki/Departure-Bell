document.addEventListener('DOMContentLoaded', function () {
    const clickableArea1 = document.getElementById('clickableArea1');
    const clickableArea2 = document.getElementById('clickableArea2');
    const stopButton = document.getElementById('stopButton');
    const clickSound1 = document.getElementById('clickSound1');
    const clickSound2 = document.getElementById('clickSound2');
    const clickSound3 = document.getElementById('clickSound3');
    let isClickSound1Playing = false;

    clickableArea1.addEventListener('click', function () {
        if (!isClickSound1Playing) {
            isClickSound1Playing = true;

            // 同時に1と2を再生
            playSounds([clickSound1, clickSound2]);

            // clickableArea1のボタンをクリックしたときに中央に向かって小さくする
            adjustSize(clickableArea1);

            // 1つ目の音が再生し終わった後にループ再生
            clickSound1.addEventListener('ended', function () {
                clickSound1.setAttribute('loop', 'true');
            });
        }
    });

    clickableArea2.addEventListener('click', function () {
        if (isClickSound1Playing) {
            stopLooping(clickSound1); // ループ再生を解除
            isClickSound1Playing = false;

            // clickableArea2のボタンをクリックしたときに中央に向かって小さくする
            adjustSize(clickableArea2);

            // 2つ目の音を再生
            playSound(clickSound3);

            // 0.5秒後に元のサイズに戻す
            setTimeout(function () {
                resetSize(clickableArea2);
                resetSize(clickableArea1);
            }, 100);
        }
    });

    stopButton.addEventListener('click', function () {
        isClickSound1Playing = false;
        stopAllSounds();
    });

    function playSounds(audioElements) {
        audioElements.forEach(function (audioElement) {
            audioElement.currentTime = 0;
            audioElement.play().catch(function (error) {
                console.error('音声再生エラー:', error.message);
            });
        });
    }

    function playSound(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play().catch(function (error) {
            console.error('音声再生エラー:', error.message);
        });
    }

    function stopSound(audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
    }

    function stopLooping(audioElement) {
        audioElement.removeAttribute('loop');
    }

    function stopAllSounds() {
        document.querySelectorAll('audio').forEach(function (audioElement) {
            audioElement.pause();
            audioElement.currentTime = 0;
        });
    }

    function adjustSize(element) {
        element.style.width = '5%';
        element.style.height = '11%';
        element.style.transform = 'translate(10%, 15%)'; // 中央に移動
    }

    function resetSize(element) {
        element.style.width = '';
        element.style.height = '';
        element.style.transform = '';
    }
});
