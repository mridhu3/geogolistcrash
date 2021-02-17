class trash 
{
constructor(x,y,radius)
{
var options = 
{
isStatic:false,
restitution:0.3,
friction:0.5,
denisity:1.2
}
this.body = Bodies.circle(x,y,radius,options)
this.radius = radius
this.Image =  loadImage(crumple/paper.png)

World.add(world,this.body )
}
display(){
fill("white");

circle(this.body.position.x,this.position.y,this.radius);
}
}