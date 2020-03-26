import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from '../components/Header';
import TextContent from '../components/TextContent';
import Button from '../components/Button';
import Subheading from '../components/Subheading';
import FloatingCard from '../components/FloatingCard';
import HorizontalCard from '../components/HorizontalCard';

import './major-page.scss'

export const MajorPageTemplate = ({
  majorHeading: { topText, bottomText },
  subheading,
  about,
  button: { buttonText, buttonLink },
  subheadingTwo,
  majorAuditionInfo,
  subheadingThree,
  stories
}) => (
  <div className="major">
    <div className="major__content">
      <Header topText={topText} bottomText={bottomText} />
      <TextContent header={subheading} content={about} />
      <Button link={buttonLink}>
        {buttonText}
      </Button>
      <Subheading>{subheadingTwo}</Subheading>

      <div className="major__content__auditions">
        {
          majorAuditionInfo ?
            majorAuditionInfo.map(({ image, heading, text }) => (
              <FloatingCard
                image={image}
                header={heading}
                content={text}
              />
            )) : null
        }
      </div>
    </div>
    <div className="major__stories">
      <Subheading className="major__stories__heading">{subheadingThree}</Subheading>
      <div className="major__stories__ui">{
        stories && stories.map(info => (<HorizontalCard key={info.title} info={info} /> ))
      }
      </div>
    </div>
  </div>
);

MajorPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  majorHeading: PropTypes.object,
  subheading: PropTypes.string,
  about: PropTypes.string,
  button: PropTypes.object,
  subheadingTwo: PropTypes.string,
  majorAuditionInfo: PropTypes.array,
  subheadingThree: PropTypes.string,
  stories: PropTypes.array
}

const MajorPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <MajorPageTemplate
      majorHeading={frontmatter.majorHeading}
      subheading={frontmatter.subheading}
      about={frontmatter.about}
      button={frontmatter.button}
      subheadingTwo={frontmatter.subheadingTwo}
      majorAuditionInfo={frontmatter.majorAuditionInfo}
      subheadingThree={frontmatter.subheadingThree}
      stories={frontmatter.stories}
    />
  )
}

MajorPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default MajorPage

export const pageQuery = graphql`
  query MajorPage {
    markdownRemark(frontmatter: { templateKey: { eq: "major-page" } }) {
      frontmatter {
        majorHeading {
          topText
          bottomText
        }
        subheading
        about
        button {
          buttonText
          buttonLink
        }
        subheadingTwo
        majorAuditionInfo {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
          heading
        }
        subheadingThree
        stories {
          photo {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          showTitle
          title
          date
          description
          button {
            buttonText
            buttonLink
          }
          secondDescription {
            subtitle
            description
          }
        }
      }
    }
  }
`