var alturaPredio = [];

function predios(scene) {
  var texture, geometry, material, altura;
  for (var i = 0; i <= 24; i++) {
    texture = new THREE.TextureLoader().load( 'img/textura_predio.jpg' );
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    altura = Math.random() * 700;
    geometry = new THREE.BoxBufferGeometry( 150, altura, 100);
    material = new THREE.MeshBasicMaterial( { map: texture } );
    predio = new THREE.Mesh( geometry, material );
    if (i % 2 === 0) {
      predio.position.x = -i*100;
      (i === 18) ? alturaPredio.push(altura) : null;
    }else{
      predio.position.x = i*100 + 100;
      (i === 17) ? alturaPredio.push(altura) : null;
    }
    predio.position.y = altura / 2;
    texture.repeat.set( 1, (altura / 200 > 1) ? parseInt(altura / 200) : (altura / 200) );
    scene.add( predio );
  }
}

function gorilas (scene) {
  /*texture = new THREE.TextureLoader().load( 'img/textura_predio.jpg' );
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;*/
  for (var i = 0; i < 2; i++) {
    geometry = new THREE.BoxBufferGeometry( 150, 150, 150);
    material = new THREE.MeshBasicMaterial({ color: 0x0000FF });
    predio = new THREE.Mesh( geometry );
    predio.position.x = (i === 0) ? 1800 : -1800;
    predio.position.y = alturaPredio[i] + 75;
    /*texture.repeat.set( 1, (altura / 200 > 1) ? parseInt(altura / 200) : (altura / 200) );*/
    scene.add( predio );
  }
}

function terra (scene) {
  var texture, geometry, material;
  texture = new THREE.TextureLoader().load( 'img/textura_rua.jpg' );
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  geometry = new THREE.PlaneGeometry( 5450, 850);
  material = new THREE.MeshBasicMaterial( { map: texture } );
  terra = new THREE.Mesh( geometry, material );
  terra.rotation.x = -1.5708;
  texture.repeat.set( 5, 1 );
  scene.add( terra );
}

function createBanana (scene, jogador = 0) {
  var texture, geometry, material, banana;
  geometry = new THREE.BoxBufferGeometry( 50, 50, 50);
  material = new THREE.MeshBasicMaterial({ color: 0x0000FF });
  banana = new THREE.Mesh( geometry );
  scene.add( banana );
  return banana;
}

function posicaoInicialBanana(banana) {
  banana.position.y = alturaPredio[jogador] + 75;
  if (jogador) {
    banana.position.x = -1700;
    jogador = 0;
  }else{
    banana.position.x = 1700;
    jogador = 1;
  }
}