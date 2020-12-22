const newGrid = document.querySelector('#new-grid');
const rainbow = document.querySelector('#rainbow');
const container = document.querySelector("#container");
let gridCapacity = 256;
let rgb = randomColor();
let color = false;

function randomColor() {
   let r = Math.round(Math.random() * 255);
   let g = Math.round(Math.random() * 255);
   let b = Math.round(Math.random() * 255);
   return "rgb(" + r + "," + g + "," + b + ")";
}

function createGrid(gridCapacity) {
    let blockSize = 500 / Math.sqrt(gridCapacity);
    for (let i = 0; i < gridCapacity; i++) {
        const div = document.createElement('div');
        div.classList = ("block");
        div.id = (i);
        div.style.height = blockSize + "px";
        div.style.width =  blockSize + "px";
        div.addEventListener('mouseenter', () => {
            if (color == false) {
                div.style.backgroundColor = "black";
            }
            else {
                randomColor();
                rgb = randomColor();
                div.style.backgroundColor = rgb;
            }
        })
        container.appendChild(div);
    }
    console.log(blockSize);
}
createGrid(gridCapacity);

newGrid.addEventListener('click', () => {
    while(container.firstElementChild) {
        container.removeChild(container.firstElementChild);
    }
    let sideBlocks = window.prompt("How many squares per side? (MAX: 100)");
    if (sideBlocks > 100) {
        sideBlocks = 100;
    }
    gridCapacity = sideBlocks * sideBlocks;
    createGrid(gridCapacity);
})

rainbow.addEventListener('click', () => {
    if (color == false) {
        color = true;
    }
    else {
        color = false;
    }
})