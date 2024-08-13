let avatar = {
  ropa: 1,
  pelo: 1,
  ojos: 1,
  boca: 1,
  anteojos: 1,
};

function actualizarAvatar() {
  document.getElementById("imgRopa").src = `./img/ropa_${avatar.ropa}.png`;
  document.getElementById("imgPelo").src = `./img/pelo_${avatar.pelo}.png`;
  document.getElementById("imgOjos").src = `./img/ojos_${avatar.ojos}.png`;
  document.getElementById("imgBoca").src = `./img/boca_${avatar.boca}.png`;
  if (avatar.anteojos === "2") {
    document.getElementById("imgAnteojos").style.display = "block"
  } else {
    document.getElementById("imgAnteojos").style.display = "none"
  };
};

document.querySelector(".selectores").addEventListener("change", function(event) {
  event.preventDefault();

  avatar = {
    ropa: document.getElementById("ropa").value,
    pelo: document.getElementById("pelo").value,
    ojos: document.getElementById("ojos").value,
    boca: document.getElementById("boca").value,
    anteojos: document.getElementById("anteojos").value,
  };

  actualizarAvatar();
});