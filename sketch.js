let textureType = 0;
let sliderSmooth;
let sliderSmoothDefaultValue = 70;

function setup() {
  frameRate(5);
  createCanvas(windowWidth, windowHeight);

  buttons();
  slider();
}

function draw() {
  background(55, 55, 55);
  pixeledBackground();
}

function pixeledBackground() {
  let squareSize = 32;

  for (let x = 0; x < width; x += squareSize) {
    for (let y = 0; y < height; y += squareSize) {
      let randomColor;

      if (textureType == 0) {
        randomColor = sliderSmooth.value() * random();
      } else {
        randomColor = sliderSmooth.value() * noise(0.01 * (10 * frameCount + x), 0.01 * y);
      }

      fill(45, randomColor, 135);

      noStroke();
      rect(x, y, squareSize, squareSize);
    }
  }
}

function buttons() {
  let buttonPosY = (height / 5) * 4 - 20;

  let buttonRandom = createButton('RANDOM');
  buttonRandom.position((width / 2) - 210, buttonPosY);
  buttonRandom.style('width', '120px');
  buttonRandom.style('height', '40px');
  buttonRandom.style('font-size', '14px');
  buttonRandom.style('font-weight', 'bold');
  buttonRandom.style('background', 'white');
  buttonRandom.style('border', '0');
  buttonRandom.mousePressed(function() {
    textureType = 0;
  });

  let buttonNoise = createButton('NOISE');
  buttonNoise.position((width / 2) - 60, buttonPosY);
  buttonNoise.style('width', '120px');
  buttonNoise.style('height', '40px');
  buttonNoise.style('font-size', '14px');
  buttonNoise.style('font-weight', 'bold');
  buttonNoise.style('background', 'white');
  buttonNoise.style('border', '0');
  buttonNoise.mousePressed(function() {
    textureType = 1;
  });

  let buttonSave = createButton('SAVE');
  buttonSave.position((width / 2) + 90, buttonPosY);
  buttonSave.style('width', '120px');
  buttonSave.style('height', '40px');
  buttonSave.style('font-size', '14px');
  buttonSave.style('font-weight', 'bold');
  buttonSave.style('background', 'white');
  buttonSave.style('border', '0');
  buttonSave.mousePressed(function() {
    save("texture.png");
  });
}

function slider() {
  sliderSmooth = createSlider(40, 255, sliderSmoothDefaultValue);
  sliderSmooth.position((width / 2) - 210, (height / 5) * 4 + 50);
  sliderSmooth.style('margin', '0');
  sliderSmooth.style('width', '420px');
}
