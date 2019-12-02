import { expect } from "chai"
import { kClosest } from "./index"


describe("k closest points", () => {
  describe("[[3,3],[5,-1],[-2,4]] and k=2", () => {
    it("returns [[3,3],[-2,4]]", () => {
      expect(kClosest([[3,3],[5,-1],[-2,4]], 2)).to.deep.equal([[3,3],[-2,4]])
    })
  })

  describe("[[0,1],[1,0]] and k=2", () => {
    it("returns [[1,0]]", () => {
      expect(kClosest([[0,1],[1,0]], 2)).to.deep.equal([[0,1],[1,0]])
    })
  })

  describe("[[6,10],[-3,3],[-2,5],[0,2]] and k=3", () => {
    it("returns [[0,2],[-3,3],[-2,5]]", () => {
      expect(kClosest([[6,10],[-3,3],[-2,5],[0,2]], 3)).to.deep.equal([[-3,3],[-2,5],[0,2]])
    })
  })
})
