var camera, scene, renderer;
var mesh, jogador = 0, banana;
var forca, angulo;
var agora = 0.0001;
var lancar = false;
var predios, gorilas;
var inputGroup = document.getElementsByClassName('input-group')[0];

init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 1, 1000);
	camera.position.z = 1000;
	camera.position.y = 700;

	scene = new THREE.Scene();

	predios = predios(scene);
	terra(scene);
	gorilas = gorilas(scene);
	banana = createBanana(scene, jogador);
	posicaoInicialBanana(banana);
	console.log(gorilas[0].position);

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

	if (lancar && forca && angulo) {
		lancamento(banana, forca, angulo, agora);
		agora += 0.01;
	}else{
		agora = 0;
	}

	renderer.render( scene, camera );
}

function hideInputGroup() {
	inputGroup.style.opacity = 0;
}

function showInputGroup() {
	inputGroup.style.opacity = 1;
}

function fimJogo(jogador) {
	var win = document.getElementsByClassName('win')[0];
	win.innerHTML = "O jogador " + jogador + " VENCEU!";
	win.style.opacity = 1;
}

document.getElementById('jogar').addEventListener('click', function () {
	lancar = true;
	forca = document.getElementById('forca').value;
	angulo = document.getElementById('angulo').value;
	hideInputGroup();
});


document.addEventListener('keypress', function(e) {
	if (e.key === "Enter") {
		lancar = true;
	}
});
