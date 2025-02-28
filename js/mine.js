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

const rows = 10, cols = 10, mines = 15;
let board, mineMap;

document.addEventListener("DOMContentLoaded", () => {
    createBoard();
    document.getElementById("reset").addEventListener("click", createBoard);
});

// シード付き乱数生成関数
function seededRandom(seed) {
  let x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// 指定されたシード値を元に乱数を生成
function createSeededRandomGenerator(seed) {
  return function () {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
  };
}

// シード値（固定したい場合は同じ値を設定）
const SEED_VALUE = 1234; 
const randomGenerator = createSeededRandomGenerator(SEED_VALUE);

function createBoard() {
    const game = document.getElementById("game");
    game.innerHTML = "";
    game.style.gridTemplateColumns = `repeat(${cols}, 30px)`;
    
    board = [];
    mineMap = Array(rows).fill().map(() => Array(cols).fill(0));

    // 爆弾の配置
    let placedMines = 0;
    while (placedMines < mines) {
        let r = Math.floor(randomGenerator() * rows);
        let c = Math.floor(randomGenerator() * cols);
        if (mineMap[r][c] === 0) {
            mineMap[r][c] = -1;
            placedMines++;
        }
    }

    // 周囲の爆弾数を計算
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (mineMap[r][c] === -1) continue;
            let count = 0;
            for (let dr = -1; dr <= 1; dr++) {
                for (let dc = -1; dc <= 1; dc++) {
                    let nr = r + dr, nc = c + dc;
                    if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && mineMap[nr][nc] === -1) {
                        count++;
                    }
                }
            }
            mineMap[r][c] = count;
        }
    }

    // マスの作成
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < cols; c++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = r;
            cell.dataset.col = c;
            cell.addEventListener("click", () => openCell(r, c));
            cell.addEventListener("contextmenu", (e) => {
                e.preventDefault();
                toggleFlag(cell);
            });
            row.push(cell);
            game.appendChild(cell);
        }
        board.push(row);
    }
}

let pendingCell = null;

function openCell(r, c) {
    let cell = board[r][c];
    if (cell.classList.contains("open") || cell.classList.contains("flag")) return;

    if (mineMap[r][c] === -1) {
        // 爆弾の可能性がある場合、ポップアップを表示
        pendingCell = { row: r, col: c };
        showPopup();
        return;
    } 

    // 正しいマスでも50%の確率でポップアップを表示
    if (Math.random() < 0.5) { // 50%の確率
        pendingCell = { row: r, col: c };
        showPopup();
        return;
    }

    revealCell(r, c);
}

function revealCell(r, c) {
    let cell = board[r][c];
    cell.classList.add("open");

    if (mineMap[r][c] === -1) {
        cell.classList.add("bomb");
        alert("ゲームオーバー！");
        revealBoard();
        return;
    }

    cell.textContent = mineMap[r][c] > 0 ? mineMap[r][c] : "";
    if (mineMap[r][c] === 0) {
        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                let nr = r + dr, nc = c + dc;
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
                    openCell(nr, nc);
                }
            }
        }
    }
}

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

// 「続行」ボタン
document.getElementById("continue").addEventListener("click", () => {
    if (pendingCell) {
        revealCell(pendingCell.row, pendingCell.col);
        pendingCell = null;
    }
    hidePopup();
});

// 「戻る」ボタン
document.getElementById("cancel").addEventListener("click", () => {
    pendingCell = null;
    hidePopup();
});

// **オーバーレイ（背景）クリック時にも「戻る」と同じ処理を実行**
document.getElementById("overlay").addEventListener("click", () => {
    if (pendingCell) {
      revealCell(pendingCell.row, pendingCell.col);
      pendingCell = null;
    }
    hidePopup();
});

function toggleFlag(cell) {
    if (!cell.classList.contains("open")) {
        cell.classList.toggle("flag");
    }
}

function revealBoard() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let cell = board[r][c];
            if (mineMap[r][c] === -1) {
                cell.classList.add("bomb");
            } else {
                cell.textContent = mineMap[r][c] > 0 ? mineMap[r][c] : "";
            }
            cell.classList.add("open");
        }
    }
}
