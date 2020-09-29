class Ball {
    constructor(x, y, radius) {
   

      var options = {
        restitution: 0.3,
        density: 1.2,
        isStatic: false,
        friction: 0.5
      }

      this.body = Bodies.circle(x, y, radius, options);
      this.radius = this.radius;
      this.x = x;
      this.y = y;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
     
      
      fill("red");
      ellipseMode(CENTER);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };