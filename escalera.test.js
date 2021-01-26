const escalera = require('./escalera');

test('es escalera', () => {
  expect(escalera([14,2,3,4,5])).toBe(true);
  expect(escalera([9,10,11,12,13])).toBe(true);
  expect(escalera([2,7,8,5,10,9,11])).toBe(true);
  expect(escalera([7,8,12,13,14])).toBe(false);
  expect(escalera([2,3,12,13,14])).toBe(true);
  expect(escalera([4,3,2,5,14,10,11])).toBe(true);
  expect(escalera([4,3,2,13,14,3,2])).toBe(true);
});
