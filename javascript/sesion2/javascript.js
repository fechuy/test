//alert("Este alert es desde un js externo");
function clickBoton() {
    alert("Este es un alert desde un boton y una funcion");
}

function mostrarNumero() {
    document.getElementById("resultado1").innerHTML = "El numero es 13";
}

function ocultarMostrar() {
    var elemento = document.getElementById("cajita2");
    if(elemento.style.display === "none") {
        elemento.style.display = "block";
        elemento.style.backgroundColor = "blue";
        elemento.style.color = "white";
    } else {
        elemento.style.display = "none";
    }
}

function mayusculas() {
    var texto = document.getElementById("txtaMayus");
    var mayus = texto.value.toUpperCase();
    texto.value = mayus;
}