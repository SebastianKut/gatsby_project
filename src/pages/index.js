import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

function Index() {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I'm Seb. Full-stack developer</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>
      </p>
    </Layout>
  )
}

export default Index
