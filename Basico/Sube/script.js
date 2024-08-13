document.addEventListener("DOMContentLoaded", function() { //comenzar cuando cargue todo
        document.getElementById("form").addEventListener("input", function() { //verificar si se modifica algo en el form
            let distance = document.getElementById("kilometros").value; //obtener valores de los selector
            let registrada = document.getElementById("registrada").checked; //obtener valores del check

            let tarifa = { //juntar ambos valores
                "kilometros": distance,
                "registrada": registrada,
            };
            console.log(tarifa) //imprimir los valores
            
            //ver cuanto sale dependiendo la distancia
            if(tarifa.kilometros === "kilometros1") { //km1
                var precio = 270
            } 
            else {
            };
            if(tarifa.kilometros === "kilometros2") { //km2
                var precio = 300.78
            } 
            else {
            };
            if(tarifa.kilometros === "kilometros3") { //km3
                var precio = 323.95
            } 
            else {
            };
            if(tarifa.kilometros === "kilometros4") { //km4
                var precio = 347.15
            } 
            else {
            };
            if(tarifa.kilometros === "kilometros5") { //km5
                var precio = 370.18
            } 
            else {
            };

            //ver si la sube esta verificada
            if(tarifa.registrada === false) {
                var precio = precio * 1.59
            }
            else {
            };

            console.log("El costo de tu viaje es de $" + precio.toFixed(2));
            document.getElementById("tarifa").innerHTML = "La tarifa del viaje son $" + precio.toFixed(2);
            document.getElementById("tarifa").style.display = "block";
        })
})