import React from "react"
import { Link } from "gatsby"

function about() {
  return (
    <div>
      <h1>About Me</h1>
      <p>Some info about me</p>
      <p>
        Want to work with me? <Link to="/contact">Reach out</Link>{" "}
      </p>
    </div>
  )
}

export default about
