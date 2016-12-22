function lancamento(banana, forca, angulo, agora) {
  banana.rotation.x += 0.005;
  banana.rotation.y += 0.01;
  let angulaRad = (Math.PI * angulo) / 180;

  if(jogador === 0){
    banana.position.x += forca * Math.cos(angulaRad) * agora * agora;
  }else {
    banana.position.x -= forca * Math.cos(angulaRad) * agora * agora;
  }
  banana.position.y += forca * Math.sin(angulaRad) - ((9.8 * agora * agora) / 2);

  // console.log('X: ' + banana.position.x);
  // console.log('Y: ' + banana.position.y);
  if(banana.position.y < 0){
    lancar = false;
    jogador = (jogador) ? 1: 0;
    posicaoInicialBanana(banana);
  }
}
