const squareYes = document.querySelector(".yes-square");
const squareNo = document.querySelector(".no-square");
const boxContent= document.querySelector(".text");
let count = 0
let yesCount = 0
let noCount = 0


// Event Listeners
squareYes.addEventListener("click", () => {
    console.log("yes clicked");
    yesCount++;
    count++;
    resizeBars();
});

squareNo.addEventListener("click", () => {
    console.log("no clicked");
    noCount++;
    count++;
    resizeBars();
});

// Functions
function resizeBars() {
    const yesPercent = (yesCount / count) * 100;
    const noPercent = (noCount / count) * 100;
    console.log(yesPercent);
    console.log(noPercent);
    squareYes.style.width = yesPercent + "%";
    squareNo.style.width = noPercent + "%";
    squareYes.textContent = yesPercent + "% say yes";
    squareNo.textContent = noPercent + "% say no";
    
    // Set background colors consistently
    squareYes.style.backgroundColor = "hsl(214, 92%, 71%)";
    squareNo.style.backgroundColor = "hsl(0, 66%, 59%)";
       // Apply font size directly
       document.querySelectorAll(".text").forEach(span => {
        span.style.fontSize = "5px";
    });
}
