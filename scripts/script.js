const width = 400
const height = 400

const data = d3
.range(20)
.map(() => ({x: Math.random() * width, y:Math.random() * height}))

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
    .attr("cx", (d) => d.x)
}
function moveY() {
    circles
    .transition()
    .duration(750)
    .attr("cy", (d) => d.y)
}

const callbacks = [
    moveLeft,
    moveX,
    moveY,
    moveLeft,
    moveX,
    moveY,
    moveLeft,
    moveX,
    moveY,
    moveLeft,
    moveX,
    moveY,
    moveLeft,
    moveX,
    moveY,
    moveLeft,
    moveX,
    moveY,
    moveLeft,
    moveX,
    moveY,
   
]

window.addEventListener("scroll", function (e) {
    console.log(window.scrollY)
})

const steps = d3.selectAll(".step")

// instantiate the scrollama
const scroller = scrollama();

// setup the instance, pass callback functions
scroller
  .setup({
    step: ".step",
  })
  .onStepEnter((response) => {
      callbacks[response.index]()

      steps.style("opacity", 0.1)
      d3.select(response.element).style("opacity", 1)
      console.log("enter", response)
    // { element, index, direction }
  })
  .onStepExit((response) => {
      console.log("exit", response)
    // { element, index, direction }
  });