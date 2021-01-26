
function escalera(cartas) {
  cartas.sort((a, b) => a - b);
  if (cartas.length > 4 && cartas.length < 8) {
    var i = 0;
    var cartascache = 0;
    var cartasConsecutivas = 1;
    var array = [];
    while (i < cartas.length) {
      if (1 === cartas[i] - cartas[i - 1]) {
        array.push(cartas[i]);
        cartasConsecutivas++;
      }else if (cartas[0] == 2 && cartascache == 0){
        cartascache = cartasConsecutivas;
        cartasConsecutivas = 1;
      }
      i++;
    }
    if (cartas[cartas.length - 1] === 14 && cartas[0] === 2) {
      cartasConsecutivas = cartascache != 0 ? cartascache + cartasConsecutivas : cartasConsecutivas;
      cartasConsecutivas++;
    }
    if (cartasConsecutivas > 4) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
module.exports = escalera;