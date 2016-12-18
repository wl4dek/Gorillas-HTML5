function lancamento(banana, agora) {
  banana.rotation.x += 0.005;
  banana.rotation.y += 0.01;

  if(jogador === 1){
    banana.position.x += 20 + forca * Math.cos(-(Math.PI * angulo) / 180) * agora * agora;
    // banana.position.x += 50 + 20*(forca * Math.cos(angulo));
  }else {
    banana.position.x -= -(forca * Math.cos(-(Math.PI * angulo) / 180) * agora * agora);
    // banana.position.x -= -50 - 20*(forca * Math.cos(angulo));
  }
  banana.position.y += forca * Math.sin(-(Math.PI * angulo) / 180) - ((9.8 * agora) / 2);
  console.log('X: ' + banana.position.x);
  console.log('Y: ' + banana.position.y);
  // banana.position.y += 50 + 20*forca*Math.sin(angulo) - 9.8;
}
