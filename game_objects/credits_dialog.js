class CreditsDialog extends Dialog{
    constructor(){
        super("BUDGET BURGERS");

        this.btnDone=new TextButton("START",295,280,function(){startTurn();},true);
        this.children.push(this.btnDone);
        this.buttons.push(this.btnDone);

    }

    render(){
        super.render();

        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.font="16px Arial Black";
        ctx.fillStyle="#555555";

        ctx.textAlign = "center";
        ctx.fillText("Made for the 2020 Global Game Jam",290,100)

        ctx.textAlign="right";
        ctx.fillText("Programming:",280,150);
        ctx.fillText("Art and Programming:",280,180);
        ctx.fillText("Sound and Programming:",280,210);

        ctx.textAlign = "left";
        ctx.fillText("Andrew Clark",300,150);
        ctx.fillText("Daniel Darnell",300,180);
        ctx.fillText("Chris Wyble",300,210);
        
        drawImage("liquidfun_logo",8,260,0.2);

        ctx.restore();
    }
}
