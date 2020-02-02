class IngredientViewer{
    constructor(x,y,i){
        this.x=x;
        this.y=y;
        this.w=180;
        this.h=32;
        this.i = i;
        this.moused = false;
        this.mousex = 0;
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

    updateMouse(x,y){
        this.moused = (x>=this.x && x<=this.x+this.w &&
           y>=this.y && y<=this.y+this.h);
        this.mousex = x - this.x;
    }
    onClickDown(){
        if(this.moused)
        {
            var r = recipeList();
            if(this.mousex>150){
                delete recipe[r[this.i]];
            }else{
                activeIngredient = r[this.i];
            }
        }
    }
    onClickUp(){}
}

function recipeList(){
    l = []
    ingredientNames.forEach(n => {
        if(n in recipe)
            l.push(n);
    })
    return l;
}
