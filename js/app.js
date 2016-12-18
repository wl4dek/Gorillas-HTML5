var camera, scene, renderer;
var mesh, jogador = 1, banana;
var forca = 15, angulo = -80;
var agora = 0.0001;

init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 1, 1000);
	camera.position.z = 1000;
	camera.position.y = 700;

	scene = new THREE.Scene();

	predios(scene);
	terra(scene);
	gorilas(scene);
	banana = createBanana(scene, jogador);

	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setClearColor(0xCCCCCC, 1);
	document.body.appendChild( renderer.domElement );
	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {
		var WIDTH = window.innerWidth,
		HEIGHT = window.innerHeight;
		renderer.setSize(WIDTH, HEIGHT);
		camera.aspect = WIDTH / HEIGHT;
		camera.updateProjectionMatrix();
}

renderer.render( scene, camera );
function animate() {
	requestAnimationFrame( animate );
	/*mesh.rotation.x += 0.005;
	mesh.rotation.y += 0.01;*/
	// console.log(agora);
	lancamento(banana, agora);
	agora += 0.01;

	/*clock.oldTime = clock.startTime;
	clock.startTime = new Date().getTime();
	clock.elapsedTime = clock.startTime - clock.oldTime;*/
	renderer.render( scene, camera );
}
