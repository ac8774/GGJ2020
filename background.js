function initPhysics(){
    setupWorld();
}

var burgertimer = 60;
var camera = {
  x: 0,
  y: 0,
  s: 1
};
var world = null;
var g_groundBody;
initPhysics() // put in main

function renderBackground(){
    ctx.save();
    ctx.translate(-camx, 0);
    drawImage("factory_background",0,0,1);
    burgertimer--;
    if(burgertimer==0){
        newBurger();
        burgertimer = Math.floor(60+20*Math.random());
    }
    doPhysics();
    ctx.restore();
}
