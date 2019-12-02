// https://leetcode.com/problems/k-closest-points-to-origin/


export function kClosest(points, k) {
  let distances = points.map((p) => {
    return distance(p)
  }).sort((a,b) => a - b)

  let closest = []
  points.forEach((p) => {
    let dist =  distance(p)
    if (dist <= distances[k-1]) closest.push(p)
  })

  return closest
}

function distance(p) {
  return Math.sqrt(Math.pow(p[0],2) + Math.pow(p[1], 2))
}
