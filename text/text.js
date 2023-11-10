function acceptText(text) {
  if (text.length == 0) {
    throw new Error("You must write text");
  } else if (typeof text !== "string") {
    throw new Error("Type must be string");
  } else {
    let characters = text.split("");
    let reversedCharacters = characters.reverse();
    let reversedSentence = reversedCharacters.join("");
    return reversedSentence;
  }
}

module.exports = { acceptText };
