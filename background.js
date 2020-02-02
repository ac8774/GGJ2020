function initPhysics(){
    setupWorld();
}

var burgertimer = 0;
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
    burgertimer = (burgertimer+1)%60;
    if(burgertimer==0){
        newCircle(1,0,0);
    }
    doPhysics();
    ctx.restore();
}
