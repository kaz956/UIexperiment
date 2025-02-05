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
    document.getElementById("popup").style.display = "flex";
    document.getElementById("overlay").style.display = "flex";
}

// ポップアップを非表示
function hidePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("fileInput");
    const uploadBtn = document.getElementById("uploadBtn");

    // 「続行」ボタン
    document.getElementById("continue").addEventListener("click", () => {
        hidePopup();
        uploadBtn.disabled = false;
    });

    // 「戻る」ボタン
    document.getElementById("cancel").addEventListener("click", () => {
        hidePopup();
        fileInput.value = ""; // ファイル選択解除
    });

    // **オーバーレイ（背景）クリック時にも「戻る」と同じ処理を実行**
    document.getElementById("overlay").addEventListener("click", () => {
        hidePopup();
        uploadBtn.disabled = false;
        fileName.textContent = "No file selected"; // Reset text
        // 少し遅らせてファイル選択ダイアログを開く
        setTimeout(() => {
            fileInput.click(); 
        }, 500);
    });

    fileInput.addEventListener("change", () => {
        if (fileInput.files.length > 0) {
            showPopup();
        }
    });
});
