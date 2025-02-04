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

document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById("fileInput");
    const uploadBtn = document.getElementById("uploadBtn");
    const popup = document.getElementById("popup");
    const confirmBtn = document.getElementById("confirmBtn");
    const cancelBtn = document.getElementById("cancelBtn");

    fileInput.addEventListener("change", () => {
        if (fileInput.files.length > 0) {
            popup.style.display = "block"; // ポップアップ表示
        }
    });

    confirmBtn.addEventListener("click", () => {
        popup.style.display = "none"; // ポップアップ閉じる
        uploadBtn.disabled = false; // 送信ボタン有効化
    });

    cancelBtn.addEventListener("click", () => {
        popup.style.display = "none"; // ポップアップ閉じる
        fileInput.value = ""; // ファイル選択解除
    });

    uploadBtn.addEventListener("click", () => {
        alert("ファイルを送信しました！");
        fileInput.value = ""; // 送信後にリセット
        uploadBtn.disabled = true; // 送信ボタン無効化
    });
});
