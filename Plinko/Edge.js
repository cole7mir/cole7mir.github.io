function Edge(x,y,w,h) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
}

Peg.prototype.show = function() {
    fill(255);
    stroke(255);
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    rectangle(0, 0, this.w, this.h);
    pop();
}