test('"london" becomes "London"', () => {
  expect(capitalize('london')).toBe('London');
});

test('"london" becomes "nodnol"', () => {
  expect(reverseString('london').toBe('nodnol'));
});

test('3 + 2 equal 5', () => {
  expect(calculator.add(3, 2)).toBe(5);
});

test('3 - 2 equal 1', () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});

test('3 / 2 equal 1.5', () => {
  expect(calculator.divide(3, 2)).toBeCloseTo(1.5);
});

test('3 * 2 equal 6', () => {
  expect(calculator.multiply(3, 2)).toBe(6);
});

test('"attack at dawn!" becomes "fyyfhp fy ifbs!"', () => {
  expect(caesarCipher('attack at dawn', 5)).toBe('fyyfhp fy ifbs!');
});

test('returns an object with average, min, max and length', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
