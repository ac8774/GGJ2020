class ProductionDialog extends Dialog{
    constructor(){
        super("PRODUCTION");

        this.ingredientViewers=[];
        for(i=0;i<12;++i){
            this.ingredientViewers.push(
                new IngredientViewer(25,254-i*37,i));
            this.children.push(this.ingredientViewers[i]);
            this.buttons.push(this.ingredientViewers[i]);
        }

        this.ingredientInfoBox=new InfoBox(230,190);
        this.children.push(this.ingredientInfoBox);
        
        this.purchaseButton=new TextButton(
            "$"+
                ingredientCost(
                    ingredientNames.indexOf(activeIngredient))*1000,
            240,
            218,
            function(){
            
            var ingredientIndex=
                ingredientNames.indexOf(activeIngredient);
            
            if(money>=ingredientCost(activeIngredient)*1000){
                money-=ingredientCost(activeIngredient)*1000;
                ingredientsUnlocked[ingredientIndex];
            }
        },true);
        this.children.push(this.purchaseButton);
        this.buttons.push(this.purchaseButton);

        this.minusButton = new IconButton('ic/minus',240,275,function(){
            if(activeIngredient in recipe){
                recipe[activeIngredient]-=
                    ingredientBaseQty(activeIngredient);

                if(recipe[activeIngredient]==0)
                    delete recipe[activeIngredient];
            } else {
                // BAD sound
            }
        });
        this.children.push(this.minusButton);
        this.buttons.push(this.minusButton);

        this.plusButton = new IconButton('ic/plus',495,275,function(){
            if(activeIngredient in recipe){
                recipe[activeIngredient]+=
                    ingredientBaseQty(activeIngredient);
            } else {
                if(recipeList().length<maxIngredients){
                    recipe[activeIngredient]=
                        ingredientBaseQty(activeIngredient);
                }else {
                    // BAD sound
                }
            }
        });
        this.children.push(this.plusButton);
        this.buttons.push(this.plusButton);

        var b;
        var x = 230;
        var y = 76;

        for(i=0; i<ingredientNames.length; ++i){
            b = new IconButton(ingredientImgNames[i],
                               x,
                               y,
                               function(ingredientInfoBox,index){

                ingredientInfoBox.updateInfo(
                    ingredientImgNames[index],
                    ingredientNames[index],
                    ingredientFlavorTexts[index]);
            }.bind(this,this.ingredientInfoBox,i));

            x += 55;
            if(x==560){x = 230; y += 55;}
            this.children.push(b);
            this.buttons.push(b);
        }
    }

    render(){
        if(!(activeIngredient in recipe) &&
           recipeList().length==maxIngredients ||
           typeof activeIngredient=="undefined" ||
           !ingredientUnlocked(activeIngredient)){
            
            this.minusButton.setEnabled(false);
            this.plusButton.setEnabled(false);
        }else if(!(activeIngredient in recipe)){
            this.minusButton.setEnabled(false);
            this.plusButton.setEnabled(true);
        }else if(recipe[activeIngredient]==2000){
            this.minusButton.setEnabled(true);
            this.plusButton.setEnabled(false);
        }else{
            this.minusButton.setEnabled(true);
            this.plusButton.setEnabled(true);
        }

        super.render();

        ctx.save();
        ctx.translate(this.x,this.y);

        drawImage("recipe_bun_bottom",25,291,1);
        drawImage("recipe_bun_top",25,224-37*(recipeList().length),1);
        ctx.textAlign = "left";
        ctx.font = "20px Arial Black";
        ctx.fillStyle = "#555555";
        ctx.fillText("$"+totalCost().toLocaleString('en'),37,315);

        ctx.restore();
    }
}
