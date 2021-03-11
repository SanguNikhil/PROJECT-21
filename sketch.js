var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);

    //create 4 different surfaces
    surface1 = createSprite(20,400,80,20);
    surface1.shapeColor = "blue";

    surface2 = createSprite(120,400,80,20);
    surface2.shapeColor = "orange";

    surface3 = createSprite(240,400,80,20);
    surface3.shapeColor = "brown";

    surface4 = createSprite(360,400,80,20);
    surface4.shapeColor = "green";

    box = createSprite(150,20,20,20);
    box.shapeColor = "black";
    box.velocityY = 4;

    

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites(400,400);

    if(surface1.isTouching(box) &&  box.bounceOff(surface1)){
        box.shapeColor = "blue";
    }

    if(surface2.isTouching(box) &&  box.bounceOff(surface2)){
        box.shapeColor = "orange";
    }

    if(surface3.isTouching(box) &&  box.bounceOff(surface3)){
        box.shapeColor = "brown";
    }

    if(surface4.isTouching(box) &&  box.bounceOff(surface4)){
        box.shapeColor = "green";
    }

    drawSprites();
    //add condition to check if box touching surface and make it box
}
