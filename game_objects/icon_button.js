class IconButton extends Button{
    constructor(icon,x,y,callback){
        super(x,y,callback);
        
        //Button icon
        this.icon=icon;
        this.iconOffset=0;

        //Coordinates of top-left corner
        this.w = sprites["icon_button"].width;
        this.h = sprites["icon_button"].height;
        
        //Button image
        this.background="icon_button";
    }

    render(){
        if(this.mouseover && this.clicked){
            this.background="icon_button_pressed";
            this.iconOffset=4;
        }else{
            this.background="icon_button";
            this.iconOffset=0;
        }
        
        drawImage(this.background,this.x,this.y,1);
        drawImage(this.icon,
                  this.x+this.iconOffset+6,
                  this.y+this.iconOffset+6,
                  1);
    }
}
