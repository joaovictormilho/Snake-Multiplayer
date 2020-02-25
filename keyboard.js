
function keyTest(event, snake, left, up, right, down) {
    switch (event.keyCode) {
        case left:
            snake.vx = -1;
            snake.vy = 0;
            snake.keyPressed = left;
            break;
        case up:
            snake.vx = 0;
            snake.vy = -1;
            snake.keyPressed = up;
            break;
        case right:
            snake.vx = 1;
            snake.vy = 0;
            snake.keyPressed = right;
            break;
        case down:
            snake.vx = 0;
            snake.vy = 1;
            snake.keyPressed = down;
            break;
        default:
            break;
    }
}

function keyMove(event, snake, left, up, right, down) {
    if (event.keyCode < 41 && event.keyCode > 36) {
        if (event.keyCode != snake.keyPressed - 2 && event.keyCode != snake.keyPressed + 2) {
            keyTest(event, c1, left, up, right, down);
        }
    }
    else {
        if (event.keyCode != snake.keyPressed + 3 && event.keyCode != snake.keyPressed - 3 && event.keyCode != snake.keyPressed + 4 && event.keyCode != snake.keyPressed - 4) {
            keyTest(event, c2, left, up, right, down);
        }
    }

}

document.onkeydown = function (event) {

    keyMove(event, c1, 37, 38, 39, 40);
    keyMove(event, c2, 65, 87, 68, 83);
    
    if (event.keyCode == 16)
        setBigFruitPosition();  
}
