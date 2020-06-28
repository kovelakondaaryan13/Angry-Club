class Office {
    constructor(){
        var options = {
            'restitution':0.8 ,
            'friction':0.3 ,
            'density': 1.0 
        }

        this.office = Bodies.rectangle (x,y,width,height);
        this.tableImg = loadImg("sprites/table.png");
        world.add (world,this.office);
    }

display (){
    push();
    translate (this.body.position.x,this.body.position.y);
    rotate(angle);
    imageMode (CENTER);
    image (this.tableImg,0,0,50,50);

    imageMode(CENTER);
    image(tableImg,displayWidth/2,displayHeight/2 , 400,250);
    this.tableImg.scale = 0.5 ;

}
}