window.onload = function() {
 
    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d");
    setInterval(game, 80);

    const vel = 1; // Não mudar

    // Variaveis Tabuleiro
    var tp = 20; // Tamanho
    var qp = 30; // Quantidade de peças

    // Variaveis fruta
    var ax = ay = Math.floor(Math.random()*10); // Posição

    class Cobra {
        
        constructor(color) {
            this.vx = this.vy = 0; // Movimentação
            this.px = this.py = Math.floor(Math.random()*10); // Posição
            this.keyPressed = null;
            this.trail = []; // Rastro
            this.tail = 3; // Tamanho
            this.color = color; // Cor
            this.score = 0;
        }

        testLimts() {
            if (this.px <0) {
                this.px = qp-1;
            }
            if (this.px > qp-1) {
                this.px = 0;
            }
            if (this.py < 0) {
                this.py = qp-1;
            }
            if (this.py > qp-1) {
                this.py = 0;
            }
        }

        moveSnake() {
            this.px += this.vx;
            this.py += this.vy;
        }

        drawSnake() {
            ctx.fillStyle = this.color;
            for (var i = 0; i < this.trail.length; i++) {
                ctx.fillRect(this.trail[i].x*tp, this.trail[i].y*tp, tp-1,tp-1);
                if (this.trail[i].x == this.px && this.trail[i].y == this.py) {
                    this.score = 0;
                    this.vx = this.vy = 0;
                    this.tail = 3;
                    this.keyPressed = null;
                }
            }
        }

        growSnake() {
            this.trail.push({x:this.px,y:this.py });
            while (this.trail.length > this.tail) {
                this.trail.shift();
            }
        }

        testEat() {
            if (ax == this.px && ay == this.py) {
                this.score += 1;
                this.tail++;
                ax = Math.floor(Math.random() * 10);
                ay = Math.floor(Math.random() * 10);
            }
        }

        keyTest(event,left,up,right,down) {
            switch (event.keyCode) {
                case left:
                    this.vx = -vel;
                    this.vy = 0;
                    this.keyPressed = left;
                    break;
                case up:
                    this.vx = 0;
                    this.vy = -vel;
                    this.keyPressed = up;
                    break;
                case right:
                    this.vx = vel;
                    this.vy = 0;
                    this.keyPressed = right;
                    break;
                case down:
                    this.vx = 0;
                    this.vy = vel;
                    this.keyPressed = down;
                    break;
                default:
                    break;
            }
        }

        keyMove(event,left,up,right,down) {
            if(event.keyCode < 41 && event.keyCode > 36) {
                if(event.keyCode != this.keyPressed - 2 && event.keyCode != this.keyPressed +2) {
                    this.keyTest(event,left,up,right,down);
                }
            }
            else {
                if(event.keyCode != this.keyPressed +3 && event.keyCode != this.keyPressed -3 && event.keyCode != this.keyPressed + 4 && event.keyCode != this.keyPressed - 4){
                    this.keyTest(event,left,up,right,down);
                }
            }

        }

        fruit() {
            var x = Math.floor(Math.random() * 10);
            for (let i = 0; i < this.tail; i++) {
                if(x == this.trail[i].x) {
                     console.log('igual');
                     var x = Math.floor(Math.random() * 10);
                     i = 0;
                }
            }
            return x;
        }
    }

    var snakeList = [];
    const c1 = new Cobra('rgb(50,110,140)');
    const c2 = new Cobra('saddlebrown');
    //const c3 = new Cobra('gold');
    snakeList.push(c1);
    snakeList.push(c2);

    function scoreBoard() {

        var playersList = document.getElementById("players");
        playersList.innerHTML = '';
        var players = [
            {name:'João Victor', score: c1.score},
            {name:'Alex Victor', score: c2.score}
        ];

        for (let i = 0; i < players.length; i++) {
            var player = document.createElement('li');
            var playerText = document.createTextNode(players[i].name + ": " + players[i].score);
            player.appendChild(playerText);
            playersList.appendChild(player);
        }
    }

    function game() {

        scoreBoard();

        //  Pinta fundo
        ctx.fillStyle = "black";
        ctx.fillRect(0,0, stage.width, stage.height);

        //  Pinta fruta
        ctx.fillStyle = "darkgray"; // Cor da fruta
        ctx.fillRect(ax*tp, ay*tp, tp,tp);

        //  Metodos das cobra(s)
        for (let i = 0; i < snakeList.length; i++) {
            snakeList[i].moveSnake();
            snakeList[i].testLimts();
            snakeList[i].drawSnake();
            snakeList[i].growSnake();
            snakeList[i].testEat();
        }
    }

    document.onkeydown = function(event) {
        
        c1.keyMove(event,37,38,39,40);
        c2.keyMove(event,65,87,68,83);
        //c3.keyMove(event,74,73,76,75);
    }

    stage.oncontextmenu = () => false;
}