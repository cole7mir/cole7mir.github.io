var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;

    var engine;
    var world;
    var balls = [];
    var pegs = [];
    var edges = [];
    var cols = 11;
    var rows = 10;

    function setup() {
        createCanvas(600, 700);
        colorMode(HSB);
        engine = Engine.create();
        world = engine.world;

        newBall();
        var spacing = width / cols;
        for (var j = 0; j < rows; j++){
            for (var i = 0; i < cols + 1; i++){
                var x = i * spacing;
                if (j % 2 == 0){
                    x += spacing / 2;
                }
                var y = spacing + (j * spacing);
                var p = new Peg(x, y, 8);
                pegs.push(p);
            }
        }

        var e = new Edge(width/2, height + 50, width, 100);
        edges.push(e);
        var e = new Edge(5, 350, 10, 700);
        edges.push(e);
        var e = new Edge(595, 350, 10, 700);
        edges.push(e);

        for (var i = 0; i < cols + 2; i++)
        {
            var x = i * spacing;
            var h = 125;
            var w = 10;
            var y = height - h/2;
            var e = new Edge(x, y, w, h);
            edges.push(e);
        }
    }

    function newBall(){
        var b = new Ball (300, 0, 10);
        balls.push(b);
    }

    function draw() {
        background(0,0,0);
        if (frameCount % 40 == 0){
            newBall();
        }
        Engine.update(engine, (1000/45));
        for (var i = 0; i < balls.length; i++) {
            balls[i].show();
            if (balls[i].isOffScreen()) {
              World.remove(world, balls[i].body);
              balls.splice(i, 1);
              i--;
            }
          }
          for (var i = 0; i < pegs.length; i++) {
            pegs[i].show();
          }
          for (var i = 0; i < edges.length; i++) {
            edges[i].show();
          }
    }
