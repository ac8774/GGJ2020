class IngredientViewer{
    constructor(x,y,i){
        this.x=x;
        this.y=y;
        this.i = i;
    }

    render(){
        var r = recipeList();
        if(r.length>this.i){
            drawImage("ingredient_viewer_background",this.x,this.y,1);
            drawImage(ingredientImgName(r[this.i]),this.x,this.y,1)
            ctx.textAlign="start";
            ctx.fillStyle="#333333";
            ctx.font="16px Arial Black";
            ctx.fillText(recipe[r[this.i]],this.x+38,this.y+22);

        }
    }

    mouse(x,y,type){
        /*this.nextTurnButton.updateMouse(x-this.x,y-this.y);

        if(type=="mousedown" || type=="touchstart")
            this.nextTurnButton.onClickDown();
        if(type=="mouseup" || type=="touchend")
            this.nextTurnButton.onClickUp();*/
    }
}

function recipeList(){
    l = []
    ingredientNames.forEach(n => {
        if(n in recipe)
            l.push(n);
    })
    return l;
}
