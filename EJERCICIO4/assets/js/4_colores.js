//Ejercicio 4//

const father = document.getElementById("container");
const keyBox = document.getElementById("key");

//Sólo los class=box son clickeables//
father.addEventListener("click", (e) => {
    if (e.target && e.target.className == "box") {
        if (e.target.style.background == "black") {
            e.target.style.background = e.target.style.color;
        } else {
            e.target.style.background = "black";
        }
    }
});

//Selección de color//
let color;

const getColor = (key) => {
    if (key === "a") {
        return "pink";
    } else if (key === "s") {
        return "orange";
    } else if (key === "d") {
        return "lightblue";
    } else if (key === "q") {
        return "purple";
    } else if (key === "w") {
        return "grey";
    } else if (key === "e") {
        return "brown";
    } else {
        return "";
    }
};

const paintKey = (color) => {
    keyBox.style.background = color;
};

const addBox = (color) => {
    const newBox = document.createElement("div");
    newBox.setAttribute(
        "style",
        `width: 200px; height: 200px; background: ${color}; border: 2px solid black;`
    );
    father.appendChild(newBox);
};

document.addEventListener("keydown", (e) => {
    const pressedKey = e.key;
    color = getColor(pressedKey);
    if (pressedKey === "a" || pressedKey === "s" || pressedKey === "d") {
        paintKey(color);
    }
    if (pressedKey === "q" || pressedKey === "w" || pressedKey === "e") {
        addBox(color);
    }
});