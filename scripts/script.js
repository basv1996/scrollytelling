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

function moveLeft() {
    circles
    .transition()
    .duration(750)
    .attr("cx", 10)
}
function moveX() {
    circles
    .transition()
    .duration(750)
    .attr("cx", (d)=> d.x)
}
function moveY() {
    circles
    .transition()
    .duration(750)
    .attr("cx", (d)=> d.y)
}