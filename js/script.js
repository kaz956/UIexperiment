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

document.addEventListener('DOMContentLoaded', () => {
    const taskTitle = document.getElementById('task-title');
    const imageGrid = document.getElementById('image-grid');
    const resultMessage = document.getElementById('result-message');
    const startButton = document.getElementById('start-button');
    const stopButton = document.getElementById('stop-button');
    const countdownElement = document.getElementById('countdown');

    const imagesWithTasks = [
        // { src: 'img/aironn.jpg', task: 'アイロン' },
        // { src: 'img/ajisai.jpg', task: '紫陽花' },
        // { src: 'img/aozora.jpg', task: '青空' },
        // { src: 'img/basukettobo-ru.jpg', task: 'バスケットボール' },
        // { src: 'img/bouenkyou.jpg', task: '望遠鏡' },
        // { src: 'img/chesu.jpg', task: 'チェス' },
        // { src: 'img/chu-rippu.jpg', task: 'チューリップ' },
        // { src: 'img/dennkyuu.jpg', task: '電球' },
        // { src: 'img/doro-nn.jpg', task: 'ドローン' },
        // { src: 'img/enpitsu.jpg', task: '鉛筆' },
        // { src: 'img/gita-.jpg', task: 'ギター' },
        // { src: 'img/hanabi.jpg', task: '花火' },
        // { src: 'img/himawari.jpg', task: '向日葵' },
        // { src: 'img/hon.jpg', task: '本' },
        // { src: 'img/houijisinn.jpg', task: '方位磁針' },
        // { src: 'img/hujisann.jpg', task: '富士山' },
        // { src: 'img/inu.jpg', task: '犬' },
        // { src: 'img/isu.jpg', task: '椅子' },
        // { src: 'img/itigo.jpg', task: 'イチゴ' },
        // { src: 'img/jitennsha.jpg', task: '自転車' },
        // { src: 'img/kamera.jpg', task: 'カメラ' },
        // { src: 'img/kani.jpg', task: 'カニ' },
        // { src: 'img/kasa.jpg', task: '傘' },
        // { src: 'img/kennbann.jpg', task: '鍵盤' },
        // { src: 'img/kenbikyou.jpg', task: '顕微鏡' },
        // { src: 'img/kurage.jpg', task: 'クラゲ' },
        // { src: 'img/kuruma.jpg', task: '車' },
        // { src: 'img/kusshonn.jpg', task: 'クッション' },
        // { src: 'img/magukappu.jpg', task: 'マグカップ' },
        // { src: 'img/mikann.jpg', task: 'みかん' },
        // { src: 'img/musimegane.jpg', task: '虫眼鏡' },
        // { src: 'img/neko.jpg', task: '猫' },
        // { src: 'img/pasokonn.jpg', task: 'パソコン' },
        // { src: 'img/pazuru.jpg', task: 'ジグソーパズル' },
        // { src: 'img/pen.jpg', task: '万年筆' },
        // { src: 'img/rinngo.jpg', task: 'リンゴ' },
        // { src: 'img/ru-bikku.jpg', task: 'ルービックキューブ' },
        // { src: 'img/ryukkusakku.jpg', task: 'リュックサック' },
        // { src: 'img/sabotenn.jpg', task: 'サボテン' },
        // { src: 'img/sakura.jpg', task: '桜' },
        // { src: 'img/sakurannbo.jpg', task: 'さくらんぼ' },
        // { src: 'img/simaenaga.jpg', task: 'シマエナガ' },
        // { src: 'img/suika.jpg', task: 'スイカ' },
        // { src: 'img/suke-tobo-do.jpg', task: 'スケートボード' },
        // { src: 'img/sumaho.jpg', task: 'スマートフォン' },
        // { src: 'img/taki.jpg', task: '滝' },
        // { src: 'img/tamago.jpg', task: '卵' },
        // { src: 'img/tenisuraketto.jpg', task: 'テニスラケット' },
        // { src: 'img/tikyuu.jpg', task: '地球' },
        // { src: 'img/torii.jpg', task: '鳥居' },
        // { src: 'img/toukyoutawa-.jpg', task: '東京タワー' },
        // { src: 'img/tuki.jpg', task: '月' },
        // { src: 'img/udedokei.jpg', task: '腕時計' },
        // { src: 'img/umi.jpg', task: '海' },
        // { src: 'img/huusenn.jpg', task: '風船' },
        // { src: 'img/danro.jpg', task: '暖炉' },
        // { src: 'img/singouki.jpg', task: '信号機' },
        // { src: 'img/torofi-.jpg', task: 'トロフィー' },
        // { src: 'img/tenisubo-ru.jpg', task: 'テニスボール' },
        // { src: 'img/yakyuubo-ru.jpg', task: '野球ボール' },
        // { src: 'img/sinnbunnsi.jpg', task: '新聞紙' },
        // { src: 'img/kitte.jpg', task: '切手' },
        // { src: 'img/denntaku.jpg', task: '電卓' },
        // { src: 'img/shoukaki.jpg', task: '消火器' },
        // { src: 'img/hijouguti.jpg', task: '非常口' },
        // { src: 'img/jaguti.jpg', task: '蛇口' },
        // { src: 'img/mennbou.jpg', task: '綿棒' },
        // { src: 'img/matti.jpg', task: 'マッチ' },
        // { src: 'img/suponnji.jpg', task: 'スポンジ' },
        // { src: 'img/mausu.jpg', task: 'マウス' },
        // { src: 'img/bi-ru.jpg', task: 'ビール' },
        // { src: 'img/koara.jpg', task: 'コアラ' },
        // { src: 'img/sabaku.jpg', task: '砂漠' },
        // { src: 'img/hyouzann.jpg', task: '氷山' },
        // { src: 'img/hitode.jpg', task: 'ヒトデ' },
        // { src: 'img/kaigara.jpg', task: '貝殻' },
        // { src: 'img/bare-bo-ru.jpg', task: 'バレーボール' },
        // { src: 'img/heddohonn.jpg', task: 'ヘッドホン' },
        // { src: 'img/tenntoumusi.jpg', task: 'テントウムシ' },
        // { src: 'img/tennto.jpg', task: 'テント' },
        // { src: 'img/hikouki.jpg', task: '飛行機' },
        // { src: 'img/herikoputa-.jpg', task: 'ヘリコプター' },
        // { src: 'img/pannda.jpg', task: 'パンダ' },
        // { src: 'img/roketto.jpg', task: 'ロケット' },
        // { src: 'img/huusha.jpg', task: '風車' },
        // { src: 'img/kame.jpg', task: '亀' },
        // { src: 'img/shinnkannsenn.jpg', task: '新幹線' },
        // { src: 'img/hinode.jpg', task: '日の出' },
        // { src: 'img/chou.jpg', task: 'チョウ' },
        // { src: 'img/pennginn.jpg', task: 'ペンギン' },
        // { src: 'img/yotto.jpg', task: 'ヨット' },
        // { src: 'img/hunnka.jpg', task: '噴火' },
        // { src: 'img/kirinn.jpg', task: 'キリン' },
        // { src: 'img/shimauma.jpg', task: 'シマウマ' },
        // { src: 'img/yukidaruma.jpg', task: '雪だるま' },
        // { src: 'img/sakka-bo-ru.jpg', task: 'サッカーボール' },
        // { src: 'img/niji.jpg', task: '虹' },
        // { src: 'img/aisukuri-mu.jpg', task: 'アイスクリーム' },
        // { src: 'img/hannba-ga-.jpg', task: 'ハンバーガー' },
        // { src: 'img/houchou.jpg', task: '包丁' },
        // { src: 'img/hasami.jpg', task: 'ハサミ' },
        // { src: 'img/taiya.jpg', task: 'タイヤ' },
        // { src: 'img/ichou.jpg', task: 'イチョウ' },
        // { src: 'img/momiji.jpg', task: '紅葉' },
        // { src: 'img/sushi.jpg', task: '寿司' },
        // { src: 'img/ra-menn.jpg', task: 'ラーメン' },
        // { src: 'img/do-natu.jpg', task: 'ドーナツ' },
        // { src: 'img/kinngyo.jpg', task: '金魚' },
        { src: 'newimg/☆果実類_ゆず_001_62mm_113g.png', task: 'ゆず' },
        { src: 'newimg/☆種実類_ピーナッツ_001_61mm_15g.png', task: 'ピーナッツ' },
        { src: 'newimg/☆野菜類_パプリカ_042_73mm_136g.png', task: 'オレンジパプリカ' },
        { src: 'newimg/☆野菜類_葉ねぎ_001_409mm_98g.png', task: '葉ネギ' },
        { src: 'newimg/いも及びでん粉類_さつまいも_紅はるか_001_203mm_603g.png', task: 'さつまいも' },
        { src: 'newimg/いも及びでん粉類＿ジャガイモ＿001＿79mm＿133g.png', task: 'じゃがいも' },
        { src: 'newimg/きのこ類_エノキ_77mm_100g.png', task: 'エノキ' },
        { src: 'newimg/きのこ類_エリンギ_001_63㎜_53g.png', task: 'エリンギ' },
        { src: 'newimg/きのこ類_きくらげ_001_95mm_15g.png', task: 'きくらげ' },
        { src: 'newimg/きのこ類_しいたけ_001_61mm_30g.png', task: 'しいたけ' },
        { src: 'newimg/きのこ類_なめこ_007_143mm_105g.png', task: 'なめこ' },
        { src: 'newimg/きのこ類_ぶなしめじ_003_35mm_7g.png', task: 'ぶなしめじ' },
        { src: 'newimg/きのこ類_ブラウンマッシュルーム_001_37mm_14g.png', task: 'マッシュルーム' },
        { src: 'newimg/きのこ類_まいたけ_005_59mm_33g.png', task: 'まいたけ' },
        { src: 'newimg/果実類_アボカド001_83mm_169g.png', task: 'アボカド' },
        { src: 'newimg/果実類_アメリカンチェリー_009_62mm_18g.png', task: 'サクランボ' },
        { src: 'newimg/果実類_あんず_001_41mm_50g.png', task: 'あんず' },
        { src: 'newimg/果実類_イチゴ007_38mm_23g.png', task: 'イチゴ' },
        { src: 'newimg/果実類_イチジク_001_57mm_80g.png', task: 'イチジク' },
        { src: 'newimg/果実類_うめ_001_44mm_36g.png', task: 'うめ' },
        { src: 'newimg/果実類_グリーンキウイ_001_78mm_131g.png', task: 'キウイ' },
        { src: 'newimg/果実類_グレ-プフル-ツ_001_97mm_382g.png', task: 'グレープフルーツ' },
        { src: 'newimg/果実類_ざくろ_001_96mm_315g.png', task: 'ざくろ' },
        { src: 'newimg/果実類_スイカ_001_301mm_？g.png', task: 'スイカ' },
        { src: 'newimg/果実類_すだち_003_32mm_18g.png', task: 'すだち' },
        { src: 'newimg/果実類_デコポン_001_95mm_325g-2.png', task: 'デコポン' },
        { src: 'newimg/果実類_ドラゴンフル-ツ_001_112mm_348g.png', task: 'ドラゴンフルーツ' },
        { src: 'newimg/果実類_なし_001_97mm_403g.png', task: '和なし' },
        { src: 'newimg/果実類_にほんすもも【プラム】_001_59mm_83g.png', task: 'プラム' },
        { src: 'newimg/果実類_バナナ_001_187mm_588g.png', task: 'バナナ' },
        { src: 'newimg/果実類_びわ_001_57mm_43g.png', task: 'びわ' },
        { src: 'newimg/果実類_ブドウナガノパープル_005_135mm_548g.png', task: 'ブドウ' },
        { src: 'newimg/果実類_ブルーベリー_001_87mm_50g.png', task: 'ブルーベリー' },
        { src: 'newimg/果実類_マスカット_001_121mm_514g.png', task: 'マスカット' },
        { src: 'newimg/果実類_マンゴー_002_112mm_416g.png', task: 'マンゴー' },
        { src: 'newimg/果実類_みかん_001_56mm_67g.png', task: 'みかん' },
        { src: 'newimg/果実類_メロン_003_128mm_1094g.png', task: 'メロン' },
        { src: 'newimg/果実類_ライチ_001_38mm_26g.png', task: 'ライチ' },
        { src: 'newimg/果実類_ラズベリー_007_76mm_50g.png', task: 'ラズベリー' },
        { src: 'newimg/果実類_りんご_001_94mm_263g.png', task: 'りんご' },
        { src: 'newimg/果実類_レモン_002_91mm_166g.png', task: 'レモン' },
        { src: 'newimg/果実類_柿_002_86mm_292g.png', task: '柿' },
        { src: 'newimg/果実類_西洋なし【洋なし】_001_78mm_400g.png', task: '洋ナシ' },
        { src: 'newimg/果実類_青りんご_001_96mm_307g.png', task: '青りんご' },
        { src: 'newimg/穀類_とうもろこし_003_183mm_289g.png', task: 'とうもろこし' },
        { src: 'newimg/種実類_ア-モンド_002_48mm_10g.png', task: 'アーモンド' },
        { src: 'newimg/種実類_カシュ-ナッツ_002_46mm_10g.png', task: 'カシューナッツ' },
        { src: 'newimg/種実類_くるみ_001_62mm_10g.png', task: 'くるみ' },
        { src: 'newimg/豆類_だいず_004_82mm_40g.png', task: 'だいず' },
        { src: 'newimg/野菜類_いんげんまめ_001_130mm_4g.png', task: 'いんげんまめ' },
        { src: 'newimg/野菜類_えだまめ_003_55mm_4g.png', task: 'えだまめ' },
        { src: 'newimg/野菜類_かぶ_002_100mm_105g.png', task: 'かぶ' },
        { src: 'newimg/野菜類_かぼちゃ_016_96mm_255g.png', task: 'かぼちゃ' },
        { src: 'newimg/野菜類_カリフラワー_002_136mm_418g.png', task: 'カリフラワー' },
        { src: 'newimg/野菜類_キャベツ_001_252mm_1636g.png', task: 'キャベツ' },
        { src: 'newimg/野菜類_きゅうり_001_217mm_132g.png', task: 'きゅうり' },
        { src: 'newimg/野菜類_グリンピース_003_43mm_10g.png', task: 'グリンピース' },
        { src: 'newimg/野菜類_ゴーヤ_001_276mm_264g.png', task: 'ゴーヤ' },
        { src: 'newimg/野菜類_サニーレタス_006_101mm_50g.png', task: 'サニーレタス' },
        { src: 'newimg/野菜類_さやえんどう_-001_76mm_2g.png', task: 'さやえんどう' },
        { src: 'newimg/野菜類_ししとう_001_109mm_1g.png', task: 'ししとう' },
        { src: 'newimg/野菜類_しゅんぎく_001_306mm_111g-1.png', task: 'しゅんぎく' },
        { src: 'newimg/野菜類_そら豆_001_178mm_54g.png', task: 'そらまめ' },
        { src: 'newimg/野菜類_だいこん_001_425mm_1129g.png', task: 'だいこん' },
        { src: 'newimg/野菜類_タマネギ_001_95㎜_348g.png', task: 'タマネギ' },
        { src: 'newimg/野菜類_タマネギ_030_82㎜_248g.png', task: '赤タマネギ' },
        { src: 'newimg/野菜類_チンゲンサイ_001_230mm_122g-1.png', task: 'チンゲンサイ' },
        { src: 'newimg/野菜類_とうがらし_001_44mm_0.5g.png', task: 'とうがらし' },
        { src: 'newimg/野菜類_トマト007_66mm_146g.png', task: 'トマト' },
        { src: 'newimg/野菜類_なす_008_42mm_37g.png', task: '丸ナス' },
        { src: 'newimg/野菜類_なす_036_61mm_148g.png', task: '長ナス' },
        { src: 'newimg/野菜類_ニラ_002_417mm_50g.png', task: 'ニラ' },
        { src: 'newimg/野菜類_ニンジン_001_198mm_218g.png', task: 'ニンジン' },
        { src: 'newimg/野菜類_ニンニク_001_65mm_76g.png', task: 'ニンニク' },
        { src: 'newimg/野菜類_はくさい_001_311mm_2860g.png', task: 'はくさい' },
        { src: 'newimg/野菜類_はつかだいこん_003_28mm_11g.png', task: 'ラディッシュ' },
        { src: 'newimg/野菜類_パプリカ_001_113mm_194g.png', task: '赤パプリカ' },
        { src: 'newimg/野菜類_パプリカ_026_83mm_182g.png', task: '黄パプリカ' },
        { src: 'newimg/野菜類_ピーマン_1_54mm_25g.png', task: 'ピーマン' },
        { src: 'newimg/野菜類_ブロッコリー_001_119mm_243g.png', task: 'ブロッコリー' },
        { src: 'newimg/野菜類_ほうれんそう_004_280mm_194g.png', task: 'ほうれんそう' },
        { src: 'newimg/野菜類_みずな_001_493mm_107g.png', task: 'みずな' },
        { src: 'newimg/野菜類_ミニトマト_014_58mm_16g.png', task: 'ミニトマト' },
        { src: 'newimg/野菜類_もも_001_83mm_356g.png', task: 'もも' },
        { src: 'newimg/野菜類_レタス_001_172mm_396g.png', task: 'レタス' },
        { src: 'newimg/野菜類_根深ねぎ_003_599mm_110g.png', task: '根深ネギ' },
        { src: 'newimg/野菜類_小ねぎ_001_318mm_116g.png', task: '小ネギ' },
        { src: 'newimg/野菜類_小松菜_001_224mm_50g.png', task: '小松菜' },
        { src: 'newimg/野菜類しょうが_001_75mm_48g.png', task: 'しょうが' }
    ];

    let correctIndex = -1;
    const numCols = 6;
    let allImages = [...imagesWithTasks];
    shuffleArray(allImages);
    let selectedImages = allImages.slice(0, 54);
    let timeoutId = null;
    let countdownInterval = null;
    let startflag = 0;
    let stopflag = 0;

    function preloadImages(images) {
        images.forEach(image => {
            const img = new Image();
            img.src = image.src;
        });
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
        countdownElement.textContent = `${seconds}`;
        countdownInterval = setInterval(() => {
            seconds--;
            if (seconds >= 0) {
                countdownElement.textContent = `${seconds}`;
            }
            if (seconds <= 0) {
                applyOverlay(allContainers[correctIndex], 'correct'); // 正解の画像に半透明の緑色をオーバーレイ
                applyOverlayToNeighbors(allContainers[correctIndex], 'incorrect'); // 周囲の画像に半透明の赤色をオーバーレイ
            }
        }, 850);
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
                if (stopflag == 0) {
                    clearTimeout(timeoutId);
                    clearInterval(countdownInterval);
                    const allContainers = document.querySelectorAll('.image-container');
                    if (image.task === selectedImages[correctIndex].task) {
                        showResultMessage('Correct!', true);
                        sendMessageToSwift("Correct")
                        applyOverlay(container, 'selectedcorrect');
                    } else {
                        showResultMessage('Incorrect!', false);
                        sendMessageToSwift("Incorrect")
                        applyOverlay(container, 'selectedincorrect');
                    }
                    applyOverlay(allContainers[correctIndex], 'correct'); // 正解の画像に半透明の緑色をオーバーレイ
                    applyOverlayToNeighbors(allContainers[correctIndex], 'incorrect'); // 周囲の画像に半透明の赤色をオーバーレイ
                    timeoutId = setTimeout(resetTask, 1000);
                    clearInterval(countdownInterval);
                }
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
        clearTimeout(timeoutId);
        clearInterval(countdownInterval);

        shuffleArray(selectedImages);
        correctIndex = getRandomInt(selectedImages.length);
        taskTitle.innerHTML = `「<strong>${selectedImages[correctIndex].task}</strong>」 <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;を選んでください`;
        resultMessage.textContent = 'Checking..'; // 結果メッセージをリセット
        resultMessage.style.color = 'green'; // メッセージの色をデフォルトに戻す
        resetOverlays();
        loadImages();

        timeoutId = setTimeout(resetTask, 10000);
        clearInterval(countdownInterval);
        startCountdown(10);
    }

    function start () {
        console.log(stopflag);
        if (startflag == 0) {
            startflag++;
            resetTask();
        }
        if (startflag != 0 && stopflag == 1) {
            clearTimeout(timeoutId);
            clearInterval(countdownInterval);
            const countdownElement = document.getElementById('countdown');
            const countdownText = countdownElement.textContent;
            const seconds = parseInt(countdownText);
            startCountdown(seconds);
            timeoutId = setTimeout(resetTask, seconds * 1300);
            stopflag--;
        }
    }

    function stop () {
        console.log(stopflag);
        if (startflag != 0 && stopflag == 0) {
            clearTimeout(timeoutId);
            clearInterval(countdownInterval);
            stopflag++;
            return;
        }
    }

    startButton.addEventListener('click', start);
    stopButton.addEventListener('click', stop);
});


