import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const Subtitle = data.site.siteMetadata?.description || `Subtitle`
  const backgroundImage = post.frontmatter.background
  const { previous, next } = data

  return (
    <Layout title={siteTitle} subtitle={Subtitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="flex flex-col w-4/5 justify-items-center justify-center">
        <header className="xl:bg-grey-500 lg:bg-grey-700 md:bg-grey-400 sm:bg-grey-600">
          <div className=" md:flex justify-start py-8 ">
            <div className="my-auto text-center">
              <p className="text-grey-100 text-3xl">
                {" "}
                {post.frontmatter.title}{" "}
              </p>
              <p className="text-gray-600 text-sm font-light">
                {" "}
                {post.frontmatter.date}{" "}
              </p>
            </div>
          </div>
        </header>

        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="flex flex-col justify-content-center"
        />
        <hr />
      </div>
      <div className="my-6">
        <nav className="">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li className="hover:underline leading-4">
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  &larr; {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li className="hover:underline leading-4">
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} &rarr;
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
