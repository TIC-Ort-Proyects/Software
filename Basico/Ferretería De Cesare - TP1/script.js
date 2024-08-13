document.addEventListener("DOMContentLoaded", function() {
    var numerodeprodcuto = 0;
    var precioItem1 = 1000
    var precioItem2 = 1500
    var precioItem3 = 1000
    var precioItem4 = 0.5
    var precioItem5 = 0.75
    var precioItem6 = 1.1
    
    document.getElementById("producto").addEventListener("input", function(event) {
        event.preventDefault();
        let producto = document.getElementById("producto").value;
        if(producto === "tiki tiki" || producto === "destornillador") {
            let producto = "destornillador";
            document.getElementById("subproducto").style.display = "inline";
            document.getElementById("subproducto-label").style.display = "inline"
        } else{
            document.getElementById("subproducto").style.display = "none";
            document.getElementById("subproducto-label").style.display = "none"
        };
    });
    
    document.getElementById("formulario").addEventListener("submit", function(event) {
        event.preventDefault();

        var producto = document.getElementById("producto").value;
        var subproducto = document.getElementById("subproducto").value;
        var cant = document.getElementById("cant").value;
        var precio = 0;

        if(producto === "tiki tiki" || producto === "destornillador") {
            let producto = "destornillador";
            if(subproducto === "plano" || subproducto === "pala") {
                subproducto = "plano";
                precio = precioItem1;
                console.log(precio);
                var numerodeprodcuto = 1;
            } else if (subproducto === "philips" || subproducto === "estrella") {
                subproducto = "philips";
                precio = precioItem2;
                console.log(precio);
                var numerodeprodcuto = 2;
            };
        } else {};

        if(producto === "alicante" || "alicate") {
            producto = "alicate";
            precio = precioItem3;
            console.log(precio);
            var numerodeprodcuto = 3;
        } else {};

        if(producto === "clavo a rosca" || "tornillo") {
            producto = "tornillo";
            precio = precioItem4;
            console.log(precio);
            var numerodeprodcuto = 4;
        } else {};

        if(producto === "cuchuflete" || "arandela") {
            producto = "arandela";
            precio = precioItem5;
            console.log(precio);
            var numerodeprodcuto = 5;
        } else {};

        if(producto === "pituto" || "tarugo") {
            producto = "tarugo";
            precio = precioItem6;
            console.log(precio);
            var numerodeprodcuto = 6;
        } else {};

        document.getElementById("producto" + numerodeprodcuto).style.display = "inline"
        document.getElementById("producto-title-item" + numerodeprodcuto).innerHTML = producto;
        document.getElementById("producto-subtitle-item" + numerodeprodcuto).innerHTML = subproducto;
        document.getElementById("price-item" + numerodeprodcuto).innerHTML = "$" + precio*cant;
        document.getElementById("cant-cart-item" + numerodeprodcuto).value = cant;

        document.getElementById("producto").value = "";
        document.getElementById("subproducto").value = "";
        document.getElementById("cant").value = "";
    });

    document.getElementById("form-cart-item1").addEventListener("input", function() {
        var cantcartitem1 = document.getElementById("cant-cart-item1").value;
        document.getElementById("price-item1").innerHTML = "$" + precioItem1 * cantcartitem1;
    });
    document.getElementById("form-cart-delete1").addEventListener("submit", function() {
        document.getElementById("producto1").style.display = "none";
        cantcartitem1 = 0
    });

    document.getElementById("form-cart-item2").addEventListener("input", function() {
        var cantcartitem2 = document.getElementById("cant-cart-item2").value;
        document.getElementById("price-item2").innerHTML = "$" + precioItem2 * cantcartitem2;
    });
    document.getElementById("form-cart-delete2").addEventListener("submit", function() {
        document.getElementById("producto2").style.display = "none";
        cantcartitem2 = 0
    });

    document.getElementById("form-cart-item3").addEventListener("input", function() {
        var cantcartitem3 = document.getElementById("cant-cart-item3").value;
        document.getElementById("price-item3").innerHTML = "$" + precioItem3 * cantcartitem3;
    });
    document.getElementById("form-cart-delete3").addEventListener("submit", function() {
        document.getElementById("producto3").style.display = "none";
        cantcartitem3 = 0
    });   

    document.getElementById("form-cart-item4").addEventListener("input", function() {
        var cantcartitem4 = document.getElementById("cant-cart-item4").value;
        document.getElementById("price-item4").innerHTML = "$" + precioItem4 * cantcartitem4;
    });
    document.getElementById("form-cart-delete4").addEventListener("submit", function() {
        document.getElementById("producto4").style.display = "none";
        cantcartitem4 = 0
    });

    document.getElementById("form-cart-item5").addEventListener("input", function() {
        var cantcartitem4 = document.getElementById("cant-cart-item5").value;
        document.getElementById("price-item5").innerHTML = "$" + precioItem5 * cantcartitem5;
    });
    document.getElementById("form-cart-delete5").addEventListener("submit", function() {
        document.getElementById("producto5").style.display = "none";
        cantcartitem4 = 0
    });

    document.getElementById("form-cart-item6").addEventListener("input", function() {
        var cantcartitem6 = document.getElementById("cant-cart-item6").value;
        document.getElementById("price-item6").innerHTML = "$" + precioItem6 * cantcartitem6;
    });
    document.getElementById("form-cart-delete6").addEventListener("submit", function() {
        document.getElementById("producto6").style.display = "none";
        cantcartitem6 = 0
    });  
})
