
function renderAll(){
    clearScreen();
    renderBackground();
    if(dlg) dlg.render();
    sb.render();
}


function clearScreen(){
    ctx.setTransform(1,0,0,1,0,0);
    screenScale = {x:cvs.width/640,y:cvs.height/480};
    ctx.scale(cvs.width/640,cvs.height/480);
    ctx.clearRect(0,0,640,480);
}

function drawImage(img,x,y,scale){
    ctx.drawImage(sprites[img],
                  x,
                  y,
                  sprites[img].width*scale,
                  sprites[img].height*scale);
}

function drawImageShadow(img,x,y,shadow){
    if(shadow != 0){
        ctx.shadowColor="#00000044";
        ctx.shadowOffsetX=shadow;
        ctx.shadowOffsetY=shadow;
    }

    ctx.drawImage(sprites[img],x,y);

    if(shadow != 0)
        ctx.shadowColor="#00000000";
}
