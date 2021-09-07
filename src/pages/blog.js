import React, { useState } from "react"
import { graphql } from "gatsby"
import PageTransition from "gatsby-plugin-page-transitions"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Blogcard from "../components/blogcard"
import Line from "../images/line.svg"

const BlogIndex = ({ data, location }) => {
  const allPosts = data.allMarkdownRemark.nodes
  const postsToDisplay = 6
  const [posts, setPosts] = useState(allPosts)

  if (posts.length === 0) {
    return (
      <Layout>
        <Seo title="All posts" />
        <Bio />
        <p>No blog posts found</p>
      </Layout>
    )
  }

  return (
    <PageTransition
      defaultStyle={{
        transition: "left 1500ms cubic-bezier(0.47, 0, 0.75, 0.72)",
        left: "100%",
        position: "absolute",
        width: "100%",
      }}
      transitionStyles={{
        entering: { left: "0%" },
        entered: { left: "0%" },
        exiting: { left: "100%" },
      }}
      transitionTime={1000}
    >
      <Layout>
        <Seo title="All posts" />
        <div className="App">
          <div className="">
            <div className="blog layout">
              <div className="left">
                <h2 className="sticky-header">Latest Blogs</h2>
                <div className="sticky">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus sit amet faucibus nisi. Ut a pharetra urna. Nulla
                    facilisi. Nunc ac mi tempor, maximus dolor venenatis,
                    rhoncus nisi. Donec egestas viverra quam, non auctor
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus sit amet faucibus nisi. Ut a pharetra urna. Nulla
                    facilisi. Nunc ac mi tempor,
                  </p>
                </div>
                <div className="sticky-line">
                  <img src={Line} className="sticky-img" />
                  xxx
                </div>
              </div>
              <ol className="blog-grid list">
                {posts.map(post => (
                  <Blogcard post={post} />
                ))}
              </ol>
              {/* <ol style={{ listStyle: `none` }}>
                 {posts.map(post => {
                     const title = post.frontmatter.title || post.fields.slug
 @@ -54,7 +57,7 @@ function Blog({ data, location }) {
                         </li>
                     )
                 })}
             </ol> */}
            </div>
          </div>
        </div>
      </Layout>
    </PageTransition>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
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
          featuredimage
        }
      }
    }
  }
`
