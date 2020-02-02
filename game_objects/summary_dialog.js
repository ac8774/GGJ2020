class SummaryDialog extends Dialog{
    constructor(){
        super("SUMMARY");

        this.btnDone=new TextButton("DONE",
                                    425,
                                    280,
                                    function(){startTurn();});

        this.children.push(this.btnDone);
        this.buttons.push(this.btnDone);

        this.income = Math.max(0,Math.floor(totalTaste()/10)*1000);
        var ratio = totalTaste()/lastWeekTaste;
        lastWeekTaste = totalTaste();

        money -= totalCost();
        money += this.income;
        week ++;

        var t = totalTaste();
        if(t<-20000){
            this.msg = "Those burgers were absolutely disgusting."
        }else if(t<0){
            this.msg = "Wow, those burgers tasted awful.";
        }else if(t<1000){
            this.msg = "Those burgers weren't great.";
        }else if(t<10000){
            this.msg = "Those burgers were alright.";
        }else if(t<50000){
            this.msg = "Those were some tasty burgers!";
        }else if(t<100000){
            this.msg = "Those were some delicious burgers!";
        }else if(t<250000){
            this.msg = "Wow, those burgers were amazing!!";
        }else {
            this.msg = "Now THAT'S a burger!"
        }
        this.msg2 = "I wonder if we could make them better?";
        if(week>1){
        if(ratio>0 && totalTaste()>0){
            if(ratio<0.1){
                if(t<1000)
                    this.msg2 = "Way worse than last week's."
                else
                    this.msg2 = "Way worse than last week's, though."
            } else if(ratio<0.7){
                if(t<1000)
                    this.msg2 = "Worse than last week's."
                else
                    this.msg2 = "Worse than last week's, though."
            } else if(ratio<0.95){
                if(t<1000)
                    this.msg2 = "A little worse than last week's."
                else
                    this.msg2 = "A little worse than last week's, though."
            } else if(ratio<1){
                if(t<1000)
                    this.msg2 = "A tiny bit worse than last week's."
                else
                    this.msg2 = "Not quite as good as last week's, though."
            } else if(ratio == 1){
                this.msg2 = "I wonder if we could make them better?"
            } else if(ratio<1.05){
                if(t<1000)
                    this.msg2 = "A tiny bit better than last week's, though."
                else
                    this.msg2 = "A tiny bit better than last week's."
            } else if(ratio<1.3){
                if(t<1000)
                    this.msg2 = "A little better than last week's, though."
                else
                    this.msg2 = "A little better than last week's."
            } else if(ratio<2){
                if(t<1000)
                    this.msg2 = "Considerably better than last week's, though."
                else
                    this.msg2 = "Considerably better than last week's."
            } else if(ratio<10){
                if(t<1000)
                    this.msg2 = "Way better than last week's, though."
                else
                    this.msg2 = "Way better than last week's!"
            } else{
                if(t<1000)
                    this.msg2 = "Way better than last week's, though."
                else
                    this.msg2 = "So much tastier than last week's!"
            }
        }}
    }

    render(){
        super.render();

        ctx.save();
        ctx.translate(this.x,this.y);

        ctx.fillStyle="#888888";
        ctx.font="16px Arial Black";
        ctx.textAlign="right";
        ctx.fillText("Total expenses:",280,130);
        ctx.fillText("Gross Profit:",280,160);
        ctx.fillText("Net Profit:",280,190);

        ctx.textAlign = "left";
        ctx.fillText("$"+totalCost().toLocaleString('en'),300,130);
        ctx.fillText("$"+(this.income).toLocaleString('en'),300,160);
        ctx.fillText("$"+(this.income-totalCost()).toLocaleString('en'),300,190);

        ctx.textAlign = "center";
        ctx.fillText(this.msg,290,230)
        ctx.fillText(this.msg2,290,257)
        ctx.fillStyle="#333333";
        ctx.fillText("Week "+week,290,100)


        ctx.restore();
    }
}
