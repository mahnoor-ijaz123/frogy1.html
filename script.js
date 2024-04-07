const container = document.getElementById('container');
const totalBoxes = 40;
let frogIndex = Math.floor(Math.random() * totalBoxes);

for (let i = 0; i < totalBoxes; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    if (i === frogIndex) {
        const frog = document.createElement('img');
        frog.src = './frog.png';
        frog.id = 'frog';
        box.appendChild(frog);
    }
    container.appendChild(box);
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowRight':
            moveFrog('right');
            break;
        case 'ArrowLeft':
            moveFrog('left');
            break;
        case 'ArrowUp':
            moveFrog('up');
            break;
        case 'ArrowDown':
            moveFrog('down');
            break;
        default:
            break;
    }
});

function moveFrog(direction) {
    const prevBox = container.children[frogIndex];
    prevBox.innerHTML = '';

    switch (direction) {
        case 'right':
            frogIndex = (frogIndex + 1) % totalBoxes;
            break;
        case 'left':
            frogIndex = (frogIndex - 1 + totalBoxes) % totalBoxes;
            break;
        case 'up':
            frogIndex = (frogIndex - 8 + totalBoxes) % totalBoxes;
            break;
        case 'down':
            frogIndex = (frogIndex + 8) % totalBoxes;
            break;
        default:
            break;
    }

    const currentBox = container.children[frogIndex];
    const frog = document.createElement('img');
    frog.src = './frog.png'; 
    frog.id = 'frog';
    currentBox.appendChild(frog);
}