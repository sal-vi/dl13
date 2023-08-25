//EJERCICIO 3//

const element = document.getElementById("ele1");

function pintar(htmlElement, color = "green") {
    if (htmlElement.style.backgroundColor != color) {
        htmlElement.style.backgroundColor = color;
    } else {
        htmlElement.style.backgroundColor = "white";
    }
}

element.addEventListener("click", (e) => {
    pintar(e.target, "yellow");
});