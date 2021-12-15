class Iron{
    constructor(x,y,width,height)
	{
	// assign options to the rubber ball

	var options={
		restitution:0.8,
		friction:3,
		density:30
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
			fill("#969ba3");
			//draw the ellipse here to display the rubber ball

rect(0,0, this.width,this.height)


			pop()
	}

}