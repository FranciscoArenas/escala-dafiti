const escala = require('./escala');

test('el juego de cartas', () => {
  // expect(escala([14,2,3,4,5])).toBe('es escalera');
  // expect(escala([9,10,11,12,13])).toBe('es escalera');
  // expect(escala([2,7,8,5,10,9,11])).toBe('es escalera');
  // expect(escala([7,8,12,13,14])).toBe('no es escalera');
  // expect(escala([2,3,12,13,14])).toBe('es escalera');
  // expect(escala([4,3,2,5,14,10,11])).toBe('es escalera');
  expect(escala([4,3,2,13,14,3,2])).toBe('es escalera');
});
