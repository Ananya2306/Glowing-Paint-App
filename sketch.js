var database;
var drawing = [];
var currentPath = [];
var black , blue , brown , gold , gray , green , lime , orange , pink ;
var purple , red , turquoise , yellow , indigo , lightYellow , darkRed ;

function preload(){
    blackImg = loadImage("Colours/black.png");
    blueImg = loadImage("Colours/blue.png");
    indigoImg = loadImage("Colours/indigo.png");
    brownImg = loadImage("Colours/brown.png");
    goldImg = loadImage("Colours/gold.png");
    grayImg = loadImage("Colours/gray.png");
    greenImg = loadImage("Colours/green.png");
    limeImg = loadImage("Colours/lime.png");
    orangeImg = loadImage("Colours/orange.png");
    pinkImg = loadImage("Colours/pink.png");
    purpleImg = loadImage("Colours/purple.png");
    redImg = loadImage("Colours/red.png");
    turquoiseImg = loadImage("Colours/turquoise.png");
    yellowImg = loadImage("Colours/yellow.png");
    darkRedImg = loadImage("Colours/dark red.png");
    lightYellowImg = loadImage("Colours/light Yellow.png");
}

function setup(){
    var canvas = createCanvas(1300,555);
    canvas.mousePressed(startPath);
    canvas.mouseReleased(endPath);

     var clearButton = select('#clearButton');
    clearButton.mousePressed(clearDrawing);

    black = createSprite(50,520,20,20);
    black.addImage(blackImg);
    black.scale = 0.7;

    indigo = createSprite(120,520,20,20);
    indigo.addImage(indigoImg);
    indigo.scale = 0.7;

    brown = createSprite(190,520,20,20);
    brown.addImage(brownImg);
    brown.scale = 0.7;

    gold = createSprite(260,520,20,20);
    gold.addImage(goldImg);
    gold.scale = 0.7;

    gray = createSprite(330,520,20,20);
    gray.addImage(grayImg);
    gray.scale = 0.7;

    green = createSprite(400,520,20,20);
    green.addImage(greenImg);
    green.scale = 0.7;

    lime = createSprite(470,520,20,20);
    lime.addImage(limeImg);
    lime.scale = 0.7;

    orange = createSprite(540,520,20,20);
    orange.addImage(orangeImg);
    orange.scale = 0.7;

    pink = createSprite(610,520,20,20);
    pink.addImage(pinkImg);
    pink.scale = 0.7;

    purple = createSprite(680,520,20,20);
    purple.addImage(purpleImg);
    purple.scale = 0.7;
    
    turquoise = createSprite(820,520,20,20);
    turquoise.addImage(turquoiseImg);
    turquoise.scale = 0.7;

    yellow = createSprite(750,520,20,20)
    yellow.addImage(yellowImg);
    yellow.scale = 0.7;

    lightYellow = createSprite(890,520,20,20)
    lightYellow.addImage(lightYellowImg);
    lightYellow.scale = 0.7;

    darkRed = createSprite(960,520,20,20);
    darkRed.addImage(darkRedImg);
    darkRed.scale = 0.7;

    red = createSprite(1100,520,20,20);
    red.addImage(redImg);
    red.scale = 0.7;

    blue = createSprite(1030,520,20,20);
    blue.addImage(blueImg);
    blue.scale = 0.7;
}
function startPath(){
    currentPath = [];
    drawing.push(currentPath);
}function endPath(){
    
}
function draw(){
    background(255);

    if(mouseIsPressed) {
        var point = {
            x: mouseX,
            y: mouseY
        }
        currentPath.push(point);
    }
    noFill();
       stroke("black");
      strokeWeight(4)
    if(mousePressedOver(blue)){
        noFill();
       stroke("blue");
      strokeWeight(4);
    }
    if(mousePressedOver(red)){
        noFill();
       stroke("red");
      strokeWeight(4);
    }

    if(mousePressedOver(brown)){
        noFill();
       stroke("brown");
      strokeWeight(4);
    }
    if(mousePressedOver(gold)){
        noFill();
       stroke("gold");
      strokeWeight(4);
    }
    if(mousePressedOver(gray)){
        noFill();
       stroke("gray");
      strokeWeight(4);
    }
    if(mousePressedOver(green)){
        noFill();
       stroke("green");
      strokeWeight(4);
    }

    if(mousePressedOver(lime)){
        noFill();
       stroke("lime");
      strokeWeight(4);
    }
    if(mousePressedOver(orange)){
        noFill();
       stroke("orange");
      strokeWeight(4);
    }
    if(mousePressedOver(pink)){
        noFill();
       stroke("pink");
      strokeWeight(4);
    }
    if(mousePressedOver(purple)){
        noFill();
       stroke("purple");
      strokeWeight(4);
    }

    if(mousePressedOver(turquoise)){
        noFill();
       stroke("turquoise");
      strokeWeight(4);
    }
    if(mousePressedOver(yellow)){
        noFill();
       stroke("yellow");
      strokeWeight(4);
    }
    if(mousePressedOver(indigo)){
        noFill();
       stroke("indigo");
      strokeWeight(4);
    }
    if(mousePressedOver(darkRed)){
        noFill();
       stroke("maroon");
      strokeWeight(4);
    }
    if(mousePressedOver(lightYellow)){
        noFill();
       stroke("wheat");
      strokeWeight(4);
    }
   

    for(var i = 0; i< drawing.length; i++){
        var path = drawing[i];
        beginShape();
        for(var p = 0; p< path.length; p++){
            vertex(path[p].x, path[p].y);
        }
        endShape();
    }
    drawSprites();

}
function clearDrawing() {
    drawing = [];
}


