function sum(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error("You must use numbers only");
  }
}

function subtract(a, b) {
  if (typeof a === "string" || b === "string") {
    throw new Error("You must use numbers only");
  } else if (b > a) {
    throw new Error("Second number must be smaller than first number");
  } else {
    return a - b;
  }
}

function division(a, b) {
  if (typeof a === "string" || b === "string") {
    throw new Error("You must use numbers only");
  } else if (b > a) {
    throw new Error("Second number must be smaller than first number");
  } else if (b === 0) {
    throw new Error("You can not divide 0");
  } else {
    return a / b;
  }
}

function multiplication(a, b) {
  if (typeof a === "string" || b === "string") {
    throw new Error("You must use numbers only");
  }
}

module.exports = {
  sum,
  subtract,
  division,
  multiplication,
};
