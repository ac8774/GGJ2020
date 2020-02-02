class StatusBar{
    constructor(){
        this.nextTurnButton=new IconButton("ic/next_turn",
                                           584,
                                           8,
                                           function(){});
    }
    
    render(){
        ctx.beginPath();
        ctx.fillStyle="black";
        ctx.rect(0,416,640,64);
        ctx.fill();
        
        ctx.save();
        ctx.translate(0,416);
        
        this.nextTurnButton.render();
        
        ctx.restore();
    }
}
