//variable to hold socket
var socket;

function setup() {
  createCanvas(600,600);
  background('#123456');
  socket = io.connect('http://localhost:3000');
  // handles messages coming from servere
  socket.on('mouse', newDrawing);
    
}
//event handler for when message comes in
function newDrawing(data){
  noFill();

  for (var i = 0; i < 200; i += 20) {
          stroke (250);
    bezier(data.x-(i/2.0), data.y, 410, 20, 440, 300, 240-(i/16.0), 300+(i/8.0));
  }    
}

function mouseMoved(){
  console.log('Sending: ' + mouseX + ',' + mouseY);

  var data ={
    x: mouseX,
    y: mouseY
  }
  


// the message - name, and what the message data is
  socket.emit('mouse', data);
//  fill(100,100,100,20);
    noFill();
  for (var w = 0; w < 200; w += 20) {
      stroke (0);
    bezier(mouseY-w, mouseX+w, 410, 20, 440, 300, 240-(w/16.0), 300+(w/8.0));
  }    
}



function draw() {


}
