import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import footerData from "../../content/footer.yml"

const IndexPage = () => {
  console.log(footerData)

  return (
    <Layout>
      <SEO title="Home" />
      <h1>hello world!</h1>
    </Layout>
  )
}

export default IndexPage
