
function renderAll(){
    clearScreen();
    renderBackground();
    if(dlg) dlg.render();
}


function clearScreen(){
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(ctx.canvas.width/640, ctx.canvas.height/480)
    ctx.clearRect(0, 0, 640, 480);
}


function drawImage(img,x,y,shadow){
    if(shadow != 0){
        ctx.shadowColor="#00000044";
        ctx.shadowOffsetX=shadow;
        ctx.shadowOffsetY=shadow;
    }

    ctx.drawImage(sprites[img],x,y);

    if(shadow != 0)
        ctx.shadowColor="#00000000";
}
