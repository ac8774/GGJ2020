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

    sb.mouse(x,y,type);
}

function handleKeyEvent(e){
    /*
    if(e.key=="ArrowLeft"){
        //camxgoal = 640*Math.floor(camx/640-.3);
        camxgoal -= 640
        if(camxgoal < 0) camxgoal = 0;
        playSound("swipe");
    }
    if(e.key=="ArrowRight"){
        //camxgoal = 640*Math.ceil(camx/640+.3);
        camxgoal += 640
        if(camxgoal > 640*4) camxgoal = 640*4;
        playSound("swipe");
    }
    */
    if(e.key=="f")
    {
        heading.hidden = !heading.hidden;
        fullscreen = !fullscreen;
        if(!fullscreen){
            gameCanvas.width = 720;
            gameCanvas.height = 540;
        }
    }
}

function gotoPage(n, callback){
    camxgoal = (n-1)*640;
    playSound("swipe");
    if(callback)
    camcallback = callback;
}


function endTurn(){
    playSound("bell");
    sb.setNextTurnEnabled(false);
    dlg.destroy(function(){
        gotoPage(5,function(){
            playSound("truck_drive_away");
            setTimeout(function(){
                dlg = new SummaryDialog();
            }, 3000)
        })
    })
}

function startTurn(){
    dlg.destroy(function(){
        gotoPage(3,function(){
            dlg = new ProductionDialog();
            sb.setMoneyEnabled(true);
            sb.setNextTurnEnabled(true);
        })
    })
}

function credits(){
    dlg.destroy(function(){
        dlg = new CreditsDialog();
    })
}
