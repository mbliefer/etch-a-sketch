const slider = document.querySelector('.slider');
const pixels = document.querySelector('.pixels');
const grid = document.querySelector('.grid');
let gridWidth = parseFloat(getComputedStyle(grid).width);
console.log(gridWidth / 2);
let side;
let squares = document.createElement('div');

let squareSize;


//create square grid after moving slide
slider.addEventListener('change', gridSquares); 
//display grid layout (ie. 16 x 16)
slider.addEventListener('change', () => pixels.textContent = `${slider.value} x ${slider.value}`);

slider.addEventListener('change', setSquareSize);
//change p output after moving slider

function setSquareSize(e) {
    side = e.target.value;
    squareSize = gridWidth / side;
    console.log(squareSize)
    console.log(gridWidth);
    console.log(side);
    return squareSize;

}


function gridSquares(e) {
    grid.innerHTML = '';
    setSquareSize(e);
    for (let i = 0; i < slider.value; i++) {
        for (let j = 0; j < slider.value; j++) {
            squares = document.createElement('div');
            squares.classList.add('squares');
            squares.style.width = squareSize + "px";
            squares.style.height = squareSize + "px";
            squares.textContent = `${i + 1}`;
            squares.style.border = "none";
            grid.appendChild(squares);
        }
    }
}