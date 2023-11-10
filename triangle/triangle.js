function triangle(a, b, c) {
  if (!(a + b > c && b + c > a && c + a > b)) {
    throw new Error(
      "The sum of two sides of the triangle must be greater than the third side"
    );
  } else {
    let s = (a + b + c) / 2;
    heron = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return heron;
  }
}

module.exports = { triangle };
