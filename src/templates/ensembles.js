import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from '../components/Header'
import TextContent from '../components/TextContent'
import Subheading from '../components/Subheading'
import Layout from '../components/Layout'

import './ensembles.scss';
import FloatingCard from '../components/FloatingCard';
import { BackgroundImageDiv } from '../components/Image';

export const EnsemblesTemplate = ({
  image,
  header: { topText, bottomText },
  subheading,
  about,
  concertAttire,
  subheadingTwo,
  auditionInformation
}) => (
  <div className="ensembles">
    <BackgroundImageDiv
      className="top-image"
      image={image}
    />

    <div className="ensembles__content">
      <Header topText={topText} bottomText={bottomText} />
      <TextContent header={subheading} content={about} />
      {concertAttire && <FloatingCard
        header={concertAttire.attireHeading}
        content={concertAttire.attireContent}
        drawer={concertAttire.attireDrawer}
        className="ensembles__concert-attire"
      />}
      <Subheading>{subheadingTwo}</Subheading>

      {
        auditionInformation ?
          auditionInformation.map(({ image, heading, text }) => (
            <FloatingCard
              image={image}
              header={heading}
              content={text}
            />
          )) : null
      }
    </div>
  </div>
);

EnsemblesTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  header: PropTypes.object,
  subheading: PropTypes.string,
  about: PropTypes.string,
  concertAttire: PropTypes.object,
  subheadingTwo: PropTypes.string,
  auditionInformation: PropTypes.array,
}

const Ensembles = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <EnsemblesTemplate
        image={frontmatter.image}
        header={frontmatter.header}
        subheading={frontmatter.subheading}
        about={frontmatter.about}
        concertAttire={frontmatter.concertAttire}
        subheadingTwo={frontmatter.subheadingTwo}
        auditionInformation={frontmatter.auditionInformation}
      />
    </Layout>
  )
}

Ensembles.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Ensembles

export const pageQuery = graphql`
  query Ensembles($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      frontmatter {
        header {
          topText
          bottomText
        }
        image {
          publicURL
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subheading
        about
        concertAttire {
          attireHeading
          attireContent
          attireDrawer
        }
        subheadingTwo
        auditionInformation {
          image {
            publicURL
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
          heading
        }
      }
    }
  }
`
