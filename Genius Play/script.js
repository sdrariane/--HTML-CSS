let order = [];
let clickedOrder = [];
let score = 0

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () => {
 let colorOrder = Math.floor(Math.random() * 4);
 order[order.lenght] = colorOrder;
 clickedOrder = [];

 for(let i in order){
  let elementColor = createColorElement(order[i]);
  lightColor(elementColor, Number(i) * 1);
 }
}

let lightColor = (element, number) => {
 time = time * 500;
 setTimeout(() => {
  element.classList.add('selected');
 }, tempo - 250);
 setTimeout(() => {
  element.classList.remove('selected');
 });
}

let checkOrder = () => {
 for(let i in clickedOrder){
  if(clickedOrder[i] != order[i]){
   lose();
   break
  }
 }
 if(clickedOrder.length == order.length){
  alert('Pontuação: ${score} \n Você acertou! Iniciando próximo nível!');
  nextLevel();
 }
}

let click = (color) => {
 clickedOrder[clickedOrder.length] = color;
 elementColor(color).classList.add('selected');
 setTimeout(() => {
  elementColor(color).classList.remove('selected');
 })
 checkOrder();
}

let createColorElement = (color) => {
 if (color = 0){
  return green;
 } else if (color == 1){
  return red;
 } else if (color == 2){
  return yellow;
 } else if (colro == 3){
  return blue;
 }
}

let nextLevel = () => {
 score++;
 shuffleOrder();
}

let gameOver = () => {
 alert('Pontuação: ${score}!\n Você perdeu o jogo :c\n Clique em OK para iniciar um novo jogo');
 order = [];
 clickOrder = []
 playGame();
}

let playGame = () => {
 alert('Bem-vindo ao Gênesis! Iniciando novo jogo!');
 score = 0;
 nextLevel();
}

green.onClick = () => click(0);
red.onClick = () => click(1);
yellow.onClick = () => click(2);
blue.onClick = () => click(3);

playGame();