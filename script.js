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

const randomNumber = () => Math.floor(Math.random()*256);

const changeColour = function(object) {

    object.style.cssText = `background-color: rgba(${randomNumber()}, ${randomNumber()}, ${randomNumber()}, 0.7);`;
};

const resetPixels = function (object) {
    object.style.cssText = `background-color: rgba(0, 0, 0, 0.0);`;
}

let x = 0;
let y = 0;

for (x = 0; x < dimensions; x++){
    const row = document.createElement("div");
    row.classList.add("row")
    for (y = 0; y < dimensions ; y++) {
        const pixel = document.createElement("p");
        pixel.classList.add("pixel")
        pixel.setAttribute('id', `${x}${y}`)
        row.appendChild(pixel);
    }
   
    
container.appendChild(row);}

const pixels = document.querySelectorAll("p");
console.log(pixels);
pixels.forEach(pixel => pixel.addEventListener('mouseover', () => changeColour(pixel)));

const resetButton = document.getElementById("reset");
console.log(resetButton);
resetButton.addEventListener('click', () => pixels.forEach(element => resetPixels(element)));

