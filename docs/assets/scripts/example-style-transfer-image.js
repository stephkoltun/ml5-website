/*
===
Fast Style Transfer Simple Example
===
*/


let inputImg;
let statusMsg;
let transferBtn;

// Create two Fast Style methods with different pre-trained models
const style1 = new ml5.StyleTransfer('assets/models/wave', modelLoaded);
const style2 = new ml5.StyleTransfer('assets/models/udnie', modelLoaded);

function setup() {
  noCanvas();
  // Status Msg
  statusMsg = select('#statusMsg');

  // Get the input image
  inputImg = select('#inputImg');

  // Transfer Button
  transferBtn = select('#transferBtn')
  transferBtn.mousePressed(transferImages);
}

// A function to be called when the models have loaded
function modelLoaded() {
  // Check if both models are loaded
  if(style1.ready && style2.ready){
    statusMsg.html('Ready!')
  }
}

// Apply the transfer to both images!
function transferImages() {
  statusMsg.html('Applying Style Transfer...!');

  var styleA = style1.transfer(inputImg.elt);
  createImg(styleA.src).parent('styleA');

  var styleB = style2.transfer(inputImg.elt);
  createImg(styleB.src).parent('styleB');

  statusMsg.html('Done!');
}