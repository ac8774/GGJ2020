class Dialog{
    constructor(title){
        //Dialog title
        this.title=title; // TODO use this!

        //Coordinates of top-left corner
        this.x=30;
        this.y=600;

        this.targety=30;
        this.callback = function(){};

        //Initialize pop-up animation
        this.shadow=10;

        this.children=[];
        this.buttons=[];
    }

    render(){
        this.y -= Math.sign(this.y - this.targety)*Math.pow(Math.abs(this.y - this.targety), 0.8) * 0.25;
        if(Math.abs(this.y-this.targety)<1) this.y = this.targety;
        if(this.y<-550){
            dlg = undefined;
            this.callback();
        }
        ctx.save();
        ctx.translate(this.x,this.y);

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

    destroy(callback){
        this.targety = -600;
        this.callback = callback;
    }
}
