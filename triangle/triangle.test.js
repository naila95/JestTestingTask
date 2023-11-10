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
  test("Type of parametrs must be numbers", () => {
    expect(() => triangle(30, 20, "10")).toThrow(
      new Error("Type of parametrs must be numbers")
    );
  });
  test("Must write 3 parametrs", () => {
    expect(() => triangle(30, 20)).toBeDefined();
  });
  test("will be greater than 10", () => {
    expect(triangle(5, 7, 6)).toBeGreaterThanOrEqual(10);
  });
});
