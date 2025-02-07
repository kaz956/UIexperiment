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

function receiveMessageFromSwift(data) {
  alert("呼ばれました！");
  if (data === '1') {
      abortProcessing = true;
      alert("処理が中断されました！"); // ポップアップを表示
  }
}

//英語の単語リストを取得するAPIのURL
// const WORDS_API_URL = 'https://random-word-api.herokuapp.com/word?number=1';

// async function getRandomWord() {
//   try {
//     const response = await fetch(WORDS_API_URL);
//     const data = await response.json();
//     return data[0];
//   } catch (error) {
//     console.error('Failed to fetch random word:', error);
//     return null;
//   }
// }

const words = [
  "hello world"
];

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

async function startGame() {
  
}

document.addEventListener("dblclick", function(e){ e.preventDefault();}, { passive: false });

document.addEventListener('DOMContentLoaded', () => {
  const wordDiv = document.getElementById("word");
  const output = document.getElementById('output');
  const resultDiv = document.getElementById("result");

  let currentWord = getRandomWord();
  wordDiv.textContent = "";

  //ダブルタップズームを防ぐ
  // let lastTouchEnd = 0;
  // document.addEventListener('touchend', function (event) {
  //   const now = (new Date()).getTime();
  //   if (now - lastTouchEnd <= 300) {
  //     event.preventDefault();
  //   }
  //   lastTouchEnd = now;
  // }, false);

  function sendMessageToSwift(message) {
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.jsToSwift) {
        window.webkit.messageHandlers.jsToSwift.postMessage(message);
    } else {
        console.error("Swiftのメッセージハンドラーが見つかりません");
    }
  }

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
          handleTyping();
      });
  });

  function handleTyping() {
    const typedWord = output.value.trim();
    if (typedWord === currentWord.substring(0, typedWord.length)) {
      if (typedWord === currentWord) {
        resultDiv.textContent = " ";
        sendMessageToSwift("Correct")
        resultDiv.style.color = "green";
        setTimeout(async function() {

          output.value = "";
          currentWord = getRandomWord();
          wordDiv.textContent = " ";
        }, 1000);
      } else {
        resultDiv.textContent = " "; // タイピング中はエラーメッセージをクリア
        sendMessageToSwift("Correct")
        resultDiv.style.color = "green";
      }
    } else {
      resultDiv.textContent = " ";
      sendMessageToSwift("Incorrect")
      resultDiv.style.color = "red";
      showCorrectionOptions(typedWord, currentWord);
    }
  }


  // 🔹 修正候補ボタンを表示する関数
  function showCorrectionOptions(typedWord, correctWord) {
      correctionDiv.innerHTML = ""; // 以前の修正ボタンを削除
      let incorrectIndex = findFirstIncorrectIndex(typedWord, correctWord);
      if (incorrectIndex === -1) return;

      let incorrectChar = typedWord[incorrectIndex] || "";
      let correctChar = correctWord[incorrectIndex] || "";

      if (!incorrectChar || !correctChar) return;

      let adjacentChars = getAdjacentCharacters(incorrectChar);
      
      adjacentChars.forEach(char => {
          const suggestionBtn = document.createElement("button");
          suggestionBtn.textContent = char;
          suggestionBtn.classList.add("correction-btn");
          suggestionBtn.onclick = () => {
              let fixedWord = typedWord.split("");
              fixedWord[incorrectIndex] = char;
              output.value = fixedWord.join("");
              correctionDiv.innerHTML = ""; // ボタン削除
              handleTyping();
          };
          correctionDiv.appendChild(suggestionBtn);
      });
  }

  // 🔹 最初に間違えた文字の位置を特定
  function findFirstIncorrectIndex(typedWord, correctWord) {
      for (let i = 0; i < typedWord.length; i++) {
          if (typedWord[i] !== correctWord[i]) {
              return i;
          }
      }
      return -1;
  }

  // 🔹 キーボード上で隣接する2つの文字を取得
  function getAdjacentCharacters(char) {
      const keyboardLayout = "1234567890qwertyuiopasdfghjklzxcvbnm"; // 英字のみ対応（拡張可能）
      let index = keyboardLayout.indexOf(char.toLowerCase());
      
      if (index === -1) return []; // キーボードにない場合

      let neighbors = [];
      if (index > 0) neighbors.push(keyboardLayout[index - 1]); // 左の文字
      if (index < keyboardLayout.length - 1) neighbors.push(keyboardLayout[index + 1]); // 右の文字

      return neighbors;
  }
});