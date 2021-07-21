import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout title={siteTitle}>
      <Seo title="All posts" />
      <Bio />
      <ol style={{ listStyle: `none` }} className="overflow-y-scroll">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug



          return (
            <li key={post.fields.slug}>
							<div className="mt-6">
								<div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
										<div className="flex items-center justify-between">
											<span className="font-light text-gray-600">{post.frontmatter.date}</span>
											{/* <a href="#"
														className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">Laravel</a> */}
										</div>
										<div className="mt-2">
											<Link to={post.fields.slug} itemProp="url"
												className="text-2xl font-bold text-gray-700 hover:underline">
												{title}
											</Link>

												<p className="mt-2 text-gray-600"
													dangerouslySetInnerHTML={{
														__html: post.frontmatter.description || post.excerpt,
													}}
													itemProp="description"
												/>
										</div>
										<div className="flex items-center justify-between mt-4">
											<Link to={post.fields.slug}
														className="text-blue-500 hover:underline">
															Read more
											</Link>
										</div>
								</div>
							</div>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
