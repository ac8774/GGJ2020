function doPhysics() {
    world.Step(1 / 60, 8, 3);

    camera.x = 2.5*640;
    camera.y = 240;
    camera.s = 24;

    ctx.strokeStyle = "#FFF";
    ctx.lineWidth = 0.15;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.save();
    ctx.translate(camera.x, camera.y);
    ctx.scale(camera.s, camera.s);
    for (var i = 0; i < world.bodies.length; i++) {
        var b = world.bodies[i]
        ctx.save();
        ctx.translate(b.GetTransform().p.x, -b.GetTransform().p.y)
        ctx.rotate(-b.GetAngle());
        for (var j = 0; j < b.fixtures.length; j++) {
            var s = b.fixtures[j].shape;
            if (s.render) {
                ctx.save();
                if (s.position) {
                    ctx.translate(s.position.x, -s.position.y);
                }
                s.render();
                ctx.restore();
            }
        }
        ctx.restore();
        if(b.GetTransform().p.x>14.5 || b.GetTransform().p.y<-12)
        {
            world.DestroyBody(b);
            i--;
        }
    }
    ctx.restore();
}

function setupWorld() {
  resetWorld();

  b2EdgeShape.prototype.render = function() {
/*    ctx.beginPath();
    ctx.moveTo(this.vertex1.x, -this.vertex1.y);
    ctx.lineTo(this.vertex2.x, -this.vertex2.y);
    ctx.stroke();*/
  };

  b2CircleShape.prototype.render = function() {

    ctx.drawImage(sprites["burger"],-this.radius,-this.radius,2*this.radius,2*this.radius);
  };

  b2PolygonShape.prototype.render = function() {
    ctx.beginPath();
    ctx.moveTo(this.vertices[0].x, -this.vertices[0].y);
    for (var v = 1; v < this.vertices.length; v++) {
      ctx.lineTo(this.vertices[v].x, -this.vertices[v].y)
    }
    ctx.closePath();
    ctx.stroke();
  };
}

function resetWorld() {
  if (world !== null) {
    while (world.joints.length > 0) {
      world.DestroyJoint(world.joints[0]);
    }

    while (world.bodies.length > 0) {
      world.DestroyBody(world.bodies[0]);
    }

    while (world.particleSystems.length > 0) {
      world.DestroyParticleSystem(world.particleSystems[0]);
    }
  } else {
    world = new b2World(new b2Vec2(0, -10));
  }

  var bd = new b2BodyDef;
  g_groundBody = world.CreateBody(bd);

  newEdge(-9, -1, 12, -5);
  newEdge(-9, -1, -8, 3)
  newEdge(-8, 3, -6.5, 4);
  newEdge(8.8, 1, 8.8, 30);

}

function newEdge(x1, y1, x2, y2) {
  var edge = new b2EdgeShape();
  edge.Set(new b2Vec2(x1, y1), new b2Vec2(x2, y2));
  var bd = new b2BodyDef();
  var body = world.CreateBody(bd);
  body.CreateFixtureFromShape(edge);
}

function newBurger() {
  var circle = new b2CircleShape();
  circle.radius = 1+Math.random()*.2;
  var bd = new b2BodyDef();
  bd.type = b2_dynamicBody;
  bd.position.Set(-11, 2);
/*  if(Math.random()>0.97){
      circle.radius *= 2;
      bd.position.Set(-12,2);
  }*/
  var body = world.CreateBody(bd);
  body.CreateFixtureFromShape(circle, 1);
  body.SetLinearVelocity(new b2Vec2(4+2*Math.random(),11+3*Math.random()))
  body.SetAngularVelocity(20*Math.random()-10)
}

function newSquare(r = 1, x = 0, y = 1, density = 1) {
  var box = new b2PolygonShape();
  box.SetAsBoxXY(r, r);
  var bd = new b2BodyDef();
  bd.type = b2_dynamicBody;
  bd.position.Set(x, y);
  var body = world.CreateBody(bd);
  body.CreateFixtureFromShape(box, density);
}
