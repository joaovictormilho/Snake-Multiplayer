// Variaveis relativas ao Canvas
var stage = document.getElementById('stage');
var ctx = stage.getContext("2d");

// Variaveis Tabuleiro
var tp = 20; // Tamanho das peças
var qp = 30; // Quantidade de peças

var walls = [];

function paintBackground() {
    //  Pinta fundo
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, stage.width, stage.height);
}

function paintFruit() {
    //  Pinta fruta
    ctx.fillStyle = "red";
    ctx.fillRect(ax * tp, ay * tp, tp, tp);
}

function paintGoldFruit(x,y) {
    if (x > -1 && y > -1) {
        // Pinta fruta dourada
        ctx.fillStyle = 'gold';
        ctx.fillRect(goldxy[0] * tp, goldxy[1] * tp, tp, tp);
    }
}

function paintSnake(snake) {
    ctx.fillStyle = snake.color;
    for (var i = 0; i < snake.trail.length; i++) {
        ctx.fillRect(snake.trail[i].x * tp, snake.trail[i].y * tp, tp - 1, tp - 1);
    }
}

function clearScreen(params) {
    ctx.clearRect(0, 0, stage.width, stage.length); // Limpa a tela
}