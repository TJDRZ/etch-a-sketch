const newGrid = document.querySelector('#new-grid');
const container = document.querySelector("#container");
let gridCapacity = 256;

function createGrid(gridCapacity) {
    let blockSize = 500 / Math.sqrt(gridCapacity);
    for (let i = 0; i < gridCapacity; i++) {
        const div = document.createElement('div');
        div.classList = ("block");
        div.id = (i);
        div.style.height = blockSize + "px";
        div.style.width =  blockSize + "px";
        container.appendChild(div);
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = "black";
        })
    }
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

