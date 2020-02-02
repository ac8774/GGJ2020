class ProductionDialog extends Dialog{
    constructor(){
        super("PRODUCTION");

        this.btnDone=new TextButton("DONE",
                                    20,
                                    340,
                                    function(){dlg = undefined;});
        this.buttons.push(this.btnDone);

        var b;
        var x = 330;
        var y = 80;
        ingredientNames.forEach(name => {
            b = new IconButton(name,x,y, function(){});
            x += 55;
            if(x>500){x = 330; y += 55;}
            this.buttons.push(b);
        });
    }
}
