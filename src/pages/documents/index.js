import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const DownloadsPage = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <br />
      <br />
      <br />
      <br />
      <div className='container p-4'>
        <h1 className='title'>Татаж авах холбоосууд</h1>
        <ul>
          {data.allFile.edges.map((file, index) => {
            return (
              <li key={`pdf-${index}`}>
                <a href={file.node.publicURL} download>
                  {file.node.name}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}
export default DownloadsPage
