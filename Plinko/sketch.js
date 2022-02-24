import peg from './Peg';
import ball from './Ball';
import edge from './Edge';

var Engine = Matter.Engine,
    World = Matter.World;

    var engine;
    var world;
    var balls = [];
    var pegs = [];
    var edges = [];
    var cols = 11;
    var rows = 10;
    var spacing = width / cols;

    function setup() {
        createCanvas(600, 700);
        engine = Engine.create();
        world = engine.world;
        newBall();
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

        for (var i = 0; i < cols + 2; i++)
        {
            var x = i * spacing;
            var h = 300;
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
        if (frameCount % 60 == 0){
            newBall();
        }

        background(25);
        Engine.update(engine, (1000/30));
        for (var b in balls)
        {
            b.show();
            if (b.offScreen()){
                World.remove(world, b.body)
                balls.pop(b);
            }
        }
        for (var p in pegs)
        {
            p.show();
        }
        for (var e in edges)
        {
            e.show();
        }
    }
