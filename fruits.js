var axy = [];
var ax, ay;
var goldxy = [-1, -1];

function superFruit() {
    var select = 0; //Math.floor(Math.random() * 2);

    switch (select) {
        case 0:
            setGoldFruitPosition();
            break;
        case 1:

            break;

        default:
            break;
    }
}

setInterval(superFruit, 20000);