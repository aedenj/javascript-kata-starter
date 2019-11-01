import { expect } from "chai"


describe("test", () => {
  it("true is true", () => {
    expect(true).to.equal(true)
  })

  it("false is false", () => {
    expect(true).to.equal(true)
  })

  it("true is not false", () => {
    expect(true).to.not.equal(false)
  })
})
