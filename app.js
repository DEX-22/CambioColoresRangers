
let btnRed,btnBlue,btnBlack,btnWhite,btnGreen,img;

btnRed = document.querySelector("#btnRed");
btnBlue = document.querySelector("#btnBlue");
btnBlack = document.querySelector("#btnBlack");
btnWhite = document.querySelector("#btnWhite");
btnGreen = document.querySelector("#btnGreen");
img = document.querySelector("#imgRanger");

function CambioColor(btn) {
    switch (btn.id) {
        case "btnRed":
            img.src="img/red.png";
            break;
        case "btnBlue":
            img.src="img/blue.png";
            break;
        case "btnBlack":
            img.src="img/black.png";
            break;
        case "btnGreen":
            img.src="img/green.png";
            break;
        case "btnWhite":
            img.src="img/white.png";
            break;
                                            
    }
}