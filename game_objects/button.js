class Button{
    constructor(x,y,callback){
        this.x = x;
        this.y = y;
        
        this.callback=callback;
        
        this.mouseover=false;
        this.clicked=false;
        
        //Enable button
        this.enabled=true;
    }
    
    updateMouse(x,y){
        if(x>=this.x && x<=this.x+this.w &&
           y>=this.y && y<=this.y+this.h)
           
            this.mouseover=true;
        else{
            this.mouseover=false;
            this.clicked=false;
        }
    }
    
    onClickDown(){
        if(this.enabled && this.mouseover){
           playSound("click_down");
            this.clicked=true;
        }
    }

    onClickUp(){
        if(this.enabled && this.mouseover){
            if(this.clicked)
                this.callback();
            
            playSound("click_up");
            this.clicked=false;
        }
    }
    
    setEnabled(enabled){
        this.enabled=enabled;
    }
}
