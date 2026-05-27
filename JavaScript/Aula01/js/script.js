document.getElementById("demo").innerHTML = "Pedrão";

function aumentar() {
    document.getElementById("demo").style.fontSize = "35px";
}

function diminuir() {
    document.getElementById("demo").style.fontSize = "15px";
}

function ligar() {
    document.getElementById("lampada").src = "img/acesa.png";
}

function desligar() {
    document.getElementById("lampada").src = "img/apagada.png";
}