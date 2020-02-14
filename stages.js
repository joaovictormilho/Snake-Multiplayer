
function stage1() {

    for (let i = 0; i < qp / 2 - 1; i++) {

        walls.push({ 
            x: 0,
            y: i  * tp
        });

        walls.push({ 
            x: (qp - 1) * tp,
            y: i * tp 
        });

        walls.push({ 
            x: i * tp,
            y: 0
        });

        walls.push({
            x: i * tp,
            y: (qp - 1) * tp
        });
    }

    for (let i = qp / 2 + 1; i < qp; i++) {

        walls.push({
            x: 0,
            y: i * tp
        });

        walls.push({
            x: (qp - 1) * tp,
            y: i * tp
        });

        walls.push({
            x: i * tp,
            y: 0
        });

        walls.push({
            x: i * tp,
            y: (qp-1) * tp
        });
    }
    
    // Esquerda
    // Direita
    // Cima
    // Baixo
}

stage1();

function drawWalls() {

    var wallColor = 'lightgray';
    ctx.fillStyle = wallColor;

    for (let i = 0; i < walls.length; i++) {
        ctx.fillRect(walls[i].x,walls[i].y,tp,tp);
    }
}

drawWalls();