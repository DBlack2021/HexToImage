const width = 7;
const height = 7;
const bitPerPixel = 6; //Keep as 6 - typical hexadecimal. Technically can change but shhhhhhhhhhhhhhhhhhhhhhh no i dont want to implement that right now


let hex = "00000000000000000000000000000000000000000000000000000000BCD400000000BCD400000000000000000000000000BCD400000000BCD4000000000000000000000000000000000000000000000000000000000000B71C1C000000000000000000B71C1C000000000000000000B71C1CB71C1CB71C1CB71C1C000000000000000000000000000000000000000000000000"
let formattedHex = hex.toUpperCase();

//console.log(binArray);

function hexStringToArray(txt) {
  var result = [];
  for (var i = 0; i < txt.length; i += bitPerPixel) {
    result.push(txt.substr(i, bitPerPixel));
  }
  return result;
}

hexArray = hexStringToArray(formattedHex);
console.log(hexArray);

function setup() {
  noStroke();
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(220);
  var count = 0;
  for (var i = 0; i < height; i++) {
    for(var j = 0; j < width; j++) {
      fill("#" + hexArray[count]);

      rect(400/width * j, 400/height * i, 400/width, 400/height);
      count++;
    }
  }
}
