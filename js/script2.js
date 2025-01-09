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
      // Start action: hide the start message
      startMessage.style.display = "none";
      tapArea.style.display = "block";
      taskTitle.innerHTML = `「<strong>×ボタン</strong>」<br>&nbsp;&nbsp;を押してください`;
      // Create and place the button in a random position
      placeRandomButton();
    });
  
    function placeRandomButton() {
      // Create the outer square button
      const squareButton = document.createElement("button");
      squareButton.className = "square-button";
  
      // Create the inner '×' button
      const closeButton = document.createElement("button");
      closeButton.className = "close-button";
      closeButton.textContent = "×";
  
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
        startMessage.style.display = 'block';
        tapArea.style.display = 'none';
        taskTitle.innerHTML = `画面 <br>をタップしてください`;
        showResultMessage('Incorrect!', false);
        sendMessageToSwift("Incorrect");
        squareButton.remove();
      });
      
      // Add click event to the close button
      closeButton.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent event from propagating to squareButton
        startMessage.style.display = 'block';
        tapArea.style.display = 'none';
        taskTitle.innerHTML = `画面 <br>をタップしてください`;
        showResultMessage('Correct!', true);
        sendMessageToSwift("Correct");
        squareButton.remove();
      });
    }
  });
