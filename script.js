const dino = document.querySelector(".dino");
const background = document.querySelector(".background");
let pulando = false;
let posicao = 0;

function teclaEspaco(event) {
  if (event.keyCode === 32) {
    console.log("Pressionou o espaço");
    if (!pulando) {
      pulaDino();
    }
  }
}

function pulaDino() {
  pulando = true;
  let subIntervalo = setInterval(() => {
    if (posicao >= 150) {
      clearInterval(subIntervalo);
      //Descendo
      let descIntervalo = setInterval(() => {
        if (posicao <= 0) {
          clearInterval(descIntervalo);
          pulando = false;
        } else {
          posicao -= 20;
          dino.style.bottom = posicao + "px";
        }
      }, 20);
    } else {
      //Subindo
      posicao += 20;
      dino.style.bottom = posicao + "px";
    }
  }, 20);
}

function cacto() {
  const cactus = document.createElement("div");
  let posicaoCactus = 1000;
  let tempoRandomico = Math.random() * 6000;

  cactus.classList.add("cactus");
  cactus.style.left = 1000 + "px";
  background.appendChild(cactus);

  let esqInterval = setInterval(() => {
    // posicaoCactus -= 10;
    // cactus.style.left = posicaoCactus + "px";
    if (posicaoCactus < -60) {
      clearInterval(esqInterval);
      background.removeChild(cactus);
    } else if (posicaoCactus > 0 && posicaoCactus < 60 && posicao < 60) {
      clearInterval(esqInterval);
      document.body.innerHTML = '<h1 class="game-over">Fim do jogo!</h1>';
    } else {
      posicaoCactus -= 10;
      cactus.style.left = posicaoCactus + "px";
    }
  }, 20);

  setTimeout(cacto, tempoRandomico);
}

cacto();

document.addEventListener("keyup", teclaEspaco);
