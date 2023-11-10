function acceptText(text) {
  if (text.length == 0) {
    throw new Error("You must write text");
  } else if (typeof text === "number") {
    throw new Error("Type must be string");
  } else {
    return text.split(" ").reverse().join(" ");
  }
}

module.exports = { acceptText };
