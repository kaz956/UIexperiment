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

// ポップアップを表示
function showPopup() {
    document.getElementById("popup2").style.display = "flex";
}

// ポップアップを非表示
function hidePopup() {
    document.getElementById("popup2").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("fileInput");
    const uploadBtn = document.getElementById("uploadBtn");

    // 「続行」ボタン
    document.getElementById("continue2").addEventListener("click", () => {
        hidePopup();
        uploadBtn.disabled = true;
        fileInput.value = ""; // ファイル選択解除
    });

    // 「戻る」ボタン
    document.getElementById("cancel2").addEventListener("click", () => {
        hidePopup();
        uploadBtn.disabled = true;
        fileInput.value = ""; // ファイル選択解除
        setTimeout(() => {
            fileInput.click(); 
        }, 200);
    });

    fileInput.addEventListener("change", () => {
        if (fileInput.files.length > 0) {
            showPopup();
        }
    });
});
