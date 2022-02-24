function Ball(x,y,r) {
    this.red = random(255);
    this.green = random(255);
    this.blue = random(255);
    var options = {
        restitution: 0.5,
        friction: 0
    }
    x += random(-5, 5);
    this.body = Bodies.circle(x,y,r,options);
    this.body.label = "ball";
    this.r = r;
    World.add(world, this.body);
}

Particle.prototype.offScreen = function() {
    var x = this.body.position.x;
    return (x < -50 || x > width + 50);
}

Ball.prototype.show = function() {
    fill(this.red, this.green, this.blue);
    stroke(255);
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipse(0, 0, this.r * 2);
    pop();
}