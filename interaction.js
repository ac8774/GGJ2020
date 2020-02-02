cvs.addEventListener('mousedown', handleMouseEvent);
cvs.addEventListener('touchstart', handleMouseEvent);
cvs.addEventListener('mousemove', handleMouseEvent);
cvs.addEventListener('mouseup', handleMouseEvent);
cvs.addEventListener('touchend', handleMouseEvent);
document.addEventListener("keydown",handleKeyEvent);

function handleMouseEvent(e){
    e.preventDefault();
    
    var x,y;
    if(false){//e instanceof TouchEvent){
        x = e.changedTouches[0].pageX - cvs.getBoundingClientRect().x;
        y = e.changedTouches[0].pageY - cvs.getBoundingClientRect().y;
    }else{
        x = e.offsetX;
        y = e.offsetY;
    }
    handleMouse(x / screenScale.x, y / screenScale.y, e.type);
}

function handleMouse(x, y, type){
    if(dlg){
        dlg.mouse(x,y,type);
    }else{

    }
}

function handleKeyEvent(e){
    if(e.key=="ArrowLeft"){
        //camxgoal = 640*Math.floor(camx/640-.3);
        camxgoal -= 640
        if(camxgoal < 0) camxgoal = 0;
    }
    if(e.key=="ArrowRight"){
        //camxgoal = 640*Math.ceil(camx/640+.3);
        camxgoal += 640
        if(camxgoal > 640*4) camxgoal = 640*4;
    }
}
