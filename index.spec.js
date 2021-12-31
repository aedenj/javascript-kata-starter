import { expect } from "chai"


describe("test", () => {
  const scenarios = [
    { input: true, expected: true }
  ];

  scenarios.forEach(scenario => {
    it("true is true", () => {
      expect(kata(scenario.input)).to.equal(scenario.expected)
    })
  })
})
