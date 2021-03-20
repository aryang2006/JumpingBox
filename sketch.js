var canvas;
var music;
var box;
var s1, s2, s3, s4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    edge1 = createSprite(0,300,1,600)
    edge2 = createSprite(400,0,800,1)
    edge3 = createSprite(800,300,1,600)
    //create 4 different surfaces

    s1 = createSprite(100,570,180,15)
    s1.shapeColor = "red"

    s2 = createSprite(300,570,180,15)
    s2.shapeColor = "blue"

    s3 = createSprite(500,570,180,15)
    s3.shapeColor = "green"

    s4 = createSprite(700,570,180,15)
    s4.shapeColor = "yellow"


    //create box sprite and give velocity

    box = createSprite(random(20, 750), 300, 30, 30)
    box.velocityX = 5
    box.velocityY = -5
    box.shapeColor = "white"


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    createEdgeSprites()
    box.bounceOff(edge1)
    box.bounceOff(edge2)
    box.bounceOff(edge3)
    box.bounceOff(s1)
    box.bounceOff(s3)
    box.bounceOff(s4)
    box.collide(s2)

    //add condition to check if box touching surface and make it box

    if (box.x < 200 && box.y > 545) {
        box.shapeColor = "red"
    }
    if (box.x > 400 && box.x < 600 && box.y > 545) {
        box.shapeColor = "green"
    }
    if (box.x > 600 && box.y > 545) {
        box.shapeColor = "yellow"
        music.play()
    }
    if(box.x > 200 && box.x < 400 && box.y > 545) {
        box.velocityX = 0
        box.velocityY = 0
        box.shapeColor = "blue"
        music.stop()
    }

    drawSprites()
}
