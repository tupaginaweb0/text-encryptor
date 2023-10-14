/*Conversiones de letras
    e---->enter
    o---->ober
    i---->imes
    a---->ai
    u---->ufat
*/

function encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();

    var txtCifrado = texto.replace(/e/img, "enter");
    var txtCifrado = txtCifrado.replace(/o/igm, "ober");
    var txtCifrado = txtCifrado.replace(/i/igm, "imes");
    var txtCifrado = txtCifrado.replace(/a/igm, "ai");
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

/* Modificadores de texto
     i -> Indica que no se hace differencia entre mayúsculas y minúsculas
     g -> Indica que se busca la expresión en todo el texto
     m -> Indica que se busca la expresión en una cadena multilínea*/

function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();

    var txtCifrado = texto.replace(/enter/img, "e");
    var txtCifrado = txtCifrado.replace(/ober/igm, "o");
    var txtCifrado = txtCifrado.replace(/imes/igm, "i");
    var txtCifrado = txtCifrado.replace(/ai/igm, "a");
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copy() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("¡Se copió!");
}
