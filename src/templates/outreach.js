import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Header from '../components/Header';
import TextContent from '../components/TextContent';
import Button from '../components/Button';
import FloatingCard from '../components/FloatingCard';
import Subheading from '../components/Subheading';
import Layout from '../components/Layout';

import './outreach.scss';
import { BackgroundImageDiv } from '../components/Image';

export const OutreachTemplate = ({
  image,
  header: { topText, bottomText },
  subheading,
  about,
  button,
  subheadingTwo,
  auditionInformation,
  subheadingThree,
  buttonTwo,
  staffList
}) => (
  <div className="outreach">
    <BackgroundImageDiv
      className="top-image"
      image={image}
    />

    <div className="outreach__content">
      <Header topText={topText} bottomText={bottomText} />
      <TextContent header={subheading} content={about} />
      <Button data={button} />
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
      
      <Subheading>{subheadingThree}</Subheading>
      {
        staffList && staffList.map(({
                    image,
                    name,
                    title,
                    bio,
                    email
          }) => (
            <FloatingCard
              key={name}
              header={name}
              content={title}
              drawer={bio}
              email={email}
              image={image}
            />
          ))
      }
      <Button data={buttonTwo} />
    </div>
    
    <br></br>
  </div>
);

OutreachTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  header: PropTypes.object,
  subheading: PropTypes.string,
  about: PropTypes.string,
  button: PropTypes.object,
  subheadingTwo: PropTypes.string,
  auditionInformation: PropTypes.array,
  subheadingThree: PropTypes.string,
  staffList: PropTypes.array,
  buttonTwo: PropTypes.object
}

const Outreach = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <OutreachTemplate
        image={frontmatter.image}
        header={frontmatter.header}
        subheading={frontmatter.subheading}
        about={frontmatter.about}
        button={frontmatter.button}
        subheadingTwo={frontmatter.subheadingTwo}
        auditionInformation={frontmatter.auditionInformation}
        subheadingThree={frontmatter.subheadingThree}
        staffList={frontmatter.staffList}
        buttonTwo={frontmatter.buttonTwo}
      />
    </Layout>
  )
}

Outreach.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default Outreach

export const pageQuery = graphql`
  query Outreach($id: String!) {
    markdownRemark(id: { eq: $id } ) {
      frontmatter {
        header {
          topText
          bottomText
        }
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        subheading
        about
        button {
          buttonText
          file {
            publicURL
          }
        }
        subheadingTwo
        auditionInformation {
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
        staffList {
          name
          title
          email
          bio
          image {
            publicURL
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        buttonTwo {
          buttonText
          buttonLink
          newTab
        }
      }
    }
  }
`
