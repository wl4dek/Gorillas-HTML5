var alturaPredio = [];

function predios(scene) {
  var texture, geometry, material, altura, predios = [];

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
      if (i === 18) alturaPredio.push(altura);
    }else{
      predio.position.x = i*100 + 100;
      if (i === 17) alturaPredio.push(altura);
    }
    predio.position.y = altura / 2;
    texture.repeat.set( 1, (altura / 200 > 1) ? parseInt(altura / 200) : (altura / 200) );
    scene.add( predio );
    predios.push(predio);
  }
  return predios;
}

function gorilas (scene) {
  var texture, geometry, material, gorila, gorilas = [];

  for (var i = 0; i < 2; i++) {
    geometry = new THREE.BoxBufferGeometry( 100, 100, 100);
    material = new THREE.MeshBasicMaterial({ color: 0x0000FF });
    gorila = new THREE.Mesh( geometry );
    gorila.position.x = (i === 0) ? 1800 : -1800;
    gorila.position.y = alturaPredio[i] + 50;
    /*texture.repeat.set( 1, (altura / 200 > 1) ? parseInt(altura / 200) : (altura / 200) );*/
    scene.add( gorila );
    gorilas.push(gorila);
  }
  return gorilas;
}

function terra (scene) {
  var texture, geometry, material, terra;

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

function createBanana (scene, jogador) {
  var texture, geometry, material, banana;

  geometry = new THREE.CubeGeometry(50, 50, 50, 1, 1, 1);
  material = new THREE.MeshBasicMaterial({ color: 0x0000FF });
  banana = new THREE.Mesh( geometry );
  scene.add( banana );
  return banana;
}

function posicaoInicialBanana(banana) {
  banana.position.y = alturaPredio[jogador] + 130;
  if (jogador) {
    banana.position.x = -1850;
    jogador = 0;
  }else{
    banana.position.x = 1850;
    jogador = 1;
  }
  showInputGroup();
}