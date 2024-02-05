console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");
let Turn = "X";
let gameover = false;
const changeTurn = () => {
  return Turn === "X" ? "0" : "X";
};

const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxText");
  let win = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];
  win.forEach((e) => {
    if (
      boxtext[e[0]].innerHTML === boxtext[e[1]].innerHTML &&
      boxtext[e[2]].innerHTML === boxtext[e[1]].innerHTML &&
      boxtext[e[0]].innerHTML !== ""
    ) {
      document.querySelector(".info").innerHTML =
        boxtext[e[0]].innerHTML + " Win";
      gameover = true;
      document
        .querySelector(".imgBox")
        .getElementsByTagName("img")[0].style.width = "200px";
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector(".line").style.width = "20vw";
    }
  });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = Turn;
      Turn = changeTurn();
      audioTurn.play();
      checkWin();
      if (!gameover) {
        document.getElementsByClassName("info")[0].innerHTML =
          "Turn for " + Turn;
      }
    }
  });
});
reset.addEventListener("click", () => {
  let boxtext = document.querySelectorAll(".boxText");
  Array.from(boxtext).forEach((element) => {
    element.innerText = "";
    Turn = "X";
    gameover = false;
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + Turn;
    document
      .querySelector(".imgBox")
      .getElementsByTagName("img")[0].style.width = "0px";
  });
});
