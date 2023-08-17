function capitalize(word) {
  return word[0].toUpperCase() + word.substr(1);
}

function reverseString(word) {
  return word.split('').reverse().join('');
}

export { capitalize, reverseString };
