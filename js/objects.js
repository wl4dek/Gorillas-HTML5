function createTerra(position, repeatTexture) {
	var geometry = new THREE.PlaneBufferGeometry( 170, 20 );
    var textureStreet = new THREE.TextureLoader().load( "img/textura_rua.jpg" );
    textureStreet.wrapS = THREE.RepeatWrapping;
    textureStreet.wrapT = THREE.RepeatWrapping;
    textureStreet.repeat.set( repeatTexture.x, repeatTexture.y );

    var material = new THREE.MeshBasicMaterial( { map: textureStreet } );
    var plane = new THREE.Mesh( geometry, material );
    plane.rotation.x =  -1.0;
    plane.rotation.y =  0;
    plane.rotation.z =  0;

    plane.position.x =  position.x;
    plane.position.y =  position.y;
    plane.position.z =  position.z;
    return plane;
}

function createBuilding(size, position, repeatTexture) {
	var geometry = new THREE.BoxGeometry( size.x, size.y, size.z );
    var textureBuilding = new THREE.TextureLoader().load( "img/textura_predio.jpg" );
    textureBuilding.wrapS = THREE.RepeatWrapping;
    textureBuilding.wrapT = THREE.RepeatWrapping;
    textureBuilding.repeat.set( parseInt(repeatTexture.x), parseInt(repeatTexture.y / 8) );
	material = new THREE.MeshLambertMaterial({ map: textureBuilding });

	var box = new THREE.Mesh( geometry, material );
	box.position.x = position.x;
	box.position.y = (position.y / 2) - 15;
	box.position.z = position.z;
	return box;
}

function createKong(size, position) {
    var geometry = new THREE.BoxGeometry( size.x, size.y, size.z );
    var box = new THREE.Mesh( geometry );
    box.position.x = position.x;
    box.position.y = (position.y);
    box.position.z = position.z;
    return box;
}
