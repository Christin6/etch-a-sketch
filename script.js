const container = document.querySelector(".container");

let size = 30;

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

function resetContainer() {
    const boxes = document.querySelectorAll(".item");
    let boxesArray = Array.from(boxes);
    boxesArray.map((element) => {
        element.style.backgroundColor = "#dcdcdc";
    });
}