class Particle {
    constructor(x,y) {
      var options = {
          restitution: 0.04,
          isStatic: false
      }
      this.body = Bodies.circle(x,y,10,options);
      this.radius = 10
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill(random(0,255),random(0,255),random(0,255))
      ellipseMode(RADIUS);
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };
