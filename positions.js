
function generatesPosition() {

    // Essa função gera uma posição que(teoricamente, rs) não sobrepõe nenhum elemento

    var position = [Math.floor(Math.random() * qp), Math.floor(Math.random() * qp)]; // [x, y]

    for (let i = 0; i < walls.length; i++) { // Testa se a nova posição sobrepoe as paredes
        if (position[0] * tp == walls[i].x && position[1] * tp == walls[i].y)
            position = generatesPosition();
    }
    
    for (const snake of snakeList) {        // Testa se a nova posição sobrepoe as cobras
        if(snake.trail.length > 0){
            for (let i = 0; i < snake.trail.length; i++) {

                if (position[0] == snake.trail[i].x && position[1] == snake.trail[i].y 
                || position[0] == snake.trail[i].x - 1 && position[1] == snake.trail[i].y 
                || position[0] == snake.trail[i].x && position[1] == snake.trail[i].y - 1)
                    position = generatesPosition();
            }
        }
        else{   
                if (position[0] == snake.px && position[1] == snake.py)
                    position = generatesPosition();
            }
    }

    if (position[0] == ax && position[1] == ay) // Testa se a nova posição sobrepoe a fruta
        position = generatesPosition();

    if (position[1] > qp - 3 || position[0] > qp - 3) // Testa se a posição da fruta grande sobrepoe as paredes 
        position = generatesPosition();
        
    return position;
}

function setFruitPositions() {
    axy = generatesPosition();
    
    ax = axy[0];
    ay = axy[1];
}

function setGoldFruitPosition() {
    goldxy = generatesPosition();
}

function setSnakePositions() {
    for (const snake of snakeList) {
        axy = generatesPosition();
        
        snake.px = axy[0];
        snake.py = axy[1];
    }
}

function setBigFruitPosition() {
    bigxy = generatesPosition();
}

function setSnakePosition(snake) {
    axy = generatesPosition();
    
    snake.px = axy[0];
    snake.py = axy[1];
}

function setToZeroFruitsPosition(params) {
    goldxy = [-1, -1];
    bigxy = [-1, -1];
}

setSnakePositions();
setFruitPositions();