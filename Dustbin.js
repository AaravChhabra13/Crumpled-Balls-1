class Dustbin{
    constructor(){

        var opt={
            isStatic:true,
            friction:0.5,
            density:1.2
        }

        this.leftbody=Bodies.rectangle(1200,670,10,100,opt);
        World.add(world,this.leftbody);

        this.bottombody=Bodies.rectangle(1300,770,100,10,opt);
        World.add(world,this.bottombody);

        this.rightbody=Bodies.rectangle(1400,670,10,100,opt);
        World.add(world,this.rightbody);
     }

     display(){
         var pos=this.leftbody.position;
         var pos1=this.bottombody.position;
         var pos2=this.rightbody.position;

         rectMode(CENTER);
         fill("brown");
         rect(pos.x,pos.y,10,100);

         rectMode(CENTER);
         fill("brown");
         rect(pos1.x,pos1.y,100,10);

         rectMOde(CENTER);
         fill("brown");
         rect(pos2.x,pos2.y,10,100);

     }
}