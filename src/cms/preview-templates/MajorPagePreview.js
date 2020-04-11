import React from 'react'
import PropTypes from 'prop-types'
import { MajorPageTemplate } from '../../templates/major-page'

const MajorPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  const {
    majorHeading,
    subheading,
    about,
    button,
    subheadingTwo,
    majorAuditionInfo,
    image,
    socialMedia,
    subheadingThree,
    stories
  } = data;
 
  if (data) {
    return (
      <MajorPageTemplate
        majorHeading={majorHeading}
        subheading={subheading}
        about={about}
        button={button}
        subheadingTwo={subheadingTwo}
        majorAuditionInfo={majorAuditionInfo}
        image={image}
        socialMedia={socialMedia}
        subheadingThree={subheadingThree}
        stories={stories}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

MajorPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default MajorPagePreview
