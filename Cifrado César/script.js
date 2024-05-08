document.getElementById("form").addEventListener("change", function(event) {
    event.preventDefault();

    let palabra = document.getElementById("word").value;
    let clave = parseInt(document.getElementById("number").value);
    let accion = document.getElementById("switch").checked ? "descifrar" : "cifrar";
    let resultadoHTML = document.querySelector(".traductor")

    let resultado = "";
    if (accion === "cifrar") {
        resultado = cifrarCesar(palabra, clave);
    } else {
        resultado = descifrarCesar(palabra, clave);
    }

    console.log("Palabra: ", palabra);
    console.log("Clave: ", clave);
    console.log("Resultado: ", resultado);
    resultadoHTML.textContent = resultado;

});

function cifrarCesar(palabra, clave){ 
    let letra, respuesta='';
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    let cifrado  = alfabeto.slice(-clave) + alfabeto.slice(0, alfabeto.length - clave);
    for(let i = 0; i < palabra.length; i++){  
        letra = palabra[i].toLowerCase();
        if(letra ==' '){
            respuesta += ' ';
        } else if (alfabeto.indexOf(letra) !== -1) {
            letra = cifrado[alfabeto.indexOf(letra)];
            respuesta += letra;
        } else {
            respuesta += letra;
        }
    }
    return  respuesta;
}

function descifrarCesar(palabra, clave){ 
    let letra, respuesta='';
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    let cifrado = alfabeto.slice(-clave) + alfabeto.slice(0, alfabeto.length - clave);
    for(let i = 0; i < palabra.length; i++) { 
        letra = palabra[i].toLowerCase();
        if(letra == ' '){
            respuesta += ' ';
        } else if (alfabeto.indexOf(letra) !== -1) {
            letra = alfabeto[cifrado.indexOf(letra)];
            respuesta += letra;
        } else {
            respuesta += letra;
        }
    }
    return respuesta;
}