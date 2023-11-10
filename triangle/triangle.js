function triangle(a, b, c) {
  if (!(a + b > c && b + c > a && c + a > b)) {
    throw new Error(
      "The sum of two sides of the triangle must be greater than the third side"
    );
  } else if (
    typeof a !== "number" ||
    typeof b !== "number" ||
    typeof c !== "number"
  ) {
    throw new Error("Type of parametrs must be numbers");
  } else if (a.length || b.length || c.length) {
    throw new Error("Must write 3 parametrs");
  } else {
    let s = (a + b + c) / 2;
    heron = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return heron;
  }
}

module.exports = { triangle };
