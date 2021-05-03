import React from 'react'
import PropTypes from 'prop-types'
import { AuditionPageTemplate } from '../../templates/audition-page'

const AuditionPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();
  const {
    auditionHeading,
    subheading,
    button,
    subheadingTwo,
    auditionInfo,
    subheadingThree,
    startingPitch,
    subheadingFour,
    nextSteps,
    socialMedia
  } = data;
 
  if (data) {
    return (
      <AuditionPageTemplate
        auditionHeading={auditionHeading}
        subheading={subheading}
        button={button}
        subheadingTwo={subheadingTwo}
        auditionInfo={auditionInfo}
        subheadingThree={subheadingThree}
        startingPitch={startingPitch}
        subheadingFour={subheadingFour}
        nextSteps={nextSteps}
        socialMedia={socialMedia}
        html={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

AuditionPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default AuditionPagePreview
