class dustbin
{
	constructor(x,y)
	{
		var options={
			isStatis:true
		}
		this.body=Bodies.rectangle(x,y,100,200)
		this.x=x;
		this.y=y;
		this.image=loadImage('dustbingreen.png');

		World.add(world,this.body)
	}
	display()
	{
	var pos=this.body.position;
	imageMode(CENTER)
	image(this.image,pos.x,pos.y,150,200)		
			
	}

}