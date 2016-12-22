var camera, scene, renderer;
var mesh, jogador = 0, banana;
var forca, angulo;
var agora = 0.0001;
var lancar = false;

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
	posicaoInicialBanana(banana);

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
	if (lancar && forca && angulo) {
		lancamento(banana, forca, angulo, agora);
		agora += 0.01;
	}else{
		agora = 0;
	}

	/*clock.oldTime = clock.startTime;
	clock.startTime = new Date().getTime();
	clock.elapsedTime = clock.startTime - clock.oldTime;*/
	renderer.render( scene, camera );
}

document.getElementById('jogar').addEventListener('click', function () {
	lancar = true;
	forca = document.getElementById('forca').value;
	angulo = document.getElementById('angulo').value;
});


document.addEventListener('keypress', function(e) {
	if (e.key === "Enter") {
		lancar = true;
	}
});
