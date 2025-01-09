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

const resultMessage = document.getElementById('result-message');
const taskTitle = document.getElementById('task-title');
const countdownElement = document.getElementById('count');
let count = 0;

function sendMessageToSwift(message) {
    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.jsToSwift) {
        window.webkit.messageHandlers.jsToSwift.postMessage(message);
    } else {
        console.error("Swiftのメッセージハンドラーが見つかりません");
    }
}

function showResultMessage(message, isCorrect) {
    resultMessage.textContent = message;
    if (isCorrect) {
        resultMessage.style.color = 'green'; // 正解の場合の色
    } else {
        resultMessage.style.color = 'red'; // 不正解の場合の色
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const startMessage = document.getElementById("startMessage");
    const tapArea = document.getElementById("tap-area");
  
    startMessage.addEventListener("click", () => {
      setTimeout(() => {
        startMessage.style.display = "none";
        tapArea.style.display = "block";
        taskTitle.innerHTML = `「<strong>×ボタン</strong>」<br>&nbsp;&nbsp;を押してください`;
        placeRandomButton();
      }, 500);
    });
  
    function placeRandomButton() {
      // Create the outer square button
      const squareButton = document.createElement("button");
      squareButton.className = "square-button";
  
      // Create the inner '×' button
      const closeButton = document.createElement("button");
      closeButton.className = "close-button";
      closeButton.innerHTML = "<strong>×</strong>";
  
      // Append the '×' button to the square button
      squareButton.appendChild(closeButton);
  
      // Set random position within tap-area
      const areaWidth = tapArea.offsetWidth;
      const areaHeight = tapArea.offsetHeight;
      const buttonSize = 50; // Button size (width & height)
  
      const randomX = Math.random() * (areaWidth - buttonSize);
      const randomY = Math.random() * (areaHeight - buttonSize);
  
      squareButton.style.left = `${randomX}px`;
      squareButton.style.top = `${randomY}px`;
      squareButton.style.position = 'absolute';

      console.log(randomX);
      console.log(randomY);
      
  
      // Append the square button to tap-area
      tapArea.appendChild(squareButton);
  
      // Add click event to the square button
      squareButton.addEventListener("click", () => {
        showResultMessage('Incorrect!', false);
        sendMessageToSwift("Incorrect");
        setTimeout(() => {
            startMessage.style.display = 'block';
            tapArea.style.display = 'none';
            taskTitle.innerHTML = `画面 <br>をタップしてください`;
            squareButton.remove();
        }, 350);
      });
      
      // Add click event to the close button
      closeButton.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent event from propagating to squareButton
        showResultMessage('Correct!', true);
        sendMessageToSwift("Correct");
        count++;
        countdownElement.innerHTML = `Score : <span style="color: green; font-weight: bold;">${count}</span>`;
        setTimeout(() => {
            startMessage.style.display = 'block';
            tapArea.style.display = 'none';
            taskTitle.innerHTML = `画面 <br>をタップしてください`;
            squareButton.remove();
        }, 350);
      });
    }
  });
