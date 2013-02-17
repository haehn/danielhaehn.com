window.onload = function() {

  // create and initialize a 3D renderer
  var r = new X.renderer3D();
  r.container = 'r';
  r.init();
  abc = r;
  
    cubes=[];
    speeds = [];
    
  // create a bunch of cubes (1000 to be accurate)
  // display them in a grid of 20 rows and 50 columns
  for ( var y = 0; y < 3; y++) {
    for ( var x = 0; x < 5; x++) {
      
      // a new cube
      var c = new X.cube();
      // set the center position in world space
      c.center = [x * 3, y * 3, 0];
      // configure the edge length
      c.lengthX = c.lengthY = c.lengthZ = 2;
      // .. and the color based on the
      c.color = [150 % x, 150 % y, 1];
      
      // add it
      r.add(c);
        cubes.push(c);
      
    }
  }
  
  r.camera.position = [0,0,14];
  
  r.render();
    
    for (var c in cubes) {
        
       speeds[c] = (Math.floor(Math.random()*20));
    }
    

  // .. and animate!!
  r.onRender = function() {

    // rotate the camera in X-direction
    r.camera.rotate([1, 0]);
      for (var c in cubes) {
      cube= cubes[c];
          cube.transform.rotateX(speeds[c]);
                    //c.transform.rotateY(Math.floor(Math.random()*11));
      }
  };
  
};
