import bokeh_plot from "./bokeh_plot.png"
import bokeh_contour from "./bokeh_contour.png"

const project = () => ({
    title: "Cell Detection",
    date: "04-2020",
    tags: ["Python", "Bokeh", "Flask", "Machine Learning"],
    brief: [
      <p>Capstone project at UCI, sponsored by Leica Biosystems.</p>,
      <p>Process images through tensorflow, yield a Bokeh plot with contours on top of the provided image.</p>
    ],
    outcomes: [
      <p>We wanted to derive a meaningful speed up in how pathologists process cell slides.</p>,
      <p>Our solution to the problem was to create a web application which allowed users to</p>,
      <ul>
        <li>upload an image</li>
        <li>return a set of contours for each cell</li>
        <li>and allow contours to be updated.</li>
      </ul>,
      <div className="flex">
        <img src={bokeh_plot} alt="Example image illustrating how the software looks during use." />,
        <img src={bokeh_contour} alt="A close up on the drawn contours of a single, previously unvisited cell" />,
      </div>,
      <br/>,
      <p>Contours are color coded by approval and visited:</p>,
      <ul>,
        <li>Yellow – Unvisited</li>
        <li>Red – Rejected</li>
        <li>Green – Approved</li>
      </ul>,
    ],
    link: "https://github.com/j-dax/CellDetection"
})

export default project