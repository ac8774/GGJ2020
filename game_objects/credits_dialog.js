class CreditsDialog extends Dialog{
    constructor(){
        super("BUDGET BURGERS");

        this.btnDone=new TextButton("START",425,280,function(){startTurn();});
        this.children.push(this.btnDone);
        this.buttons.push(this.btnDone);

        this.message = [
            "first line",
            "second line",
            "third line"
        ];
    }

    render(){
        super.render();

        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.font="16px Arial Black";
        ctx.textAlign = "center";
        ctx.fillStyle="#555555";
        var y = 100;
        this.message.forEach(m => {
            ctx.fillText(m,290,y)
            y += 30;
        });

        ctx.restore();
    }
}
