const combos = document.getElementById("combos");

while(combos.childElementCount < 8) {
        let optid = combos.childElementCount + 1;
        const opt = document.createElement("option");
        opt.id = "combo" + optid;
        opt.value = optid;
        opt.innerText = "combo " + optid;
        combos.appendChild(opt);
    };

document.getElementById("button").addEventListener("click", function() {
    document.getElementById("elegido").innerText = "combo " + combos.value;
});