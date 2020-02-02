class InfoBox{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    updateInfo(image,title,flavorText){
        this.image=image;
        this.title=title;
        this.flavorText=flavorText;
    }

    render(){
        ctx.save();
        ctx.translate(this.x, this.y);
        drawImage("info_box_background",0,0,1);

        if(typeof this.image != "undefined"){
            drawImage(this.image,12,12,1.7);

            ctx.textAlign="start";
            ctx.fillStyle="#333333";

            ctx.font="16px Arial Black";
            ctx.fillText(this.title,
                         78,
                         25);

            ctx.font="12px Arial";
            var flavors = this.flavorText.split("\n");
            ctx.fillText(flavors[0],
                         78,
                         45);
            if(flavors[1])
            ctx.fillText(flavors[1],
                         78,
                         63);
            if(flavors[2])
            ctx.fillText(flavors[2],
                         78,
                         81);

        }

        /*drawImage("dialog_title_background",
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

        this.buttons.forEach(btn => btn.render());*/

        ctx.restore();
    }
}
