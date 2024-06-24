/*---------- ハンバーガーメニュー ----------*/
const hamburger = document.querySelector(".js_hamburger");
const navigation = document.querySelector(".js_navigation");
const body = document.querySelector(".js_body");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    navigation.classList.toggle("is-active");
    body.classList.toggle("is-active");
});

const navLinks = document.querySelectorAll(".l_header-nav_list");
navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        hamburger.classList.remove("is-active");
        navigation.classList.remove("is-active");
        body.classList.remove("is-active");
    });
});

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
        { src: 'img/huusenn.jpg', task: '風船' },
        { src: 'img/danro.jpg', task: '暖炉' },
        { src: 'img/singouki.jpg', task: '信号機' },
        { src: 'img/torofi-.jpg', task: 'トロフィー' },
        { src: 'img/tenisubo-ru.jpg', task: 'テニスボール' },
        { src: 'img/yakyuubo-ru.jpg', task: '野球ボール' },
        { src: 'img/sinnbunnsi.jpg', task: '新聞紙' },
        { src: 'img/kitte.jpg', task: '切手' },
        { src: 'img/denntaku.jpg', task: '電卓' },
        { src: 'img/shoukaki.jpg', task: '消火器' },
        { src: 'img/hijouguti.jpg', task: '非常口' },
        { src: 'img/jaguti.jpg', task: '蛇口' },
        { src: 'img/mennbou.jpg', task: '綿棒' },
        { src: 'img/matti.jpg', task: 'マッチ' },
        { src: 'img/suponnji.jpg', task: 'スポンジ' },
        { src: 'img/mausu.jpg', task: 'マウス' },
        { src: 'img/bi-ru.jpg', task: 'ビール' },
        { src: 'img/koara.jpg', task: 'コアラ' },
        { src: 'img/sabaku.jpg', task: '砂漠' },
        { src: 'img/hyouzann.jpg', task: '氷山' },
        { src: 'img/hitode.jpg', task: 'ヒトデ' },
        { src: 'img/kaigara.jpg', task: '貝殻' },
        { src: 'img/bare-bo-ru.jpg', task: 'バレーボール' },
        { src: 'img/heddohonn.jpg', task: 'ヘッドホン' },
        { src: 'img/tenntoumusi.jpg', task: 'テントウムシ' },
        { src: 'img/tennto.jpg', task: 'テント' },
        { src: 'img/hikouki.jpg', task: '飛行機' },
        { src: 'img/herikoputa-.jpg', task: 'ヘリコプター' },
        { src: 'img/pannda.jpg', task: 'パンダ' },
        { src: 'img/roketto.jpg', task: 'ロケット' },
        { src: 'img/huusha.jpg', task: '風車' },
        { src: 'img/kame.jpg', task: '亀' },
        { src: 'img/shinnkannsenn.jpg', task: '新幹線' },
        { src: 'img/hinode.jpg', task: '日の出' },
        { src: 'img/chou.jpg', task: 'チョウ' },
        { src: 'img/pennginn.jpg', task: 'ペンギン' },
        { src: 'img/yotto.jpg', task: 'ヨット' },
        { src: 'img/hunnka.jpg', task: '噴火' },
        { src: 'img/kirinn.jpg', task: 'キリン' },
        { src: 'img/shimauma.jpg', task: 'シマウマ' },
        { src: 'img/yukidaruma.jpg', task: '雪だるま' },
        { src: 'img/sakka-bo-ru.jpg', task: 'サッカーボール' },
        { src: 'img/niji.jpg', task: '虹' },
        { src: 'img/aisukuri-mu.jpg', task: 'アイスクリーム' },
        { src: 'img/hannba-ga-.jpg', task: 'ハンバーガー' },
        { src: 'img/houchou.jpg', task: '包丁' },
        { src: 'img/hasami.jpg', task: 'ハサミ' },
        { src: 'img/taiya.jpg', task: 'タイヤ' },
        { src: 'img/ichou.jpg', task: 'イチョウ' },
        { src: 'img/momiji.jpg', task: '紅葉' },
        { src: 'img/sushi.jpg', task: '寿司' },
        { src: 'img/ra-menn.jpg', task: 'ラーメン' },
        { src: 'img/do-natu.jpg', task: 'ドーナツ' },
        { src: 'img/kinngyo.jpg', task: '金魚' },
    ];

    let correctIndex = -1;
    const numCols = 6;

    function preloadImages(images) {
        images.forEach(image => {
            const img = new Image();
            img.src = image.src;
        });
    }
    
    // すべての画像を事前に読み込む
    //preloadImages(imagesWithTasks);

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
        shuffleArray(allImages);
        let selectedImages = allImages.slice(0, 54);

        if (!allImages.find(image => image.task === imagesWithTasks[correctIndex].task)) {
            allImages[getRandomInt(allImages.length)].task = imagesWithTasks[correctIndex].task;
        }

        selectedImages.forEach((image, index) => {
            const container = document.createElement('div');
            container.classList.add('image-container');
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = `画像${index + 1}`;
            container.appendChild(img);
            imageGrid.appendChild(container);

            container.addEventListener('click', () => {
                const allContainers = document.querySelectorAll('.image-container');
                if (image.task === imagesWithTasks[correctIndex].task) {
                    showResultMessage('Correct!', true);
                } else {
                    showResultMessage('Incorrect!', false);
                    applyOverlay(container, 'incorrect');
                }
                applyOverlay(allContainers[correctIndex], 'correct'); // 正解の画像に半透明の緑色をオーバーレイ
                applyOverlayToNeighbors(allContainers[correctIndex], 'incorrect'); // 周囲の画像に半透明の赤色をオーバーレイ
                setTimeout(resetTask, 1000);
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

    function applyOverlay(container, className) {
        container.classList.add(className);
    }

    function applyOverlayToNeighbors(clickedContainer, className) {
        const allContainers = document.querySelectorAll('.image-container');
        const index = Array.from(allContainers).indexOf(clickedContainer);
        const numRows = Math.ceil(allContainers.length / numCols);

        const row = Math.floor(index / numCols);
        const col = index % numCols;

        // 周囲8マスのインデックスを計算
        const neighbors = [
            { row: row - 1, col: col - 1 },
            { row: row - 1, col },
            { row: row - 1, col: col + 1 },
            { row, col: col - 1 },
            { row, col: col + 1 },
            { row: row + 1, col: col - 1 },
            { row: row + 1, col },
            { row: row + 1, col: col + 1 }
        ];

        neighbors.forEach(neighbor => {
            const neighborIndex = neighbor.row * numCols + neighbor.col;
            if (neighbor.row >= 0 && neighbor.row < numRows &&
                neighbor.col >= 0 && neighbor.col < numCols &&
                neighborIndex !== index) {
                applyOverlay(allContainers[neighborIndex], className);
            }
        });
    }

    function resetOverlays() {
        const allContainers = document.querySelectorAll('.image-container');
        allContainers.forEach(container => {
            container.classList.remove('correct', 'incorrect');
        });
    }


    function resetTask() {
        correctIndex = getRandomInt(imagesWithTasks.length);
        taskTitle.innerHTML = `「<strong>${imagesWithTasks[correctIndex].task}</strong>」 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;を選んでください`;
        resultMessage.textContent = 'Checking..'; // 結果メッセージをリセット
        resultMessage.style.color = 'green'; // メッセージの色をデフォルトに戻す
        resetOverlays();
        loadImages();
    }

    resetButton.addEventListener('click', resetTask);
    resetTask();
});


