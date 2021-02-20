import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

function About() {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>Some info about me</p>
      <p>
        Want to work with me? <Link to="/contact">Reach out</Link>{" "}
      </p>
    </Layout>
  )
}

export default About
