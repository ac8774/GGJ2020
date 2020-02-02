class ProductionDialog extends Dialog{
    constructor(){
        super("PRODUCTION");

        this.btnDone=new TextButton("DONE",
                                    20,
                                    340,
                                    function(){dlg = undefined;});

        this.children.push(this.btnDone);
        this.buttons.push(this.btnDone);

        this.ingredientInfoBox=new InfoBox(230,190);
        this.children.push(this.ingredientInfoBox);

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
        b = new IconButton('ic/placeholder',240,275,minusfunc)
        this.children.push(b)
        this.buttons.push(b)
        b = new IconButton('ic/placeholder',290,275,plusfunc)
        this.children.push(b)
        this.buttons.push(b)
    }
}

plusfunc = function(){
    if(activeIngredient in recipe){
        recipe[activeIngredient] += ingredientBaseQty(activeIngredient);
    } else {
        recipe[activeIngredient] = ingredientBaseQty(activeIngredient);
    }
}
minusfunc = function(){
    if(activeIngredient in recipe){
        recipe[activeIngredient] -= ingredientBaseQty(activeIngredient);
        if(recipe[activeIngredient]==0)
            delete recipe[activeIngredient];
    } else {
        // BAD
    }
}
