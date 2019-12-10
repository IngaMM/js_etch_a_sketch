const reset = document.querySelector("#createGrid");

reset.addEventListener("click", deleteAndRecreate);

function deleteAndRecreate() {
  removeElementsByClass("square");
  let size = prompt("Squares per side of the grid?", "");
  createGrid(size);
}

function createGrid(n) {
  let pxSize = Math.floor(960 / n);

  for (i = 1; i <= n * n; i++) {
    addSquare(pxSize);
  }
  const squareForColor = document.querySelectorAll(".square");
  squareForColor.forEach(square => {
    square.addEventListener("mouseover", addColor);
  });
}

function addSquare(pxSize) {
  const container = document.querySelector("#sketchPad");
  const square = document.createElement("div");
  square.classList.add("square");
  square.style.width = pxSize + "px";
  square.style.height = pxSize + "px";
  container.appendChild(square);
}

function addColor() {
  this.classList.add("color");
  let rand = Math.random();
  let randColor = rand * 360;
  this.style.backgroundColor = "hsl(" + randColor + ", 100%, 50%)";
}

function removeElementsByClass(className) {
  var elements = document.getElementsByClassName(className);
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}
