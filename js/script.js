
document.addEventListener('DOMContentLoaded', () => {
    const taskTitle = document.getElementById('task-title');
    const imageGrid = document.getElementById('image-grid');
    const resultMessage = document.getElementById('result-message');
    const resetButton = document.getElementById('reset-button');

    const imagesWithTasks = [
        { src: 'img/aironn.jpg', task: 'アイロン' },
        { src: 'img/ajisai.jpg', task: '紫陽花' },
        { src: 'img/aozora.jpg', task: '青空' },
        { src: 'img/basukettobo-ru.jpg', task: 'バスケットボール' },
        { src: 'img/bouenkyou.jpg', task: '望遠鏡' },
        { src: 'img/chesu.jpg', task: 'チェス' },
        { src: 'img/chu-rippu.jpg', task: 'チューリップ' },
        { src: 'img/dennkyuu.jpg', task: '電球' },
        { src: 'img/doro-nn.jpg', task: 'ドローン' },
        { src: 'img/enpitsu.jpg', task: '鉛筆' },
        { src: 'img/gita-.jpg', task: 'ギター' },
        { src: 'img/hanabi.jpg', task: '花火' },
        { src: 'img/himawari.jpg', task: '向日葵' },
        { src: 'img/hon.jpg', task: '本' },
        { src: 'img/houijisinn.jpg', task: '方位磁針' },
        { src: 'img/hujisann.jpg', task: '富士山' },
        { src: 'img/inu.jpg', task: '犬' },
        { src: 'img/isu.jpg', task: '椅子' },
        { src: 'img/itigo.jpg', task: 'イチゴ' },
        { src: 'img/jitennsha.jpg', task: '自転車' },
        { src: 'img/kamera.jpg', task: 'カメラ' },
        { src: 'img/kani.jpg', task: 'カニ' },
        { src: 'img/kasa.jpg', task: '傘' },
        { src: 'img/kennbann.jpg', task: '鍵盤' },
        { src: 'img/kenbikyou.jpg', task: '顕微鏡' },
        { src: 'img/kurage.jpg', task: 'クラゲ' },
        { src: 'img/kuruma.jpg', task: '車' },
        { src: 'img/kusshonn.jpg', task: 'クッション' },
        { src: 'img/magukappu.jpg', task: 'マグカップ' },
        { src: 'img/mikann.jpg', task: 'みかん' },
        { src: 'img/musimegane.jpg', task: '虫眼鏡' },
        { src: 'img/neko.jpg', task: '猫' },
        { src: 'img/pasokonn.jpg', task: 'パソコン' },
        { src: 'img/pazuru.jpg', task: 'ジグソーパズル' },
        { src: 'img/pen.jpg', task: '万年筆' },
        { src: 'img/rinngo.jpg', task: 'リンゴ' },
        { src: 'img/ru-bikku.jpg', task: 'ルービックキューブ' },
        { src: 'img/ryukkusakku.jpg', task: 'リュックサック' },
        { src: 'img/sabotenn.jpg', task: 'サボテン' },
        { src: 'img/sakura.jpg', task: '桜' },
        { src: 'img/sakurannbo.jpg', task: 'さくらんぼ' },
        { src: 'img/simaenaga.jpg', task: 'シマエナガ' },
        { src: 'img/suika.jpg', task: 'スイカ' },
        { src: 'img/suke-tobo-do.jpg', task: 'スケートボード' },
        { src: 'img/sumaho.jpg', task: 'スマートフォン' },
        { src: 'img/taki.jpg', task: '滝' },
        { src: 'img/tamago.jpg', task: '卵' },
        { src: 'img/tenisuraketto.jpg', task: 'テニスラケット' },
        { src: 'img/tikyuu.jpg', task: '地球' },
        { src: 'img/torii.jpg', task: '鳥居' },
        { src: 'img/toukyoutawa-.jpg', task: '東京タワー' },
        { src: 'img/tuki.jpg', task: '月' },
        { src: 'img/udedokei.jpg', task: '腕時計' },
        { src: 'img/umi.jpg', task: '海' },
    ];

    let correctIndex = -1;

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function loadImages() {
        imageGrid.innerHTML = '';
        let allImages = [...imagesWithTasks];
        //shuffleArray(allImages);

        if (!allImages.find(image => image.task === imagesWithTasks[correctIndex].task)) {
            allImages[getRandomInt(allImages.length)].task = imagesWithTasks[correctIndex].task;
        }

        allImages.forEach((image, index) => {
            const container = document.createElement('div');
            container.classList.add('image-container');
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = `画像${index + 1}`;
            container.appendChild(img);
            imageGrid.appendChild(container);

            container.addEventListener('click', () => {
                if (image.task === imagesWithTasks[correctIndex].task) {
                    showResultMessage('Correct!', true);
                    applyOverlay(img, 'rgba(0, 255, 0, 1)'); // 正解の画像に半透明の緑色をオーバーレイ
                    applyOverlayToNeighbors(container, 'rgba(255, 0, 0, 1)'); // 周囲の画像に半透明の赤色をオーバーレイ
                } else {
                    showResultMessage('Incorrect!', false);
                }
                setTimeout(async function() {
                    resetTask();
                }, 1000);
            });
        });
    }

    function showResultMessage(message, isCorrect) {
        resultMessage.textContent = message;
        if (isCorrect) {
            resultMessage.style.color = 'green'; // 正解の場合の色
        } else {
            resultMessage.style.color = 'red'; // 不正解の場合の色
        }
    }

    function applyOverlay(imageElement, color) {
        imageElement.style.backgroundColor = color;
    }

    function applyOverlayToNeighbors(clickedimg, color) {
        const allContainers = document.querySelectorAll('.image-container');
        allContainers.forEach(container => {
            const img = container.querySelector('img');
            if (img !== clickedimg) {
                applyOverlay(img, color); // 周囲の画像に半透明の色をオーバーレイ
            }
        });
    }

    function resetOverlays() {
        const allImages = document.querySelectorAll('.image-container img');
        allImages.forEach(img => {
            img.style.backgroundColor = 'transparent';
        });
    }


    function resetTask() {
        correctIndex = getRandomInt(imagesWithTasks.length);
        taskTitle.innerHTML = `<strong>${imagesWithTasks[correctIndex].task}</strong> を選んでください`;
        resultMessage.textContent = 'Checking...'; // 結果メッセージをリセット
        resultMessage.style.color = 'green'; // メッセージの色をデフォルトに戻す
        resetOverlays();
        loadImages();
    }

    function preloadImages(images) {
        images.forEach(image => {
            const img = new Image();
            img.src = image.src;
        });
    }
    
    // すべての画像を事前に読み込む
    preloadImages(imagesWithTasks);

    resetButton.addEventListener('click', resetTask);

    resetTask();
});


