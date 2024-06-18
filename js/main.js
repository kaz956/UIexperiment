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

//英語の単語リストを取得するAPIのURL
const WORDS_API_URL = 'https://random-word-api.herokuapp.com/word?number=1';

async function getRandomWord() {
  try {
    const response = await fetch(WORDS_API_URL);
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error('Failed to fetch random word:', error);
    return null;
  }
}

async function startGame() {
  const wordDiv = document.getElementById("word");
  const output = document.getElementById("output");
  const resultDiv = document.getElementById("result");

  let currentWord = await getRandomWord();
  wordDiv.textContent = currentWord;

  document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
      const typedWord = output.value.trim();
      if (typedWord === currentWord) {
        resultDiv.textContent = "Correct!";
        setTimeout(async function() {
          resultDiv.textContent = "Checking...";
          output.value = "";
          currentWord = await getRandomWord();
          wordDiv.textContent = currentWord;
        }, 1000);
      }
    });
});
}

startGame();


document.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById('output');

  // ダブルタップズームを防ぐ
  // let lastTouchEnd = 0;
  // document.addEventListener('touchend', function (event) {
  //   const now = (new Date()).getTime();
  //   if (now - lastTouchEnd <= 300) {
  //     event.preventDefault();
  //   }
  //   lastTouchEnd = now;
  // }, false);

  document.querySelectorAll('.key').forEach(key => {
      key.addEventListener('click', () => {
          const keyValue = key.textContent;
          if (keyValue === 'Delete') {
              output.value = output.value.slice(0, -1);
          } else if (keyValue === 'Space') {
              output.value += ' ';
          } else if (keyValue === 'Enter') {
              output.value += '\n';
          } else {
              output.value += keyValue;
          }
      });
  });
});


// script.js

document.addEventListener('DOMContentLoaded', () => {
  const thumbnails = document.querySelectorAll('.thumbnail');
  const modal = document.getElementById('modal');
  const modalDescription = document.getElementById('modal-description');
  const closeModal = document.querySelector('.close');

  thumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
        const descText = thumbnail.getAttribute('data-description');
        const formattedDescText = descText.replace(/\\n/g, '<br>'); // 改行文字を<br>に変換する
        modalDescription.innerHTML = formattedDescText; // innerHTMLを使用してHTMLを挿入することで、<br>が解釈される
        modal.style.display = 'flex';
      });
  });

  closeModal.addEventListener('click', () => {
      modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });
});


