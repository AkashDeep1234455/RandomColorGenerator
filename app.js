let btn = document.querySelector("button");
let colorArea = document.querySelector(".colorbox");
let h1 = document.querySelector("h1");

///function to generate random color
function getRandomColor(){
    let R = Math.floor(Math.random()*256);
    let G = Math.floor(Math.random()*256);
    let B = Math.floor(Math.random()*256);

    let output = [`RGB(${R},${G},${B})`,R,G,B];
    return output;
}

////function for working on button on click
function buttonAction(){
    let value = getRandomColor();
    h1.innerText = value[0];
    colorArea.style.backgroundColor= value[0];
    colorArea.innerText = 'This is your new color';
    if(value[1]<45||value[2]<45||value[3]<45){
        colorArea.style.color = "white";
    }else{
        colorArea.style.color = "black";
    }
    btn.style.backgroundColor = value[0];
    if(value[1]<45||value[2]<45||(value[3]<45&&value[3]>14)){
        btn.style.color = "white";
    }else{
        btn.style.color = "black";
    }
}

////adding event listener on button when it is clicked
btn.addEventListener("click", buttonAction);