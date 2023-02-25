const container = document.getElementById("mainContainer");


console.log(container);
let dimensions = 30;
while (true){
    dimensions = prompt("Please add grid dimensions","");
    console.log(typeof dimensions);
    if (dimensions < 1 || dimensions > 100) {
        alert("Please enter a number between 1 and 100!")
    } else {
        break;
    }

};

const changeColour = function(object) {
    object.classList.add("changed");
};

const resetPixels = function (object) {
  object.classList.remove("changed");
}


for (let i = 0; i < dimensions; i++){
    const row = document.createElement("div");
    row.classList.add("row")
    for (let i = 0; i < dimensions ; i++) {
        const pixel = document.createElement("p");
        pixel.classList.add("pixel")
        row.appendChild(pixel);
    }
   
    
container.appendChild(row);}

const pixels = document.querySelectorAll("p");
console.log(pixels);
pixels.forEach(pixel => pixel.addEventListener('mouseover', () => changeColour(pixel)));

const resetButton = document.getElementById("reset");
console.log(resetButton);
resetButton.addEventListener('click', () => pixels.forEach(element => resetPixels(element)));