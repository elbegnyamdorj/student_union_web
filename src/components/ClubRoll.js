import React from 'react'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const ClubRollTemplate = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div className='column is-1 '>
      {posts &&
        posts.map(({ node: post }) => (
          <div className='is-parent column is-1' key={post.id}>
            <article className='blog-list-item tile is-child box notification'>
              <header>
                {post.frontmatter.featuredimage ? (
                  <div className='featured-thumbnail'>
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                        width:
                          post.frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.width,
                        height:
                          post.frontmatter.featuredimage.childImageSharp
                            .gatsbyImageData.height,
                      }}
                    />
                  </div>
                ) : null}
                <p className='post-meta'>
                  <Link
                    className='title has-text-primary is-size-4'
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <span className='subtitle is-size-5 is-block'>
                    {post.frontmatter.description}
                  </span>
                </p>
              </header>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className='button' to={post.fields.slug}>
                  Дэлгэрэнгүй унших →
                </Link>
              </p>
            </article>
          </div>
        ))}
    </div>
  )
}

export default function ClubRoll() {
  return (
    <StaticQuery
      query={graphql`
        query ClubRollQuery {
          allMarkdownRemark(
            sort: { fields: frontmatter___title, order: ASC }
            filter: { frontmatter: { templateKey: { eq: "club-post" } } }
          ) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  date(formatString: "YYYY MMMM DD")
                  featuredimage {
                    childImageSharp {
                      gatsbyImageData(
                        width: 400
                        height: 180
                        layout: CONSTRAINED
                      )
                    }
                  }
                  description
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <ClubRollTemplate data={data} count={count} />}
    />
  )
}
