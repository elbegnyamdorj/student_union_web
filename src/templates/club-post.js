import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

const ClubPageTemplate = ({ data, location }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <p>{post.frontmatter.title}</p>
      <p>{post.frontmatter.description}</p>
      <p>{post.frontmatter.date}</p>
    </Layout>
  )
}
export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
export default ClubPageTemplate
