
// script.js
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
  
  
  