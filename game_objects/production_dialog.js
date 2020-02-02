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
            "",
            263,
            275,
            function(){
            
            var ingredientIndex=
                ingredientNames.indexOf(activeIngredient);
            
            if(money>=ingredientCost(activeIngredient)*1000){
                money-=ingredientCost(activeIngredient)*1000;
                ingredientsUnlocked[ingredientIndex]=true;
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
        
        if(typeof activeIngredient!="undefined" &&
            !ingredientUnlocked(activeIngredient)){
            
            this.purchaseButton.setText(
                "$"+(ingredientCost(activeIngredient)*1000).toLocaleString('en'));
            this.purchaseButton.setEnabled(true);
        }else
            this.purchaseButton.setEnabled(false);

        super.render();

        ctx.save();
        ctx.translate(this.x,this.y);

        drawImage("recipe_bun_bottom",25,291,1);
        drawImage("recipe_bun_top",25,224-37*(recipeList().length),1);
        ctx.textAlign = "left";
        ctx.fillStyle = "#816704";
        ctx.font = "10px Arial";
        ctx.fillText("Cost:",38,311);
        ctx.font = "18px Arial Black";
        ctx.fillText("$"+totalCost().toLocaleString('en'),65,317);

        ctx.restore();
    }
}
