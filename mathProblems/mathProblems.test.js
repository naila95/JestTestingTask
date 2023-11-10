const { sum, subtract, division, multiplication } = require("./mathProblems");

describe("Sum Function:", () => {
  test("You must use numbers", () => {
    expect(() => sum("1", "1")).toThrow(new Error("You must use numbers only"));
  });
  test("will be less than or equal 24", () => {
    expect(sum(-3, 8)).toBeLessThanOrEqual(6);
  });
  test("will be less than or equal 24", () => {
    expect(sum(7, 8)).not.toBeLessThan(6);
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
  test("will be less than or equal 24", () => {
    expect(sum(23, 8)).not.toBeLessThan(10);
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
  test("will return 50", () => {
    expect(multiplication(10, 5)).toBe(50);
  });
  test("will return -15", () => {
    expect(multiplication(3, -5)).toBe(-15);
  });
  test("will be less than or equal 24", () => {
    expect(multiplication(3, 8)).toBeLessThanOrEqual(24);
  });
});
