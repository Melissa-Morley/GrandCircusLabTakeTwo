function translate(word) {
  word = word.toLowerCase();
  let vowels = ["a", "e", "i", "o", "u"];

  //first letter is a vowel
  if (vowels.indexOf(word[0]) !== -1) {
    return word + "way";
  }
  //first letter is a consonant
  else if (vowels.indexOf(word[0]) === -1 && vowels.indexOf(word[1]) !== -1) {
    return word.slice(1) + word[0] + "ay";
  }
  //first two letters are consonants
  else if (
    vowels.indexOf(word[0]) === -1 &&
    vowels.indexOf(word[1]) === -1 &&
    vowels.indexOf(word[2]) !== -1
  ) {
    return word.slice(2) + word[0] + word[1] + "ay";
  }
  ///first three letters are consonants
  else {
    return word.slice(3) + word[0] + word[1] + word[2] + "ay";
  }
}

module.exports = { translate };
