import React, { useState } from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Blogcard from "../components/blogcard"

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
    <Layout>
      <Seo title="All posts" />
      <div className="App">
      <div className="page">
        <div className="blog">
        <ol className="blog-grid">
                 {posts.map(post => (
                     <Blogcard post={post}/>
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