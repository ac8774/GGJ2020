class IntroDialog extends Dialog{
    constructor(){
        super("BUDGET BURGERS");

        this.btnDone=new TextButton("START",295,280,function(){startTurn();},true);
        this.children.push(this.btnDone);
        this.buttons.push(this.btnDone);

        this.creditsBtn=new TextButton("CREDITS",20,280,function(){credits();},true);
        this.children.push(this.creditsBtn);
        this.buttons.push(this.creditsBtn);

        this.message = [
            "You are the CEO and head cook of Budget Burgers.",
            "Your beef supplier has been shut down by the CDC.",
            "Luckily, your contacts in public sanitation have provided",
            "you with local-grown, freshly salvaged ingredients.",
            "Use the mouse to create the perfect burger!"
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
        ctx.textAlign = "center";
        ctx.font="14px Arial";
        ctx.fillStyle="#aaaaaa";
        ctx.fillText("Press F for fullscreen", 290, 250);


        ctx.restore();
    }
}
