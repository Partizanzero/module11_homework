const reverseStr = require("../../utils/index.js");

test("return reverse string", () => {
  expect(reverseStr("love")).toBe("evol");
});
