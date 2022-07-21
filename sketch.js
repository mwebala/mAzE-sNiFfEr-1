const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world



function setup() {
  //create the canvas
  createCanvas(1200,400);
  
  //setup
  engine = Engine.create();
  world = engine.world;
 
  //create boxes

  




  
  }


function draw() {
  //set the background
  background(50,50,55);  

  //update the engine
  Engine.update(engine);
   
  //display ground


}

function keyPressed(){
 if(keyCode === 39 ){
  
 
 }
 if(keyCode === 38 ){
  
 
 }
 if(keyCode === 37 ){
  
 
 }
}
