document.addEventListener("DOMContentLoaded", function () {
  const changeSizeButton = document.querySelector("button");
  let gridSize = 16; // initial default size

  createGrid(gridSize);
  changeSizeButton.addEventListener("click", () => adjustGrid());
});

function createGrid(size) {
  let cellCount = size * size;

  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement("div");
    cell.classList.add("grid-cell");

    let randomColor0 = Math.floor(Math.random() * 256);
    let randomColor1 = Math.floor(Math.random() * 256);
    let randomColor2 = Math.floor(Math.random() * 256);
    let currentOpacity = 1;

    cell.style.setProperty("--random-rgb", `169, 177, 214`);
    cell.style.setProperty("--opacity-level", currentOpacity);

    cell.addEventListener("mouseover", function () {
      currentOpacity = Math.max(0.1, currentOpacity - 0.1);
      cell.style.setProperty(
        "--random-rgb",
        `${randomColor0}, ${randomColor1}, ${randomColor2}`,
      );
      cell.style.setProperty("--opacity-level", currentOpacity);
    });

    container.appendChild(cell);
  }
}

function adjustGrid() {
  let size = prompt("Enter grid size (1-100)");

  if (size < 1 || size > 100) {
    alert("Invalid entry, not within (1-100)");
    return;
  }

  container.innerHTML = ""; // reset to initial state
  const setSize = 100 / size + "%";
  container.style.setProperty("--cell-size", setSize);

  createGrid(size);
}
