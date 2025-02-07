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
const imageGrid2 = document.getElementById('image-grid2');
let timemoving = true;
let abortProcessing = false;
let group = '';

// 🔹 スクリプトの最初に定義
const imagesWithTasks = [
    { src: 'newimg/a.png', task: 'a' , group: 'a'},
    { src: 'newimg/b.png', task: 'b' , group: 'b'},
    { src: 'newimg/c.png', task: 'c' , group: 'c'},
    { src: 'newimg/d.png', task: 'd' , group: 'd'},
    { src: 'newimg/e.png', task: 'e' , group: 'e'},
    { src: 'newimg/f.png', task: 'f' , group: 'f'},
    { src: 'newimg/g.png', task: 'g' , group: 'a'},
    { src: 'newimg/h.png', task: 'h' , group: 'b'},
    { src: 'newimg/i.png', task: 'i' , group: 'c'},
    { src: 'newimg/j.png', task: 'j' , group: 'd'},
    { src: 'newimg/k.png', task: 'k' , group: 'e'},
    { src: 'newimg/l.png', task: 'l' , group: 'f'},
    { src: 'newimg/m.png', task: 'm' , group: 'a'},
    { src: 'newimg/n.png', task: 'n' , group: 'b'},
    { src: 'newimg/o.png', task: 'o' , group: 'c'},
    { src: 'newimg/p.png', task: 'p' , group: 'd'},
    { src: 'newimg/q.png', task: 'q' , group: 'e'},
    { src: 'newimg/r.png', task: 'r' , group: 'f'},
    { src: 'newimg/s.png', task: 's' , group: 'a'},
    { src: 'newimg/t.png', task: 't' , group: 'b'},
    { src: 'newimg/u.png', task: 'u' , group: 'c'},
    { src: 'newimg/v.png', task: 'v' , group: 'd'},
    { src: 'newimg/w.png', task: 'w' , group: 'e'},
    { src: 'newimg/x.png', task: 'x' , group: 'f'},
    { src: 'newimg/y.png', task: 'y' , group: 'g'},
    { src: 'newimg/z.png', task: 'z' , group: 'g'},
    { src: 'newimg/ω.png', task: 'ω' , group: 'g'},
    { src: 'newimg/φ.png', task: 'φ' , group: 'h'},
    { src: 'newimg/θ.png', task: 'θ' , group: 'h'},
    { src: 'newimg/ζ.png', task: 'ζ' , group: 'h'},
];

// 🔹 画像をクリックするとポップアップを表示
document.addEventListener('DOMContentLoaded', () => {
    const imageGrid = document.getElementById('image-grid');
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    const imageGrid2 = document.getElementById('image-grid2');

    if (!imageGrid || !overlay || !popup || !imageGrid2) {
        console.error("必要な要素が見つかりません。HTMLに 'overlay', 'popup', 'image-grid2', 'close-popup' を追加してください。");
        return;
    }

    const shuffledImgaes = imagesWithTasks.sort(() => Math.random() - 0.5)

    shuffledImgaes.forEach((imageData, index) => {
        const imgElement = document.createElement('img');
        imgElement.classList.add('icon-container');
        imgElement.src = imageData.src;
        imgElement.alt = `画像${index + 1}`;
        imgElement.classList.add('grid-image');

        imgElement.addEventListener('click', () => {
            if (Math.random() < 0.5) { // 50%の確率でポップアップを表示
                setpopup(imageData, imageData.group);
                popup.style.display = 'flex';
                overlay.style.display = 'flex';
            }
        });

        imageGrid.appendChild(imgElement);
    });

    // オーバーレイと閉じるボタンをクリックするとポップアップを閉じる
    overlay.addEventListener('click', closePopupHandler);

    function closePopupHandler() {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    }
});

// 🔹 ポップアップの設定
function setpopup(image, group) {
    const imageGrid2 = document.getElementById('image-grid2');
    if (!imageGrid2) return;

    imageGrid2.innerHTML = '';

    // グローバル変数の `imagesWithTasks` を参照
    let groupedImages = imagesWithTasks.filter(img => img.group === group);

    groupedImages.forEach((imgData, idx) => {
        const container = document.createElement('div');
        container.classList.add('image-container2');

        const img = document.createElement('img');
        img.src = imgData.src;
        img.alt = `画像${idx + 1}`;

        container.appendChild(img);
        imageGrid2.appendChild(container);
    });
}
