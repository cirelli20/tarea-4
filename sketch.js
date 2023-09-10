let flowerCenter1;
let flowerCenter2;
let flowerCenter3;
let petalScale1 = 0.1;
let petalScale2 = 0.1;
let petalScale3 = 0.1;
let slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  flowerCenter1 = createVector(width / 4, height / 3);
  flowerCenter2 = createVector(width / 2, height / 2);
  flowerCenter3 = createVector(3 * width / 4, height / 4);
  noStroke();
  // Crea un elemento de entrada de tipo rango (barra deslizante)
  slider = createSlider (0, 1.5, 1.0, 0.01);
  slider.position(10, height + 10);
  slider.style('width', '180px');
}

function draw() {
  background(220, 255, 140);
  // Obtiene el valor del rango y ajusta la escala de los pétalos
  let petalScale = slider.value();

  drawFlower(flowerCenter1, petalScale, 5);
  drawFlower(flowerCenter2, petalScale, 5); // Segunda flor con pétalos más grandes
  drawFlower(flowerCenter3, petalScale, 5); // Tercera flor con pétalos más pequeños
}

function drawFlower(center, scale, numPetals) {
  fill(128, 0,120); // Color rojo para los pétalos

  for (let i = 0; i < numPetals; i++) {
    let angle = TWO_PI / numPetals * i;
    let xOffset = cos(angle) * 30 * scale;
    let yOffset = sin(angle) * 30 * scale;
    ellipse(center.x + xOffset, center.y + yOffset, 60, 60);
  }

  fill(255, 255, 0); // Color amarillo para el centro de la flor
  ellipse(center.x, center.y, 50, 50);
  
}
