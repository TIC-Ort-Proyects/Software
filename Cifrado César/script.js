document.getElementById("form").addEventListener("change", function(event) {
    event.preventDefault();

    let palabrainput = document.getElementById("word").value;
    let palabra = palabrainput.toLowerCase();
    let clave = parseInt(document.getElementById("number").value);
    let accion = document.getElementById("switch").checked ? "descifrar" : "cifrar";
    let resultadoHTML = document.querySelector(".traductor")

    let resultado = "";
    if (accion === "cifrar") {
        resultado = cifrarCesar(palabra, clave);
    } else {
        resultado = descifrarCesar(palabra, clave);
    }

    console.log("Resultado:", resultado);
    resultadoHTML.textContent = resultado;

});

function cifrarCesar(palabra, clave) {
    let resultado = "";
    for (let caracter = 0; caracter < palabra.length; caracter++) {
        let charCode = palabra.charCodeAt(caracter);
        if (charCode >= 97 && charCode <= 122) {
            resultado += String.fromCharCode(((charCode - 97 + clave) % 26) + 97);
        } else {
            resultado += palabra[caracter];
        }
    }
    return resultado;
}

function descifrarCesar(palabra, clave) {
    return cifrarCesar(palabra, 26 - clave);
}
