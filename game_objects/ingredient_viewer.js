class IngredientViewer{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    
    render(){
        drawImage("ingredient_viewer_background",this.x,this.y,1);
    }
    
    mouse(x,y,type){
        /*this.nextTurnButton.updateMouse(x-this.x,y-this.y);
        
        if(type=="mousedown" || type=="touchstart")
            this.nextTurnButton.onClickDown();
        if(type=="mouseup" || type=="touchend")
            this.nextTurnButton.onClickUp();*/
    }
}
