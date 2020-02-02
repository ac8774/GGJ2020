class TextButton extends Button{
    constructor(text,x,y,callback,wide=false){
        super(x,y,callback);
        
        //Button text
        this.text=text;
        this.textOffset=0;
        
        //Wide button boolean
        this.wide=wide;

        //Coordinates of top-left corner
        this.w = sprites["text_button"].width;
        this.h = sprites["text_button"].height;
        
        //Button image
        this.background="text_button";
    }

    render(){
        if(this.mouseover && this.clicked){
            this.background=
                this.wide?"wide_text_button_pressed":"text_button_pressed";
            this.textOffset=4;
        }else{
            this.background=this.wide?"wide_text_button":"text_button";
            this.textOffset=0;
        }
        
        drawImage(this.background,this.x,this.y,1);
        ctx.textAlign = "center";
        ctx.font = "26px Arial Black";
        ctx.fillStyle = "#999999";
        ctx.fillText(this.text,
                     this.x+this.textOffset+this.w/2,
                     this.y+this.textOffset+this.h/2+8);
    }
}
