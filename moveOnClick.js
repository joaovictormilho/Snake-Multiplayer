var left = document.getElementById('btnLeft');
var up = document.getElementById('btnUp');
var down = document.getElementById('btnDown');
var right = document.getElementById('btnRight');

left.onclick = function () {
    c1.vx = -1;
    c1.vy = 0;
    c1.keyPressed = 37;
}

up.onclick = function () {
    c1.vx = 0;
    c1.vy = -1;
    c1.keyPressed = 38;
}

down.onclick = function () {
    c1.vx = 0;
    c1.vy = 1;
    c1.keyPressed = 40;
}

right.onclick = function () {
    c1.vx = 1;
    c1.vy = 0;
    c1.keyPressed = 39;
}