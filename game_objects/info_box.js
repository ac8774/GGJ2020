class InfoBox{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    updateInfo(image,title,flavorText){
        this.image=image;
        this.title=title;
        this.flavorText=flavorText;
        activeIngredient = title;
    }

    render(){
        ctx.save();
        ctx.translate(this.x, this.y);
        drawImage("info_box_background",0,0,1);
        this.image=ingredientImgName(activeIngredient);
        if(typeof this.image!="undefined"){
            this.title=activeIngredient;
            this.flavorText=ingredientFlavorText(activeIngredient);
            drawImage(this.image,12,12,1.7);

            ctx.fillStyle="#333333";

            ctx.textAlign="start";
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

            if(this.title in recipe){
                ctx.textAlign="right";
                ctx.font="20px Arial Black";
                ctx.fillText(recipe[this.title],165,115);

                ctx.textAlign="start";
                ctx.font="16px Arial";
                ctx.fillText("units",170,115);
            }else{
                ctx.textAlign="center";
                ctx.font="20px Arial Black";
                if(!(activeIngredient in recipe) &&
                   recipeList().length==maxIngredients ||
                   typeof activeIngredient=="undefined")

                    ctx.fillText("RECIPE FULL",162,115);
                else
                    ctx.fillText("ADD TO RECIPE",162,115);

            }
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
