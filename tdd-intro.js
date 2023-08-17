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

  const multiply = (x, y) => x * y;
  return { add, subtract, divide, multiply };
};

const calculator = Calculator();

function caesarCipher(phrase, shiftFactor) {
  if (shiftFactor < 0) {
    return caesarCipher(phrase, shiftFactor + 26);
  }

  var encrypted = '';

  for (var i = 0; i < phrase.length; i++) {
    var character = phrase[i];

    if (character.match(/[a-z]/i)) {
      var code = phrase.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        character = String.fromCharCode(((code - 65 + shiftFactor) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        character = String.fromCharCode(((code - 97 + shiftFactor) % 26) + 97);
      }
    }

    encrypted += character;
  }

  return encrypted;
}

function analyzeArray(array) {
  const average =
    array.reduce((result, number) => result + number) / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const length = array.length;

  return { average, min, max, length };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
