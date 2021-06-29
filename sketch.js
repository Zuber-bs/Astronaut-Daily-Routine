// Animations
var bathAnimation;
var brushAnimation;
var drinkAnimation;
var eatAnimation;
var gymAnimation;
var walkAnimation;
var sleepAnimation;

// Background Image
var BGImg;

// Sprites
var astronaut;
var BG;

// Edges
var edges;

function preload() {
	// Animations
	bathAnimation = loadAnimation("bath1.png", "bath2.png");
	brushAnimation = loadAnimation("brush.png");
	drinkAnimation = loadAnimation("drink1.png", "drink2.png");
	eatAnimation = loadAnimation("eat1.png", "eat2.png");
	gymAnimation = loadAnimation("gym1.png", "gym2.png", "gym11.png", "gym12.png");
	walkAnimation = loadAnimation("move.png", "move1.png");
	sleepAnimation = loadAnimation("sleep.png");

	// BG
	BGImg = loadImage("iss.png");
}

function setup() {
	createCanvas(800, 600);
	edges = createEdgeSprites();

	// Astronaut
	astronaut = createSprite(width/2, height/2);
	astronaut.addAnimation("sleep", sleepAnimation);
	astronaut.scale = 0.1;

	// BG
	BG = createSprite(width/2, height/2);
	BG.addImage(BGImg);
	BG.depth = 0;
	BG.scale = 0.2;
}

function draw() {
	background(0);
	drawSprites();

	// Astronaut

	if(keyDown("up")) {
		astronaut.addAnimation("brush", brushAnimation);
		astronaut.changeAnimation("brush");
		astronaut.x = width/2;
		astronaut.y = height/2;
		astronaut.velocityX = 0;
		astronaut.velocityY = 0;
	} else if(keyDown("down")) {
		astronaut.addAnimation("gym", gymAnimation);
		astronaut.changeAnimation("gym");
		astronaut.x = width/2;
		astronaut.y = height/2;
		astronaut.velocityX = 0;
		astronaut.velocityY = 0;
	} else if(keyDown("left")) {
		astronaut.addAnimation("bath", bathAnimation);
		astronaut.changeAnimation("bath");
		astronaut.x = width/2;
		astronaut.y = height/2;
		astronaut.velocityX = 0;
		astronaut.velocityY = 0;
	} else if(keyDown("right")) {
		astronaut.addAnimation("eat", eatAnimation);
		astronaut.changeAnimation("eat");
		astronaut.x = width/2;
		astronaut.y = height/2;
		astronaut.velocityX = 0;
		astronaut.velocityY = 0;
	}

	if(keyDown("m")) {
		astronaut.addAnimation("move", walkAnimation);
		astronaut.changeAnimation("move");
		astronaut.velocityX = 2;
		astronaut.velocityY = 2;
	}

	astronaut.bounceOff(edges[0]);
	astronaut.bounceOff(edges[1]);
	astronaut.bounceOff(edges[2]);
	astronaut.bounceOff(edges[3]);
}