function initPhysics(){
    setupWorld();
}

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
    drawImage("factory_foreground",0,0,1);
    ctx.restore();
}
