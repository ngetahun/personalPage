import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from "../components/nav"

const About = ({ location }) => {
	const data = useStaticQuery(graphql`
    query AboutQuery {
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
						linkedin
          }
        }
      }
    }
  `)
  const siteTitle = data.site.siteMetadata?.title || `Title`
	const subtitle = data.site.siteMetadata?.description || `Subtitle`
	const author = data.site.siteMetadata?.author?.name
	const twitterHandle = data.site.social?.twitter
	const githubHandle = data.site.social?.github
	const linkedinHandle = data.site.social?.linkedin

	return (
		<Layout location={location} title={siteTitle} subtitle={subtitle}>
			<Seo title="All posts" />
			<Bio
				twitter={twitterHandle}
				github={ githubHandle }
				linkedin={ linkedinHandle }
				author={ author }/>

		</Layout>
	)
}

export default About

