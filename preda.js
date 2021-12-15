class Preda{
    constructor(x,y,width,height)
	{
	// assign options to the rubber ball

	var options={
		restitution:0.8,
		friction:0.9,
		density:12
	}


    this.body=Bodies.rectangle(x, y, width, height, options)
		this.width=width;
		this.height=height;
		World.add(world, this.body);

	}
	display()
	{
			var predapos=this.body.position;	
            var predaangle = this.body.angle	
			push()
			translate(predapos.x, predapos.y);
            rotate(predaangle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("#0b0c0d");
			//draw the ellipse here to display the rubber ball

rect(0,0, this.width,this.height)


			pop()
	}

}