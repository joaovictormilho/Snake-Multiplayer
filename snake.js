class Snake {

    constructor(name,color) {
        this.vx = this.vy = 0;                              // Movimentação
        this.px = this.py = -1;                              // Posição
        this.keyPressed = null;                             // Ultima tecla pressionada
        this.trail = [];                                    // Rastro
        this.tail = 3;                                      // Tamanho
        this.color = color;
        this.score = 0;
        this.name = name;
    }

    reset() {
        this.trail = [];
        this.score = 0;
        this.tail = 3;
        this.keyPressed = null;
        this.vx = this.vy = 0;
        setSnakePosition(this);
    }

    isMoving() {
        if (this.vx != 0 || this.vy != 0)
            return true;
        else
            return false;
    }

    testLimts() {
        if (this.px < 0) {
            this.px = qp - 1;
        }
        if (this.px > qp - 1) {
            this.px = 0;
        }
        if (this.py < 0) {
            this.py = qp - 1;
        }
        if (this.py > qp - 1) {
            this.py = 0;
        }
    }

    testWalls() {
        for (let i = 0; i < walls.length; i++) {
            if (this.px == walls[i].x / tp && this.py == walls[i].y / tp) {
                this.reset();
            }
        }

    }

    autoCrashTest() {
        for (var i = 0; i < this.trail.length; i++) {
            if (this.trail[i].x == this.px && this.trail[i].y == this.py)
                this.reset();
        }
    }

    moveSnake() {
        this.px += this.vx;
        this.py += this.vy;
    }

    drawSnake() {
        ctx.fillStyle = this.color;
        for (var i = 0; i < this.trail.length; i++) {
            ctx.fillRect(this.trail[i].x * tp, this.trail[i].y * tp, tp - 1, tp - 1);
        }
    }

    growSnake() {
        this.trail.push({ x: this.px, y: this.py });
        while (this.trail.length > this.tail) {
            this.trail.shift();
        }
    }

    testEat() {
        if (ax == this.px && ay == this.py) {
            this.score ++;
            this.tail++;
            setFruitPositions();
        }
        if (goldxy[0] == this.px && goldxy[1] == this.py) {
            this.score += 3;
            this.tail += 3;
            goldxy = [-1,-1] // Faz com que a fruta desapareça
        }
    }

    keyTest(event, left, up, right, down) {
        switch (event.keyCode) {
            case left:
                this.vx = -1;
                this.vy = 0;
                this.keyPressed = left;
                break;
            case up:
                this.vx = 0;
                this.vy = -1;
                this.keyPressed = up;
                break;
            case right:
                this.vx = 1;
                this.vy = 0;
                this.keyPressed = right;
                break;
            case down:
                this.vx = 0;
                this.vy = 1;
                this.keyPressed = down;
                break;
            default:
                break;
        }
    }

    keyMove(event, left, up, right, down) {
        if (event.keyCode < 41 && event.keyCode > 36) {
            if (event.keyCode != this.keyPressed - 2 && event.keyCode != this.keyPressed + 2) {
                this.keyTest(event, left, up, right, down);
            }
        }
        else {
            if (event.keyCode != this.keyPressed + 3 && event.keyCode != this.keyPressed - 3 && event.keyCode != this.keyPressed + 4 && event.keyCode != this.keyPressed - 4) {
                this.keyTest(event, left, up, right, down);
            }
        }

    }

    turnOn() {
        this.moveSnake();
        if (this.isMoving()) {
            this.autoCrashTest();
            this.testLimts();
            this.testEat();
            this.testWalls();
            this.growSnake();
            this.drawSnake();
        }
        else {
            this.growSnake();
            this.drawSnake();
        }
    }
}