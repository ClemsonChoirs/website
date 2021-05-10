import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import AudioList from '../components/AudioList';
import Header from '../components/Header';
import TextContent from '../components/TextContent';
import Button from '../components/Button';
import Subheading from '../components/Subheading';
import FloatingCard from '../components/FloatingCard';
import SocialMediaLine from '../components/SocialMediaLine'
import Layout from '../components/Layout';

import './audition-page.scss'

export const AuditionPageTemplate = ({
  auditionHeading: { topText, bottomText },
  subheading,
  button,
  subheadingTwo,
  auditionInfo,
  subheadingThree,
  startingPitch,
  subheadingFour,
  nextSteps,
  socialMedia,
  html
}) => (
  <div className="major-page">
    <div className="major-page__content">
      <Header topText={topText} bottomText={bottomText} />
      <TextContent header={subheading} content={html}></TextContent>
      <Button data={button} />

      <Subheading>{subheadingTwo}</Subheading>
      <div className="major-page__content__auditions">
        {
          auditionInfo ?
            auditionInfo.map(({ image, heading, text, button: auditionInfoButton }) => (
              <FloatingCard
                image={image}
                header={heading}
                content={text}>
                  <Button data={auditionInfoButton} />
              </FloatingCard>
            )) : null
        }
      </div>

      <Subheading>{subheadingThree}</Subheading>
      {
        startingPitch && startingPitch.map((audioObject) => (
          <AudioList {...audioObject} />
        ))
      }

      <Subheading>{subheadingFour}</Subheading>
      <div className="major-page__content__auditions">
        {
          nextSteps ?
            nextSteps.map(({ image, heading, text }) => (
              <FloatingCard
                image={image}
                header={heading}
                content={text} />
            )) : null
        }
      </div>

      <SocialMediaLine
        className="major-page__content__social-media"
        socialMedia={socialMedia}
      />
    </div>
  </div>
);

AuditionPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  majorHeading: PropTypes.object,
  subheading: PropTypes.string,
  button: PropTypes.object,
  subheadingTwo: PropTypes.string,
  auditionInfo: PropTypes.array,
  socialMedia: PropTypes.array,
  subheadingThree: PropTypes.string,
  stories: PropTypes.array
}

const AuditionPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout>
      <AuditionPageTemplate
        auditionHeading={frontmatter.auditionHeading}
        subheading={frontmatter.subheading}
        button={frontmatter.button}
        subheadingTwo={frontmatter.subheadingTwo}
        auditionInfo={frontmatter.auditionInfo}
        subheadingThree={frontmatter.subheadingThree}
        startingPitch={frontmatter.startingPitch}
        subheadingFour={frontmatter.subheadingFour}
        nextSteps={frontmatter.nextSteps}
        socialMedia={frontmatter.socialMedia}
        html={html}
      />
    </Layout>
  )
}

AuditionPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.object,
      frontmatter: PropTypes.object,
    }),
  }),
}

export default AuditionPage

export const pageQuery = graphql`
  query AuditionPage {
    markdownRemark(frontmatter: { templateKey: { eq: "audition-page" } }) {
      html
      frontmatter {
        auditionHeading {
          topText
          bottomText
        }
        subheading
        button {
          buttonText
          buttonLink
          newTab
        }
        subheadingTwo
        auditionInfo {
          image {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
          heading
          button {
            buttonText
            buttonLink
            newTab
          }
        }
        subheadingThree
        startingPitch {
          header
          audioList {
            audioLink {
              publicURL
            }
            content
          }
        }
        subheadingFour
        nextSteps {
          heading
          image  {
            childImageSharp {
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          text
        }
        socialMedia {
          icon {
            publicURL
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          link
        }
      }
    }
  }
`