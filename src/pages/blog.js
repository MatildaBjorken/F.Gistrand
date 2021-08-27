import React, { useEffect, useState } from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Blogcard from "../components/blogcard"

const BlogIndex = ({ data, location }) => {
  const allPosts = data.allMarkdownRemark.nodes
  const postsToDisplay = 6
  const [posts, setPosts] = useState(allPosts)
  const [numberOfPosts, setNumberOfPosts] = useState(postsToDisplay)
  const [filter, setFilter] = useState(
    new URLSearchParams(location.search.substring(1)).get("filter")
  )

  useEffect(() => {
    if (filter) {
      window.history.pushState(
        filter,
        "",
        `blog?filter=${filter.toLowerCase()}`
      )
      document.querySelector("#categories").value = filter.toLowerCase()
    }

    setPosts(
      filter === "all" || !filter
        ? allPosts
        : allPosts.filter(post =>
            post.frontmatter.tags.includes(
              filter[0].toUpperCase() + filter.substring(1)
            )
          )
    )
  }, [filter, allPosts])

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
            {posts.slice(0, numberOfPosts).map(post => (
              <Blogcard
                key={post.fields.slug}
                post={post}
                setFilter={setFilter}
              />
            ))}
          </ol>
          {numberOfPosts < posts.length && (
            <button
              className="cta-btn"
              onClick={() => setNumberOfPosts(numberOfPosts + postsToDisplay)}
            >
              View more posts
            </button>
          )}
        </div>
        </div>
      </div>
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
