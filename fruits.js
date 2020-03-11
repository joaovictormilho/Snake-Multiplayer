
var axy = [];
var ax, ay;
var goldxy = [-1, -1];
var bigxy = [-1, -1];
var testxy = [-1, -1];

function superFruit() {

    let select = Math.floor(Math.random() * 10);

    if (select == 0)
        setGoldFruitPosition();
    else if (select > 0)
        setBigFruitPosition();

    setTimeout(setToZeroFruitsPosition,3000);
}

setInterval(superFruit, 10000);