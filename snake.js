class Snake {

    constructor(name,color) {
        this.vx = this.vy = 0;                              // Movimentação
        this.px = this.py = -1;                             // Posição
        this.keyPressed = null;                             // Ultima tecla pressionada
        this.trail = [];                                    // Rastro
        this.tail = 3;                                      // Tamanho
        this.color = color;
        this.colorB = color;
        this.score = 0;
        this.name = name;
        this.isChangingColor = false;
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
            this.isChangingColor = true;
            this.score += 3;
            this.tail += 3;
            goldxy = [-1,-1] // Faz com que a fruta desapareça
            turnOffChangingColors(this);
        }
    }

    testEatOther() {
        if (this.isChangingColor) {
            if (this == snakeList[0]) {
                if (c2.tail > 3) {
                    for (var i = 0; i < c2.trail.length; i++) {
                        if (c2.trail[i].x == this.px && c2.trail[i].y == this.py) {
                            c2.trail.shift();
                            c2.tail--;
                            c2.score--;
                        }
                    }
                }
            }
            else{
                if (c1.tail > 3) {
                    for (var i = 0; i < c1.trail.length; i++) {
                        if (c1.trail[i].x == this.px && c1.trail[i].y == this.py) {
                            c1.trail.shift();
                            c1.tail--;
                            c1.score--;
                        }
                    }
                } 
            }
        }
    }

    turnOn() {

        this.moveSnake();

        if (this.isMoving()) {
            this.autoCrashTest();
            this.testLimts();
            this.testEat();
            this.testEatOther();
            this.testWalls();
            this.growSnake();
        }
        else
            this.growSnake();

        paintSnake(this);

        if (this.isChangingColor)
            setInterval(changingColor(this), 120);
    }
}