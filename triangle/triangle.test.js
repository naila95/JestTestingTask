const { triangle } = require("./triangle");

describe("Triangle Function:", () => {
  test("will be greater than 165", () => {
    expect(triangle(23, 17, 20)).toBeGreaterThanOrEqual(165);
  });
  test("The sum of two sides of the triangle must be greater than the third side", () => {
    expect(() => triangle(30, 20, 55)).toThrow(
      new Error(
        "The sum of two sides of the triangle must be greater than the third side"
      )
    );
  });
});
