var snakeList = [], c1, c2;
snakeList.push(c1 = new Snake('Player 1','rgb(50,110,140)'));
snakeList.push(c2 = new Snake('Player 2','saddlebrown'));

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

    clearScreen();
    scoreBoard();
    paintBackground();
    drawWalls();
    paintFruit();
    paintGoldFruit(goldxy[0],goldxy[1]);
    
    //  "Ligar" a(s) cobra(s)
    for (let i = 0; i < snakeList.length; i++)
        snakeList[i].turnOn();
}

setInterval(game, 80);
stage.oncontextmenu = () => false; // Desabilita o menu de contexto no canvas