
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function changeBackgroundColor() {
    var color = getRandomColor();
    document.body.style.backgroundColor = color;
}


var changeColorButton = document.getElementById("changeColorButton");
changeColorButton.addEventListener("click", changeBackgroundColor);


const year = new Date().getFullYear();
document.querySelector(".footer p").innerHTML = `&copy;${year} - COPYRIGHT - NO TOXIC ZONE S.A. TODOS OS DIREITOS RESERVADOS.`;
