const width = 400
const height = 400

const data = d3
.range(20)
.map(() => ({x: Math.random() * width, y:Math.random * height}))

const circles = d3
.select("svg")
.selectAll("circle")
.data(data)
.join("circle")
.attr("cx", width /2)
.attr("cy", height / 2)
.attr("r", 10)
.style("fill", "steelblue")