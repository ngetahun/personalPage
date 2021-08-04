import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from "../components/nav"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const subtitle = data.site.siteMetadata?.description || `Subtitle`
  const author = data.site.siteMetadata?.author
  const twitterHandle = data.site.siteMetadata.social?.twitter
  const githubHandle = data.site.siteMetadata.social?.github
  const linkedinHandle = data.site.siteMetadata.social?.linkedIn

  return (
    <Layout location={location} title={siteTitle} subtitle={subtitle}>
      <Seo title="All posts" />
      <Bio
        twitter={twitterHandle}
        github={githubHandle}
        linkedin={linkedinHandle}
        author={author}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author {
          name
          summary
        }
        social {
          twitter
          github
          linkedIn
        }
      }
    }
  }
`
export default About
