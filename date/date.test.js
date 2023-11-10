const { dateCounter } = require("./date");

describe("DateCounter Function:", () => {
  test("will return 944", () => {
    expect(dateCounter("2021-03-25", "2023-10-25")).toBe(944);
  });
  test("date2 must be greater than date1", () => {
    expect(() => dateCounter("2025-10-10", "2019-03-17")).toThrow(
      new Error("date2 must be greater than date1")
    );
  });
});
