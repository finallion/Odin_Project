const inputField = document.getElementById("input-button");
const parentDiv = document.getElementById("parent");
const button = document.querySelector("button");

inputField.addEventListener('keypress', function (ev) {
    if (ev.key === "Enter") {
        generateDivs();
    }
});

button.addEventListener("click", generateDivs);


function generateDivs() {
    regenerate();

    let times = document.getElementById("input-button").value;

    for (let i = 0; i < times; i++) {
        const divRow = document.createElement("div");
        divRow.className = "row";

        for (let i = 0; i < times; i++) {
            const divInRow = document.createElement("div");
            divInRow.className = "cell";
            divInRow.addEventListener("mouseover", changeColor);
            divRow.appendChild(divInRow);
        }

        parentDiv.appendChild(divRow);
        //document.getElementsByTagName('body')[0].appendChild(divRow);
    }
}

function regenerate() {
    while (parentDiv.firstChild) {
        parentDiv.removeChild(parentDiv.lastChild);
    }
}


function changeColor() {
    this.setAttribute("style", "background-color: lavender")
}


