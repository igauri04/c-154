// Registering component in Target.js

AFRAME.registerComponent("flying-birds", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `hurdle${i}`;
  
        //position variables     
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.flyingBirds(id, position);
      }
    } ,
  
    flyingBirds: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var birdE1 = document.createElement("a-entity");
  
      birdE1.setAttribute("id",id);
      birdE1.setAttribute("position",position);
      birdE1.setAttribute("scale",{x:500, y:500, z:500})
      birdE1.setAttribute("gltf-model","./assets/models/flying_bird/scene.gltf");

      
      birdE1.setAttribute("animation-mixer",{  });   
  
      terrainEl.appendChild(birdE1);
    }
  });
  
  
