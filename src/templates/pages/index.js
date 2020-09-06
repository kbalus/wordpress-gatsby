import React  from "react"
import Layout from "../../components/layout"
import SEO from "../../components/SEO"

const Page = ({ pageContext }) => {
  const page = pageContext.page

  return (
    <Layout>
      <SEO title={page.page} />

      <h1> {page.title} </h1>
      <div dangerouslySetInnerHTML={{__html: page.content}} />

    </Layout>
  )
}

export default Page