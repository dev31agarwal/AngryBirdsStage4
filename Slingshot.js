class SlingShot{
    constructor(bodyA, pointB){

        this.image1=loadImage("sprites/sling1.png");
        this.image2=loadImage("sprites/sling2.png");
        this.image3=loadImage("sprites/sling3.png");
        
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        



        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            fill("brown");
            line(pointA.x-20, pointA.y, 180, 85);
            line(pointA.x-20, pointA.y, 230, 80);
            image(this.image3, pointA.x-25, pointA.y-10, 15, 30);
        }
    }
    
}