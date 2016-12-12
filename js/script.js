function Iniciar(){
	//criando a cena
	var scene = new THREE.Scene()
		, WIDTH = window.innerWidth
		, HEIGHT = window.innerHeight;


	//criando cÃ¢mera em perspectiva
	// - Campo de visÃ£o
	// - RelaÃ§Ã£o do aspecto (aspect ratio com o tamanho da janela)
	// - Plano de recorte prÃ³ximo (limite de renderizaÃ§Ã£o prÃ³ximo)
	// - Plano de recorte afastado (limite de renderizaÃ§Ã£o distante)
	var camera = new THREE.PerspectiveCamera(100, WIDTH / HEIGHT, 0.1, 1000);

	//criando objeto de renderizaÃ§Ã£o WebGL
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( WIDTH, HEIGHT ); //configurando dimesÃµes do renderizador

	//listener do evento resize, disparado quando o tamanho interno da Ã¡rea Ãºtil da janela Ã© alterado
	//Ãºtil neste exemplo para ajustar o viewport do render
	window.addEventListener( "resize", function(){
		//atualizando variÃ¡veis
		WIDTH = window.innerWidth;
		HEIGHT = window.innerHeight;

		renderer.setSize( WIDTH, HEIGHT ); //atualizando dimesÃµes do renderizador

		//atualizando aspect ratio e matriz da cÃ¢mera
		camera.aspect = WIDTH / HEIGHT;
    	camera.updateProjectionMatrix();
	});

	//atribuindo ao DOM e ao body do html
	document.getElementsByTagName('body')[0].appendChild( renderer.domElement );

    //criar Rua
    var position = {
        x: 0,
        y: -25,
        z: 0
    };
    var repeatTexture = {
        x: 5,
        y: 1
    };
    var terra = createTerra(position, repeatTexture);
    scene.add( terra );

    //Criando Prédios
    for (var i = 0; i < 8; i++) {
        var heightBuilding = 1;
        while(heightBuilding < 10 || heightBuilding > 35){
            heightBuilding = (10 * heightBuilding * (Math.random()*10))%35;
        }
        var size = {
            x: 7 ,
            y: heightBuilding,
            z: 7
        };
        var position = {
            x: 9*i ,
            y: heightBuilding,
            z: 2.5
        };
        var reapetTexture = {
            x: 1,
            y: heightBuilding
        };


        var predio = createBuilding(size, position, reapetTexture);
        scene.add( predio );

        if(i === 5){
            var size = {
                x: 5,
                y: 5,
                z: 5
            };
            var position = {
                x: 45,
                y: (heightBuilding),
                z: 5
            };
            var block = createKong(size, position);
            scene.add( block );
        }

        if (i !== 0) {
            heightBuilding = 1;
            while(heightBuilding < 10 || heightBuilding > 35){
                heightBuilding = (10 * heightBuilding * (Math.random()*10))%35;
            }

            size.y = heightBuilding;
            position.x = -position.x;
            position.y = heightBuilding;
            reapetTexture.y = heightBuilding;

            var predio = createBuilding(size, position, reapetTexture);
            scene.add( predio );

            if(i === 5){
                var size = {
                    x: 5,
                    y: 5,
                    z: 5
                };
                position.y = position.y * 2;
                var block = createKong(size, position);
                scene.add( block );
            }
        }
    }

	//criando luz ambiente
	var ambientLight = new THREE.AmbientLight(0xFFFFFF);

	//adicionando luz ambiente na cena
	scene.add(ambientLight);

	//definindo a posiÃ§Ã£o da cÃ¢mera
	camera.position.z = 30;
    camera.position.y = 5;

	//funÃ§Ã£o para controlar a renderizaÃ§Ã£o da cena
	function render(){
		//definindo a cena e a cÃ¢mera utilizada
		renderer.render(scene, camera);

		//alterando valores dos eixos para executar algum movimento
		/*cylinder.rotation.z += 0.01;
		cylinder.rotation.y += 0.01;
		cylinder.rotation.x += 0.01;*/

		//executando recursivamente
		requestAnimationFrame(render);
	}

	//executando a funÃ§Ã£o de renderizaÃ§aÃµ
	render();
}
