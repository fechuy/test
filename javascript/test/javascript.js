function boton() {
    var num1 = parseInt(document.getElementById("num1").value)
    var num2 = parseInt(document.getElementById("num2").value)
    alert(num1 + num2)
}

function myFunction() {
    var x = document.getElementById("parrafo");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function cambiarColor() {
    var seccion = document.getElementById("seccion3");
    seccion.style.backgroundColor = "red";
}

function mayus() {
    var cadena = document.getElementById("nombre");
    cadena.value = cadena.value.toUpperCase();
}

function mayus2() {
    var cadena = document.getElementById("texto");
    cadena.value = cadena.value.toUpperCase();
}

function crearBoton() {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "soy el boton 2";
    btn.style.backgroundColor = "blue";
    btn.style.color = "white";
    document.body.appendChild(btn);
}

setInterval("paginaActiva()", 1);

function paginaActiva() {
    var x = document.getElementById("test");
    if (document.hasFocus()) {
        x.innerHTML = "La pagina esta activa";
    } else {
        x.innerHTML = "La pagina no esta activa";
    }   
}