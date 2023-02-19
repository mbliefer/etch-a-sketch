const slider = document.querySelector('.slider');
const pixels = document.querySelector('.pixels');
const grid = document.querySelector('.grid');
const erase = document.querySelector('#erase')
const black = document.querySelector('.black');
const random = document.querySelector('.random');
const btns = document.querySelectorAll('.btn');
let gridWidth = parseFloat(getComputedStyle(grid).width);
let side;
let squareSize;
let currentColor = 'black';

window.addEventListener('load', () => {
    squareSize = gridWidth / 16;
    black.style.transform = 'scale(1.1)';
    gridSquares();
    return pixels.textContent = `${slider.value} x ${slider.value}`;
});

const eraseGrid = () => gridSquares();
erase.addEventListener('click', eraseGrid);

const randomNumber = (max) => Math.floor(Math.random() * (max + 1));
const colorBlack = (e) => e.target.style.backgroundColor = "black";

function colorRandom(e) {
    let r = randomNumber(255);
    let g = randomNumber(255);
    let b = randomNumber(255);
    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

//1. listen for slider change
//2. set the size of each square 
//3. setup grid according to size of squares
//4. display grid layout above slider (ie. 16 x 16)
slider.addEventListener('change', (e) => {
    setSquareSize(e);
    gridSquares();
    return pixels.textContent = `${slider.value} x ${slider.value}`;
});

function transformButtons(e) {
    this.style.transform = 'scale(1.1)';
    currentColor = this.id;
    if (currentColor !== 'black') {
        black.style.transform = null;
    }
    if (currentColor !== 'random') {
        random.style.transform = null;
    }
}

btns.forEach((btn) => {
    btn.addEventListener('click', transformButtons)
});

function setSquareSize(e) {
    side = e.target.value;
    squareSize = gridWidth / side;
    return squareSize;
}

// let mouseDown = false
// document.body.onmousedown = () => (mouseDown = true)
// document.body.onmouseup = () => (mouseDown = false)

function gridSquares() {
    grid.innerHTML = '';
    for (let i = 0; i < slider.value; i++) {
        for (let j = 0; j < slider.value; j++) {
            let squares = document.createElement('div');
            squares.classList.add('squaress');
            squares.style.width = squareSize + "px";
            squares.style.height = squareSize + "px";
            squares.style.border = "none";
            grid.appendChild(squares);
            // squares.addEventListener('mouseover', startDrawing);
            squares.addEventListener('mouseover', (e) => {
                if (e.buttons == 1) startDrawing(e);
            });
            // squares.addEventListener('mouseover', startDrawing);
            // squares.addEventListener('mousedown', startDrawing);
        }
    }
}

function startDrawing(e) {
    // if (e.type === 'mouseover' && !mouseDown) return
    if (currentColor == 'black') {
        colorBlack(e);
    } else {
        colorRandom(e);
    }
}