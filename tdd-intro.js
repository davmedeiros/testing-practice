function capitalize(word) {
  return word[0].toUpperCase() + word.substr(1);
}

function reverseString(word) {
  return word.split('').reverse().join('');
}

const Calculator = () => {
  const add = (x, y) => x + y;
  const subtract = (x, y) => x - y;

  return { add, subtract };
};

const calculator = Calculator();

export { capitalize, reverseString, calculator };
