const darkModeToggle = document.getElementById('darkModeToggle');
const container = document.querySelector('.container');

darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener("submit", function(event) {
        event.preventDefault();

        let participante = document.getElementById("participante").value;
        let nombre = document.getElementById("name").value;
        let telefono = document.getElementById("telefono").value;

        var datos = {
            "persona": participante,
            "nombre": nombre,
            "telefono": telefono,
        };

        console.log(datos);

        var datosJSON = JSON.stringify(datos);

        var registros = JSON.parse(localStorage.getItem('registros')) || [];

        registros.push(datos);

        localStorage.setItem('registros', JSON.stringify(registros));

        console.log("Registros actualizados:", registros);
        
        document.getElementById("title").style.display = "none";
        document.getElementById("subtitle").style.display = "none";
        document.getElementById("formulario").style.display = "none";
        document.getElementById("sendedtitle").style.display = "block";
        document.getElementById("sendedsubtitle").style.display = "block";
    });
});