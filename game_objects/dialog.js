class Dialog{
    constructor(title){
        //Dialog title
        this.title=title; // TODO use this!

        //Coordinates of top-left corner
        this.x=30;
        this.y=30;

        //Initialize pop-up animation
        this.shadow=10;

        this.children=[];
        this.buttons=[];
    }

    render(){
        ctx.save();
        ctx.translate(this.x, this.y);
        drawImageShadow("dialog_background",0,0,this.shadow);
        
        drawImage("dialog_title_background",
                  sprites["dialog_background"].width/2-
                      sprites["dialog_title_background"].width/2,
                  10,
                  1);
        
        ctx.textAlign = "center";
        ctx.font = "30px Arial Black";
        ctx.fillStyle = "#8a532e";
        ctx.fillText(this.title,
                     sprites["dialog_background"].width/2,
                     46);
        
        this.children.forEach(btn => btn.render());
        
        ctx.restore();
    }

    mouse(x,y,type){
        this.buttons.forEach(btn =>
            {btn.updateMouse(x-this.x,y-this.y);
            if(type=="mousedown" || type=="touchstart") btn.onClickDown();
            if(type=="mouseup" || type=="touchend") btn.onClickUp();});
    }
}
