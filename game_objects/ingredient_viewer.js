class IngredientViewer extends Button{
    constructor(x,y,i){
        super(x,y,function(){
            var r = recipeList();
            if(this.mousex>139){
                delete recipe[r[this.i]];
            }else{
                activeIngredient = r[this.i];
            }
        })
        this.w=180;
        this.h=32;
        this.i = i;
        this.mousex = 0;
    }

    render(){
        var r = recipeList();
        if(r.length>this.i){
            drawImage("ingredient_viewer_background",this.x,this.y,1);
            drawImage(ingredientImgName(r[this.i]),this.x+10,this.y+4,0.75)
            ctx.textAlign="start";
            ctx.fillStyle="#333333";
            ctx.font="16px Arial Black";
            ctx.fillText(recipe[r[this.i]],this.x+40,this.y+22);

        }
    }

    updateMouse(x,y){
        if(x>=this.x && x<=this.x+this.w &&
           y>=this.y && y<=this.y+this.h)

            this.mouseover=true;
        else{
            this.mouseover=false;
            this.clicked=false;
        }
        this.mousex = x - this.x;
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
