class Paper{
    constructor(x,y){
        var options={
        restitution:0.3,
        friction:0.5,
        density:1.2    
        }
        this.body=Bodies.circle(x,y,40,options)
        this.radius=40;
        this.image=loadImage('paper.png');
        World.add(world,this.body)

    }
    display(){
var pos=this.body.position;
imageMode(CENTER)
image(this.image,pos.x,pos.y,40,40)

   
}
}