import React, { useEffect } from "react"
import { Link } from "gatsby"

import "../styles/components/blogcard.css"

function Blogcard({ post }) {
  const { date, title, description, featuredimage } = post.frontmatter

  return (
    <li className="blog-card" data-aos="fade-up">
      <img src={featuredimage} alt="blogpost"></img>
      <div className="text">
        <Link to={post.fields.slug}>
          <h2>{title}</h2>
        </Link>
        <p>{date}</p>
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: description || post.excerpt }}
        ></p>
      </div>
      <Link to={post.fields.slug} className="read-more">
        Read more
      </Link>
    </li>
  )
}

export default Blogcard
