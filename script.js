function createSketch(size) {
    for (let i=0; i<size**2; i++) {
        let box = document.createElement("div");
        box.className = "item";
        box.style.height = `calc(100% / ${size})`;
        box.style.width = `calc(100% / ${size})`;
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "black";
        });
        container.appendChild(box);
    }
}

function createDefaultSketch() {
    const defaultSize = 16;
    createSketch(defaultSize);
}

function resetContainer() {
    boxesArray.map((element) => {
        element.style.backgroundColor = "#dcdcdc";
    });
}

function changeContainerSize() {
    let newSize = parseInt(prompt("Input size (1-100):"));
    if (newSize > 0 && newSize <= 100) {
        container.replaceChildren();
        createSketch(newSize);
        boxesArray.map((element) => {
            console.log("test");
            element.style.height = `calc(100% / ${newSize})`;
            element.style.width = `calc(100% / ${newSize})`;
        });
    } else {alert("Something is wrong with your input")}
}

function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}


function randomRGBColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return `rgb(${r} ${g} ${b})`;
}

function changeColor(element, color) {
    element.style.backgroundColor = color;
}

function changePenColor(color) {
    if (color == "rainbow") {
        boxesArray.map((element) => {
            element.addEventListener("mouseover", function rainbow() {
                changeColor(element, randomRGBColor());
            });
        });
    } else {
        boxesArray.map((element) => {
            element.addEventListener("mouseover", function normal() {
                changeColor(element, color);
            });
        });
    }
}

function blue() {
    changePenColor("blue");
}

function randomColor() {
    changePenColor(randomRGBColor());
}

function rainbowColor() {
    changePenColor("rainbow");
}

function changeBackgroundColor(color) {
    boxesArray.map((element) => {
        element.addEventListener("mouseover", changeColor(element, color));
    });
}

const container = document.querySelector(".container");
createDefaultSketch();
const boxes = document.querySelectorAll(".item");
const boxesArray = Array.from(boxes);
