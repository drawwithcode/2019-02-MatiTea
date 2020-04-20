let textureType = 0;
let sliderSmooth;
let sliderSmoothDefaultValue = 70;

function setup() {
  frameRate(5);
  createCanvas(windowWidth, windowHeight);

  Buttons();
  slider();
}

function draw() {
  background(55, 55, 55);
  pixeledBackground();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
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

function Buttons() {

  this.newButton = function (_xpos, _ypos, _name, _action) {
    const button = createButton(_name);
    button.position(_xpos, _ypos);
    button.addClass("button");
    button.mousePressed(_action);
    return button;
  }

  this.initialize = function () {

    if (windowWidth < 720) {
      let randomButton = this.newButton((width / 2) - (width * 0.5), (height / 5) * 4 - 20, 'RANDOM', function () {
        textureType = 0;
      });

      let noiseButton = this.newButton((width / 2) - (width * 0.15), (height / 5) * 4 - 20, 'NOISE', function () {
        textureType = 1;
      });

      let saveButton = this.newButton((width / 2) + (width * 0.2), (height / 5) * 4 - 20, 'SAVE', function () {
        save("texture.png");
      });
    } else {
      let randomButton = this.newButton((width / 2) - 210, (height / 5) * 4 - 20, 'RANDOM', function () {
        textureType = 0;
      });

      let noiseButton = this.newButton((width / 2) - 60, (height / 5) * 4 - 20, 'NOISE', function () {
        textureType = 1;
      });

      let saveButton = this.newButton((width / 2) + 90, (height / 5) * 4 - 20, 'SAVE', function () {
        save("texture.png");
      });
    }
  }

  this.initialize();
}

function slider() {
  sliderSmooth = createSlider(40, 255, sliderSmoothDefaultValue);
  sliderSmooth.addClass('slider');

  if (windowWidth < 720) {
    sliderSmooth.position((width / 2) - (width / 5), (height / 5) * 4 + 50);
  } else {
    sliderSmooth.position((width / 2) - 210, (height / 5) * 4 + 50);
  }
}