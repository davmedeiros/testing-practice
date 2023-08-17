function capitalize(word) {
  return word[0].toUpperCase() + word.substr(1);
}

function reverseString(word) {
  return word.split('').reverse().join('');
}

const Calculator = () => {
  const add = (x, y) => x + y;
  const subtract = (x, y) => x - y;

  const divide = (x, y) => {
    if (y === 0) {
      return "Oops! Can't divide by zero";
    }

    return x / y;
  };

  return { add, subtract, divide };
};

const calculator = Calculator();

export { capitalize, reverseString, calculator };
