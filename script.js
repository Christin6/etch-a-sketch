// setup functions
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

// clean the board
function resetContainer() {
    boxesArray.map((element) => {
        element.style.backgroundColor = "#fff";
    });
}

// change board size
function changeContainerSize() {
    let newSize = parseInt(prompt("Input size (1-100):"));
    if (newSize > 0 && newSize <= 100) {
        container.replaceChildren();
        createSketch(newSize);
        // update boxesArray value
        boxes = document.querySelectorAll(".item");
        boxesArray = Array.from(boxes);

    } else {alert("Something is wrong with your input")}
}

// create random color
function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}

function randomRGBColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return `rgb(${r} ${g} ${b})`;
}

// functions to change pen and board background color
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

function changeBgColor(color) {
    boxesArray.map((element) => {
        element.addEventListener("mouseover", changeColor(element, color));
    });
}

// get color pick from user
function customColorPick(type) {
    alert("Please input your color in rgb format. There will be 3 (three) input boxes, please fill in each rgb format. (Example: rgb(0, 10, 255) => Red value: 0 | Green value: 10 | Blue value: 255) Click OK to continue");
    let r = prompt("Red value:");
    let g = prompt("Green value:");
    let b = prompt("Blue value:");
    if ((r>= 0 && r<=255) && (g>= 0 && g<=255) && (b>= 0 && b<=255)) {
        if (type == "pen") {
            changePenColor(`rgb(${r} ${g} ${b})`);
        } else if (type == "bg") {
            changeBgColor(`rgb(${r} ${g} ${b})`);
        }
    } else {
        alert("Something is wrong with your input, please try again");
    }
}

// pen color selection dialog
function openPenColorSelection() {
    penColorSelection.show();
}

function closePenColorSelection() {
    penColorSelection.close();
}

function customPenColorPick() {
    customColorPick("pen");
}

// board background color selection
function openBgColorSelection() {
    customColorPick("bg");
}

// setup
const container = document.querySelector(".container");
createDefaultSketch();
let boxes = document.querySelectorAll(".item");
let boxesArray = Array.from(boxes);

const penColorSelection = document.querySelector("#pen-color-selection");
