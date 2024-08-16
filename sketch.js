let raqueteAltura = 100;
let raqueteLargura = 10;
let raqueteEsquerdaY;
let raqueteDireitaY;
let raqueteVelocidade = 10;

let bolaX;
let bolaY;
let bolaDiametro = 20;
let bolaVelocidadeX = 5;
let bolaVelocidadeY = 5;

function setup() {
  createCanvas(800, 400);
  raqueteEsquerdaY = height / 2 - raqueteAltura / 2;
  raqueteDireitaY = height / 2 - raqueteAltura / 2;
  bolaX = width / 2;
  bolaY = height / 2;
}

function draw() {
  background(0);

  // Desenhar raquetes
  fill(255);
  rect(10, raqueteEsquerdaY, raqueteLargura, raqueteAltura);
  rect(width - 20, raqueteDireitaY, raqueteLargura, raqueteAltura);

  // Desenhar bola
  ellipse(bolaX, bolaY, bolaDiametro, bolaDiametro);

  // Mover bola
  bolaX += bolaVelocidadeX;
  bolaY += bolaVelocidadeY;

  // Verificar colisão com paredes superior e inferior
  if (bolaY < 0 || bolaY > height) {
    bolaVelocidadeY *= -1;
  }

  // Verificar colisão com as raquetes
  if (
    (bolaX - bolaDiametro / 2 < 20 &&
      bolaY > raqueteEsquerdaY &&
      bolaY < raqueteEsquerdaY + raqueteAltura) ||
    (bolaX + bolaDiametro / 2 > width - 20 &&
      bolaY > raqueteDireitaY &&
      bolaY < raqueteDireitaY + raqueteAltura)
  ) {
    bolaVelocidadeX *= -1;
  }

  // Verificar pontuação
  if (bolaX < 0 || bolaX > width) {
    bolaX = width / 2;
    bolaY = height / 2;
    bolaVelocidadeX *= -1;
  }

  // Mover raquete esquerda
  if (keyIsDown(87) && raqueteEsquerdaY > 0) {
    raqueteEsquerdaY -= raqueteVelocidade;
  }
  if (keyIsDown(83) && raqueteEsquerdaY < height - raqueteAltura) {
    raqueteEsquerdaY += raqueteVelocidade;
  }

  // Mover raquete direita
  if (keyIsDown(UP_ARROW) && raqueteDireitaY > 0) {
    raqueteDireitaY -= raqueteVelocidade;
  }
  if (keyIsDown(DOWN_ARROW) && raqueteDireitaY < height - raqueteAltura) {
    raqueteDireitaY += raqueteVelocidade;
  }
}
