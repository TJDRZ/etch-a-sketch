const container = document.querySelector("#container") as HTMLDivElement;
const newGrid = document.querySelector("#new-grid") as HTMLButtonElement;
const rainbow = document.querySelector("#rainbow") as HTMLButtonElement;

// Color
let color = false;

function randomColor() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  return "rgb(" + r + "," + g + "," + b + ")";
}

rainbow.addEventListener("click", () => {
  color = !color;
});

// Grid
let gridCapacity = 256;

function createGrid(gridCapacity: number) {
  const blockSize = 500 / Math.sqrt(gridCapacity);
  for (let i = 0; i < gridCapacity; i++) {
    const div = document.createElement("div");
    div.classList.add("block");
    div.style.height = blockSize + "px";
    div.style.width = blockSize + "px";
    div.addEventListener("mouseenter", () => {
      !color
        ? (div.style.backgroundColor = "black")
        : (div.style.backgroundColor = randomColor());
    }); 
    container.appendChild(div);
  }
}

newGrid.addEventListener("click", () => {
    while (container.firstElementChild) {
        container.removeChild(container.firstElementChild);
    }
    let sideBlocks = window.prompt("How many squares per side?");
    if (!sideBlocks?.match(/^\d$/)) sideBlocks = "16";
    gridCapacity = parseInt(sideBlocks) * parseInt(sideBlocks);
    createGrid(gridCapacity);
});

// Start
createGrid(gridCapacity);
