class StatusBar{
    constructor(){
        this.x=0;
        this.y=416;

        this.w=640;
        this.h=64;

        this.nextTurnButton=new IconButton("ic/next_turn",
                                           584,
                                           8,
                                           function(){sb.setEnabled(false); endTurn();});
    }

    render(){
        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.rect(this.x,this.y,this.w,this.h);
        ctx.fill();

        ctx.save();
        ctx.translate(this.x,this.y);

        ctx.textAlign = "end";
        ctx.font = "24px Arial Black";
        ctx.fillStyle = "#333333";
        ctx.fillText("NEXT TURN",
                     576,
                     40);
        this.nextTurnButton.render();

        ctx.restore();
    }

    mouse(x,y,type){
        this.nextTurnButton.updateMouse(x-this.x,y-this.y);

        if(type=="mousedown" || type=="touchstart")
            this.nextTurnButton.onClickDown();
        if(type=="mouseup" || type=="touchend")
            this.nextTurnButton.onClickUp();
    }
    
    setEnabled(enabled){
        this.nextTurnButton.setEnabled(enabled);
    }
}
