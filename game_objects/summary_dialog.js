class SummaryDialog extends Dialog{
    constructor(){
        super("SUMMARY");

        this.btnDone=new TextButton("DONE",
                                    425,
                                    280,
                                    function(){sb.setEnabled(true); startTurn();});

        this.children.push(this.btnDone);
        this.buttons.push(this.btnDone);

    /*    this.ingredientViewers=[];
        for(i=0;i<4;++i){
            this.ingredientViewers.push(
                new IngredientViewer(25,143+i*37,3-i));
            this.children.push(this.ingredientViewers[i]);
            this.buttons.push(this.ingredientViewers[i]);
        }

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
        this.buttons.push(b)*/
    }

    render(){
        super.render();

        ctx.save();
        ctx.translate(this.x,this.y);

        ctx.fillStyle="#888888";
        ctx.font="16px Arial Black";
        ctx.textAlign="right";
        ctx.fillText("Ingredient expenditures:",280,100);
        ctx.fillText("Total expenses:",280,130);
        ctx.fillText("Gross Profit:",280,160);
        ctx.fillText("Net Profit:",280,190);

        ctx.textAlign = "left";
        ctx.fillText("$"+totalCost(),300,100);
        ctx.fillText("$"+totalCost(),300,130);
        ctx.fillText("$0",300,160);
        ctx.fillText("-$"+totalCost(),300,190);

        ctx.textAlign = "center";
        ctx.fillText("Wow, you made burgers out of trash!",290,250)


        ctx.restore();
    }
}
