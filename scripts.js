let grid = document.querySelector(".canvas");
const resetButton = document.querySelector("#reset");
let range = document.querySelector(".range");

// Populate canvas with boxes
createGrid = (length) => {
    grid.style.setProperty( "grid-template-columns", `repeat(${length}, 1fr)` );
    grid.style.setProperty( "grid-template-rows", `repeat(${length}, 1fr)` );

    let area = length*length;
    for (let i = 0; i < area; i++) {
      const div = document.createElement("div");
      div.classList.add("blank");
      grid.appendChild(div);
    }
};

// Shade boxes on hover
const square = document.querySelector("div");
square.addEventListener("mouseover", function(event) {
  event.target.classList.replace("blank", "filled");
});


// update bubble value
const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach((wrap) => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => setBubble(range, bubble));

  // setting bubble on DOM load
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min || 16;
  const max =  range.max || 100;
  const offset = Number(((val - min) * 100) / (max - min));

  bubble.textContent = val;

  // yes, 14px is a magic number
  bubble.style.left = `calc(${offset}% - 14px)`;
}

// Update the grid as slider is moved
function updateGrid() {
    grid.innerHTML = "";
    createGrid(range.value);
}  

/* function alter(range, bubble) {
    setBubble(range, bubble);
    updateGrid(range.value);
} */


createGrid(16);
range.addEventListener("input", () => updateGrid(range.value));
