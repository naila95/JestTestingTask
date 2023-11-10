const { sum, subtract, division, multiplication } = require("./mathProblems");

describe("Sum Function:", () => {
  test("You must use numbers", () => {
    expect(() => sum("1", "1")).toThrow(new Error("You must use numbers only"));
  });
});

describe("Subtract function", () => {
  test("You must use numbers", () => {
    expect(() => subtract("1", "1")).toThrow(
      new Error("You must use numbers only")
    );
  });
  test("Second number must be smaller than first number", () => {
    expect(() => subtract(1, 3)).toThrow(
      new Error("Second number must be smaller than first number")
    );
  });
});

describe("Division function", () => {
  test("You must use numbers", () => {
    expect(() => division("1", "1")).toThrow(
      new Error("You must use numbers only")
    );
  });
  test("Second number must be smaller than first number", () => {
    expect(() => division(1, 3)).toThrow(
      new Error("Second number must be smaller than first number")
    );
  });
  test("You can not divide to 0", () => {
    expect(() => division(1, 0)).toThrow(new Error("You can not divide 0"));
  });
});

describe("Multiplication function", () => {
  test("You must use numbers", () => {
    expect(() => multiplication("1", "1")).toThrow(
      new Error("You must use numbers only")
    );
  });
});
