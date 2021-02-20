import React from "react"
import { Link } from "gatsby"

function index() {
  return (
    <div>
      <h1>Hello</h1>
      <h2>I'm Seb. Full-stack developer</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </div>
  )
}

export default index
