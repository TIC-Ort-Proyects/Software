document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener("submit", function(event) {
        event.preventDefault();

        let item = document.getElementById("item").value;
        let cant = document.getElementById("number").value;

        var datos = {
            "item": item,
            "cant": cant,
        };

        if(datos.item === "Facturas") {
            var unidad = 200;
            if(datos.cant >= 12) {
                var unidad = 120
            }
            else{
            };
        }
        else {  
        };
        if(datos.item === "Empanaditas y Canastitas") {
            var unidad = 250
        }
        else {  
        };
        if(datos.item === "Masitas Dulces") {
            var unidad = 400
            if(datos.cant >= 9) {
                var unidad = 350
            }
            else{
            };
        }
        else {  
        };

        console.log("El costo de " + cant + " " + item + " son $" + unidad*cant);
        document.getElementById("precio").innerHTML = `El costo de ${cant} ${item} son \$${unidad * cant}`;
        
        document.getElementById("precio").style.display = "flex";
        document.getElementById("precio").style.fontSize = "18px";
        document.getElementById("precio").style.fontWeight = "bold";
        document.getElementById("precio").style.color = "#007bff";
        document.getElementById("precio").style.maxWidth = "400px"
        document.getElementById("precio").style.margin = "auto";
        document.getElementById("precio").style.background = "#fff";
        document.getElementById("precio").style.padding = "20px"
        document.getElementById("precio").style.borderRadius = "10px"
        document.getElementById("precio").style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.1)"
    });
})