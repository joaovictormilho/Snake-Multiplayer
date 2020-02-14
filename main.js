// Variaveis realtivas ao Canvas
var stage = document.getElementById('stage');
var ctx = stage.getContext("2d");

// Variaveis Tabuleiro
var tp = 20; // Tamanho das peças
var qp = 30; // Quantidade de peças

// Variaveis fruta
var axy = [];
var ax, ay;

// Declaração das cobras
var snakeList = [], c1, c2;
snakeList.push(c1 = new Snake('Player 1','rgb(50,110,140)'));
snakeList.push(c2 = new Snake('Player 2','saddlebrown'));

var walls = [];

function scoreBoard() {

    var playersList = document.getElementById("players");
    playersList.innerHTML = '';
    var players = [
        {name:c1.name, score: c1.score},
        {name:c2.name, score: c2.score}
    ];

    for (let i = 0; i < players.length; i++) {
        var player = document.createElement('li');
        var playerText = document.createTextNode(players[i].name + ": " + players[i].score);
        player.appendChild(playerText);
        playersList.appendChild(player);
    }
}

function game() {

    ctx.clearRect(0, 0, stage.width, stage.length);

    scoreBoard();

    //  Pinta fundo
    ctx.fillStyle = "black";
    ctx.fillRect(0,0, stage.width, stage.height);

    drawWalls();

    //  Pinta fruta
    ctx.fillStyle = "gold";
    ctx.fillRect(ax * tp, ay * tp, tp, tp);

    //  Ligar a(s) cobra(s)
    for (let i = 0; i < snakeList.length; i++) {
        snakeList[i].turnOn();
    }
}

document.onkeydown = function(event) {
    
    c1.keyMove(event,37,38,39,40);
    c2.keyMove(event,65,87,68,83);
    //c3.keyMove(event,74,73,76,75);
}

setInterval(game, 80);
stage.oncontextmenu = () => false; // Desabilita o menu de contexto no canvas.