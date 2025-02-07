"use strict";

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

// ポップアップの要素
const popup = document.getElementById('popup');
let timemoving = true;
let abortProcessing = false;
let group = '';

document.addEventListener('DOMContentLoaded', () => {
    const taskTitle = document.getElementById('task-title');
    const imageGrid = document.getElementById('image-grid');
    const resultMessage = document.getElementById('result-message');
    const startMessage = document.getElementById('startMessage');
    const countdownElement = document.getElementById('countdown');

    const imagesWithTasks = [
        { src: 'newimg/☆果実類_ゆず_001_62mm_113g.png', task: 'asiatic citron' , group: 'オレンジ'},
        { src: 'newimg/☆種実類_ピーナッツ_001_61mm_15g.png', task: 'peanut' , group: 'ナッツ'},
        { src: 'newimg/☆野菜類_パプリカ_042_73mm_136g.png', task: 'orange bell pepper' , group: 'オレンジ'},
        { src: 'newimg/☆野菜類_葉ねぎ_001_409mm_98g.png', task: 'leaf leek' , group: 'ネギ' },
        { src: 'newimg/いも及びでん粉類_さつまいも_紅はるか_001_203mm_603g.png', task: 'sweet potato' , group: 'ぼっち' },
        { src: 'newimg/いも及びでん粉類＿ジャガイモ＿001＿79mm＿133g.png', task: 'potato' , group: 'イエロー' },
        { src: 'newimg/きのこ類_エノキ_77mm_100g.png', task: 'chinese juniper' , group: 'きのこ' },
        { src: 'newimg/きのこ類_エリンギ_001_63㎜_53g.png', task: 'king oyster mushroom' , group: 'きのこ' },
        { src: 'newimg/きのこ類_きくらげ_001_95mm_15g.png', task: 'wood ear mushroom' , group: 'きのこ' },
        { src: 'newimg/きのこ類_しいたけ_001_61mm_30g.png', task: 'shiitake mushroom' , group: 'きのこ' },
        { src: 'newimg/きのこ類_なめこ_007_143mm_105g.png', task: 'nameko mushroom' , group: 'きのこ' },
        { src: 'newimg/きのこ類_ぶなしめじ_003_35mm_7g.png', task: 'brown beech mushroom' , group: 'きのこ' },
        { src: 'newimg/きのこ類_ブラウンマッシュルーム_001_37mm_14g.png', task: 'mushroom' , group: 'きのこ' },
        { src: 'newimg/きのこ類_まいたけ_005_59mm_33g.png', task: 'maitake mushroom' , group: 'きのこ' },
        { src: 'newimg/果実類_アボカド001_83mm_169g.png', task: 'avocado' , group: 'ぼっち' },
        { src: 'newimg/果実類_アメリカンチェリー_009_62mm_18g.png', task: 'cherry' , group: 'ぼっち' },
        { src: 'newimg/果実類_あんず_001_41mm_50g.png', task: 'Apricot' , group: 'オレンジ' },
        { src: 'newimg/果実類_イチゴ007_38mm_23g.png', task: 'strawberry' , group: '赤' },
        { src: 'newimg/果実類_イチジク_001_57mm_80g.png', task: 'fig' , group: 'ぼっち' },
        { src: 'newimg/果実類_うめ_001_44mm_36g.png', task: 'ume plum' , group: 'グリーン' },
        { src: 'newimg/果実類_グリーンキウイ_001_78mm_131g.png', task: 'kiwi' , group: '茶色' },
        { src: 'newimg/果実類_グレ-プフル-ツ_001_97mm_382g.png', task: 'grapefruit' , group: 'オレンジ' },
        { src: 'newimg/果実類_ざくろ_001_96mm_315g.png', task: 'pomegranate' , group: 'ぼっち' },
        { src: 'newimg/果実類_スイカ_001_301mm_？g.png', task: 'watermelon' , group: 'ぼっち' },
        { src: 'newimg/果実類_すだち_003_32mm_18g.png', task: 'citrus sudachi' , group: 'グリーン' },
        { src: 'newimg/果実類_デコポン_001_95mm_325g-2.png', task: 'sumo citrus' , group: 'オレンジ' },
        { src: 'newimg/果実類_ドラゴンフル-ツ_001_112mm_348g.png', task: 'dragon fruit' , group: 'ぼっち' },
        { src: 'newimg/果実類_なし_001_97mm_403g.png', task: 'asian pear' , group: 'なし' },
        { src: 'newimg/果実類_にほんすもも【プラム】_001_59mm_83g.png', task: 'plum' , group: '赤' },
        { src: 'newimg/果実類_バナナ_001_187mm_588g.png', task: 'banana' , group: 'イエロー' },
        { src: 'newimg/果実類_びわ_001_57mm_43g.png', task: 'lowuat' , group: 'オレンジ' },
        { src: 'newimg/果実類_ブドウナガノパープル_005_135mm_548g.png', task: 'grape' , group: '黒' },
        { src: 'newimg/果実類_ブルーベリー_001_87mm_50g.png', task: 'blueberry' , group: '黒' },
        { src: 'newimg/果実類_マスカット_001_121mm_514g.png', task: 'muscat' , group: 'グリーン' },
        { src: 'newimg/果実類_マンゴー_002_112mm_416g.png', task: 'mango' , group: '黒' },
        { src: 'newimg/果実類_みかん_001_56mm_67g.png', task: 'mandarin orange' , group: 'オレンジ' },
        { src: 'newimg/果実類_メロン_003_128mm_1094g.png', task: 'melon' , group: 'ぼっち' },
        { src: 'newimg/果実類_ライチ_001_38mm_26g.png', task: 'lychee' , group: '黒' },
        { src: 'newimg/果実類_ラズベリー_007_76mm_50g.png', task: 'raspberry' , group: '赤' },
        { src: 'newimg/果実類_りんご_001_94mm_263g.png', task: 'apple' , group: '赤' },
        { src: 'newimg/果実類_レモン_002_91mm_166g.png', task: 'lemon' , group: 'イエロー' },
        { src: 'newimg/果実類_柿_002_86mm_292g.png', task: 'persimmon' , group: 'ぼっち' },
        { src: 'newimg/果実類_西洋なし【洋なし】_001_78mm_400g.png', task: 'pear' , group: 'なし' },
        { src: 'newimg/果実類_青りんご_001_96mm_307g.png', task: 'green apple' , group: 'なし' },
        { src: 'newimg/穀類_とうもろこし_003_183mm_289g.png', task: 'corn' , group: 'イエロー' },
        { src: 'newimg/種実類_ア-モンド_002_48mm_10g.png', task: 'almond' , group: 'ナッツ' },
        { src: 'newimg/種実類_カシュ-ナッツ_002_46mm_10g.png', task: 'cashew nuts' , group: 'ナッツ' },
        { src: 'newimg/種実類_くるみ_001_62mm_10g.png', task: 'walnut' , group: 'ナッツ' },
        { src: 'newimg/豆類_だいず_004_82mm_40g.png', task: 'soy' , group: 'ナッツ' },
        { src: 'newimg/野菜類_いんげんまめ_001_130mm_4g.png', task: 'kidney beans' , group: '豆' },
        { src: 'newimg/野菜類_えだまめ_003_55mm_4g.png', task: 'green soybeans' , group: '豆' },
        { src: 'newimg/野菜類_かぶ_002_100mm_105g.png', task: 'turnip' , group: '白' },
        { src: 'newimg/野菜類_かぼちゃ_016_96mm_255g.png', task: 'squash' , group: '黒' },
        { src: 'newimg/野菜類_カリフラワー_002_136mm_418g.png', task: 'cauliflower' , group: '白' },
        { src: 'newimg/野菜類_キャベツ_001_252mm_1636g.png', task: 'cabbage' , group: 'みどり' },
        { src: 'newimg/野菜類_きゅうり_001_217mm_132g.png', task: 'cucumber' , group: 'みどり' },
        { src: 'newimg/野菜類_グリンピース_003_43mm_10g.png', task: 'green peas' , group: '豆' },
        { src: 'newimg/野菜類_ゴーヤ_001_276mm_264g.png', task: 'bitter gourd' , group: 'ネギ' },
        { src: 'newimg/野菜類_サニーレタス_006_101mm_50g.png', task: 'red leaf lettuce' , group: 'みどり' },
        { src: 'newimg/野菜類_さやえんどう_-001_76mm_2g.png', task: 'field peas'  , group: '豆'},
        { src: 'newimg/野菜類_ししとう_001_109mm_1g.png', task: 'sweet green pepper' , group: 'ネギ' },
        { src: 'newimg/野菜類_しゅんぎく_001_306mm_111g-1.png', task: 'crown daisy' , group: '葉物' },
        { src: 'newimg/野菜類_そら豆_001_178mm_54g.png', task: 'broad bean' , group: '豆' },
        { src: 'newimg/野菜類_だいこん_001_425mm_1129g.png', task: 'daikon raddish' , group: '白' },
        { src: 'newimg/野菜類_タマネギ_001_95㎜_348g.png', task: 'onion' , group: '茶色' },
        { src: 'newimg/野菜類_タマネギ_030_82㎜_248g.png', task: 'red onion' , group: '赤' },
        { src: 'newimg/野菜類_チンゲンサイ_001_230mm_122g-1.png', task: 'bok choy' , group: '葉物' },
        { src: 'newimg/野菜類_とうがらし_001_44mm_0.5g.png', task: 'chili pepper' , group: '赤' },
        { src: 'newimg/野菜類_トマト007_66mm_146g.png', task: 'tomato' , group: '赤' },
        { src: 'newimg/野菜類_なす_008_42mm_37g.png', task: 'eggplant' , group: '紫' },
        { src: 'newimg/野菜類_なす_036_61mm_148g.png', task: 'long eggplant' , group: '紫' },
        { src: 'newimg/野菜類_ニラ_002_417mm_50g.png', task: 'chives' , group: 'ネギ' },
        { src: 'newimg/野菜類_ニンジン_001_198mm_218g.png', task: 'carrot' , group: 'ぼっち' },
        { src: 'newimg/野菜類_ニンニク_001_65mm_76g.png', task: 'garlic' , group: '白' },
        { src: 'newimg/野菜類_はくさい_001_311mm_2860g.png', task: 'chinese cabbage' , group: '葉物' },
        { src: 'newimg/野菜類_はつかだいこん_003_28mm_11g.png', task: 'raddish' , group: '赤' },
        { src: 'newimg/野菜類_パプリカ_001_113mm_194g.png', task: 'red bell pepper' , group: '赤' },
        { src: 'newimg/野菜類_パプリカ_026_83mm_182g.png', task: 'yellow bell pepper' , group: 'イエロー' },
        { src: 'newimg/野菜類_ピーマン_1_54mm_25g.png', task: 'green pepper' , group: 'グリーン' },
        { src: 'newimg/野菜類_ブロッコリー_001_119mm_243g.png', task: 'broccoli' , group: 'グリーン' },
        { src: 'newimg/野菜類_ほうれんそう_004_280mm_194g.png', task: 'spinach' , group: '葉物' },
        { src: 'newimg/野菜類_みずな_001_493mm_107g.png', task: 'potherb mustard' , group: '葉物' },
        { src: 'newimg/野菜類_ミニトマト_014_58mm_16g.png', task: 'cherry tomato' , group: '赤' },
        { src: 'newimg/野菜類_もも_001_83mm_356g.png', task: 'peach' , group: '赤' },
        { src: 'newimg/野菜類_レタス_001_172mm_396g.png', task: 'lettuce' , group: 'みどり' },
        { src: 'newimg/野菜類_根深ねぎ_003_599mm_110g.png', task: 'japanese leak' , group: 'ネギ' },
        { src: 'newimg/野菜類_小ねぎ_001_318mm_116g.png', task: 'green spring onion' , group: 'ネギ' },
        { src: 'newimg/野菜類_小松菜_001_224mm_50g.png', task: 'mustard spinach' , group: '葉物' },
        { src: 'newimg/野菜類しょうが_001_75mm_48g.png', task: 'ginger' , group: 'ぼっち' }
    ];

    let correctIndex = -1;
    const numCols = 5;
    let allImages = [...imagesWithTasks];
    shuffleArray(allImages);
    let selectedImages = allImages.slice(0, 30);
    let timeoutId = null;
    let countdownInterval = null;
    let countdown = 2.0;

    function preloadImages(images) {
        images.forEach(image => {
            const img = new Image();
            img.src = image.src;
        });
    }

    // 背景をクリックしたらポップアップを閉じる
    popup.addEventListener('click', () => {
        popup.style.display = 'none';
        document.getElementById("overlay").style.display = "none";
        abortProcessing = false;
        startCountdown(countdown);
        timeoutId = setTimeout(resetTask, countdown * 1000 + 1200);
    });

    
    
    function receiveMessageFromSwift(data) {
        if (data === '1') {
            abortProcessing = true;
            alert("処理が中断されました！"); // ポップアップを表示
        }
    }
    // すべての画像を事前に読み込む
    preloadImages(imagesWithTasks);

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function startCountdown(seconds) {
        const allContainers = document.querySelectorAll('.image-container');
        countdown = seconds; // 秒数を保持する変数
        countdownElement.textContent = countdown.toFixed(1); // 初期値を表示

        if (timemoving) {
            countdownInterval = setInterval(() => {
                countdown -= 0.1; // 0.1秒ずつ減らす
                
                if (countdown > 0) {
                    countdownElement.textContent = countdown.toFixed(1); // 小数点第1位まで表示
                } else {
                    clearInterval(countdownInterval); // カウントダウンが0以下になったらタイマーを停止
                    countdownElement.textContent = "0.0"; // 最終的に0.0と表示
                    applyOverlay(allContainers[correctIndex], 'correct'); // 正解の画像にオーバーレイを適用
                    applyOverlayToNeighbors(allContainers[correctIndex], 'incorrect'); // 周囲の画像にオーバーレイを適用
                    timeoutId = setTimeout(resetTask, 1500);
                }
            }, 90); // 100ミリ秒ごとに更新
        }
    }


    function sendMessageToSwift(message) {
        if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.jsToSwift) {
            window.webkit.messageHandlers.jsToSwift.postMessage(message);
        } else {
            console.error("Swiftのメッセージハンドラーが見つかりません");
        }
    }

    function loadImages() {
        imageGrid.innerHTML = '';

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
                group = image.group;
                console.log(group);
                clearTimeout(timeoutId);
                clearInterval(countdownInterval);
                const allContainers = document.querySelectorAll('.image-container');
                if (image.task === selectedImages[correctIndex].task) {
                    showResultMessage('Correct!', true);
                    sendMessageToSwift("Correct")
                    applyOverlay(container, 'selectedcorrect');
                } else {
                    setTimeout(() => {
                        if(abortProcessing) {
                            alert("処理が中断されました！");
                            return;
                        }
                    }, 300);
                    popup.style.display = 'flex';  // ポップアップを表示
                    document.getElementById("overlay").style.display = "flex";
                    timemoving = false;
                    clearTimeout(timeoutId);
                    clearInterval(countdownInterval);
                    setpopup(image, image.group, index)
                    return;
                    showResultMessage('Incorrect!', false);
                    sendMessageToSwift("Incorrect")
                    applyOverlay(container, 'selectedincorrect');
                }
                applyOverlay(allContainers[correctIndex], 'correct'); // 正解の画像に半透明の緑色をオーバーレイ
                applyOverlayToNeighbors(allContainers[correctIndex], 'incorrect'); // 周囲の画像に半透明の赤色をオーバーレイ
                timeoutId = setTimeout(resetTask, 1500);
                clearInterval(countdownInterval);

            });
        });;
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
        timemoving = true;
        countdownElement.textContent = "2.0";
        clearTimeout(timeoutId);
        clearInterval(countdownInterval);

        shuffleArray(allImages);
        selectedImages = allImages.slice(0, 30);

        correctIndex = getRandomInt(selectedImages.length);
        taskTitle.innerHTML = `Tap <br>「<strong>${selectedImages[correctIndex].task}</strong>」`;
        resultMessage.textContent = 'Checking..'; // 結果メッセージをリセット
        resultMessage.style.color = 'green'; // メッセージの色をデフォルトに戻す
        
        resetOverlays();
        startMessage.style.display = 'block';
        resetimg();

        startMessage.addEventListener('click', () => {
            startMessage.style.display = 'none';
            loadImages();
            clearInterval(countdownInterval);
            startCountdown(2.0);
        });   
    }

    function resetimg() {
        imageGrid.innerHTML = '';
    }

    const imageGrid2 = document.getElementById('image-grid2');

    function setpopup(image, group, index) {
        // **オーバーレイ（背景）クリック時にも「戻る」と同じ処理を実行**
        document.getElementById("overlay").addEventListener("click", () => {
            document.getElementById("popup").style.display = "none";
            document.getElementById("overlay").style.display = "none";
            abortProcessing = false;
            clearTimeout(timeoutId);
            clearInterval(countdownInterval);
            const allContainers = document.querySelectorAll('.image-container');
            if (image.task === selectedImages[correctIndex].task) {
                showResultMessage('Correct!', true);
                sendMessageToSwift("Correct")
            } else {
                showResultMessage('Incorrect!', false);
                sendMessageToSwift("Incorrect")
            }
            applyOverlay(allContainers[correctIndex], 'correct'); // 正解の画像に半透明の緑色をオーバーレイ
            applyOverlayToNeighbors(allContainers[correctIndex], 'incorrect'); // 周囲の画像に半透明の赤色をオーバーレイ
            timeoutId = setTimeout(resetTask, 1500);
            clearInterval(countdownInterval);
        });
        imageGrid2.innerHTML = '';
        let groupedImages;
    
        if (group === 'ぼっち') {
            groupedImages = [];
            const cols = 5; // 横5列
            const rows = 6; // 縦6行
            const totalItems = cols * rows; // グリッド内の総アイテム数
    
            // 上下左右のインデックスを計算
            const upIndex = index - cols;   // 上（1つ上の行）
            const downIndex = index + cols; // 下（1つ下の行）
            const leftIndex = index - 1;    // 左（1つ前の列）
            const rightIndex = index + 1;   // 右（1つ後の列）
    
            // 上の要素（行が0より大きければ存在）
            if (upIndex >= 0) groupedImages.push(imagesWithTasks[upIndex]);
    
            // 下の要素（最大インデックス未満なら存在）
            if (downIndex < totalItems) groupedImages.push(imagesWithTasks[downIndex]);
    
            // 左の要素（左端でなければ存在）
            if (index % cols !== 0) groupedImages.push(imagesWithTasks[leftIndex]);
    
            // 右の要素（右端でなければ存在）
            if (index % cols !== cols - 1 && rightIndex < totalItems) {
                groupedImages.push(imagesWithTasks[rightIndex]);
            }
            groupedImages.forEach((image, index) => {
                const container = document.createElement('div');
                container.classList.add('image-container2');
                const img = document.createElement('img');
                img.src = image.src;
                img.alt = `画像${index + 1}`;
                container.appendChild(img);
                imageGrid2.appendChild(container);
                
                container.addEventListener('click', () => {
                    clearTimeout(timeoutId);
                    clearInterval(countdownInterval);
                    const allContainers = document.querySelectorAll('.image-container');
                    if (image.task === selectedImages[correctIndex].task) {
                        showResultMessage('Correct!', true);
                        sendMessageToSwift("Correct")
                    } else {
                        showResultMessage('Incorrect!', false);
                        sendMessageToSwift("Incorrect")
                        applyOverlay(container, 'selectedincorrect');
                    }
                    applyOverlay(allContainers[correctIndex], 'correct'); // 正解の画像に半透明の緑色をオーバーレイ
                    applyOverlayToNeighbors(allContainers[correctIndex], 'incorrect'); // 周囲の画像に半透明の赤色をオーバーレイ
                    timeoutId = setTimeout(resetTask, 1500);
                    clearInterval(countdownInterval);
                });
            });;
        } else {
            // 同じグループの画像を取得
            groupedImages = imagesWithTasks.filter(image => image.group === group);
            let commonImages = groupedImages.filter(image =>
                selectedImages.some(selected => selected.src === image.src)
            );
            commonImages.forEach((image, index) => {
                const container = document.createElement('div');
                container.classList.add('image-container2');
                const img = document.createElement('img');
                img.src = image.src;
                img.alt = `画像${index + 1}`;
                container.appendChild(img);
                imageGrid2.appendChild(container);
                
                container.addEventListener('click', () => {
                    clearTimeout(timeoutId);
                    clearInterval(countdownInterval);
                    const allContainers = document.querySelectorAll('.image-container');
                    if (image.task === selectedImages[correctIndex].task) {
                        showResultMessage('Correct!', true);
                        sendMessageToSwift("Correct")
                    } else {
                        showResultMessage('Incorrect!', false);
                        sendMessageToSwift("Incorrect")
                    }
                    applyOverlay(allContainers[correctIndex], 'correct'); // 正解の画像に半透明の緑色をオーバーレイ
                    applyOverlayToNeighbors(allContainers[correctIndex], 'incorrect'); // 周囲の画像に半透明の赤色をオーバーレイ
                    timeoutId = setTimeout(resetTask, 1500);
                    clearInterval(countdownInterval);
                });
            });;
        }
    }
    

    startMessage.style.display = 'block';
    resetTask();
});


