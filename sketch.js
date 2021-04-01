var canvas;
var music,whiteBox,blueSurface,greenSurface,yellowSurface;

function preload(){
    music = loadSound("music.mp3");
   
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    redSurface = createSprite(100,500,90,10);
    greenSurface = createSprite(300,500,90,10);
    blueSurface  = createSprite(500,500,90,10);
    yellowSurface = createSprite(700,500,90,10);


    //create box sprite and give velocity
whiteBox = createSprite(100,200,20,20);

}

function draw() {
    background(0);
    //create edgeSprite

redSurface.display()
{
    fill("red")
};

greenSurface.display();
{
    fill("green")
}
blueSurface.display()
{
fill("blue")
};
yellowSurface.display()
{
    fill("yellow")
};
createSprite();

    //add condition to check if box touching surface and make it box
}
