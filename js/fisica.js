function lancamento(banana, forca, angulo, agora) {
  banana.rotation.x += 0.005;
  banana.rotation.y += 0.01;
  var angulaRad = (Math.PI * angulo) / 180;

  if(jogador === 0){
    banana.position.x += forca * Math.cos(angulaRad);
  }else {
    banana.position.x -= forca * Math.cos(angulaRad);
  }
  banana.position.y += forca * Math.sin(angulaRad) - (9.8 * agora);

  var originPoint = banana.position.clone();


  banana.geometry.vertices.map(function(vertice) {
    var localVertex = vertice.clone();
    var globalVertex = localVertex.applyMatrix4( banana.matrix );
    var directionVector = globalVertex.sub( banana.position );

    var ray = new THREE.Raycaster( originPoint, directionVector.clone().normalize() );
    var collisionResults = ray.intersectObjects( predios );

    if (  collisionResults.length > 0 &&
          collisionResults[0].distance < directionVector.length() &&
          lancar === true ){
      lancar = false;
      jogador = (jogador) ? 1: 0;
      posicaoInicialBanana(banana);
    }
  });

  gorilas.map(function(gorila) {
    if(banana.position.distanceTo( gorila.position ) - (gorila.geometry.parameters.height / 2) < 0 && lancar === true){
     lancar = false;
     fimJogo(jogador);
    }
  });


  if(banana.position.y < 0 && lancar === true){
    lancar = false;
    jogador = (jogador) ? 1: 0;
    posicaoInicialBanana(banana);
  }
}
