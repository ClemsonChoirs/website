import React from 'react'
import PropTypes from 'prop-types'

import FloatingCard from './FloatingCard';
import Button from './Button';
import Image from './Image';

import './FloatingCardWithBigPicture.scss'

export const FloatingCardWithBigPicture = ({
  image,
  heading,
  description,
  button,
  objectFitVariant
}) => (
  <div className="floating-card-with-big-picture">
    <Image
      className="big-picture"
      image={image}
      alt="Ensemble"
      style={{ objectFit: objectFitVariant }}
    />
    <FloatingCard
      className={image && "description-card"}
      header={heading}
      content={description}
    >
    <Button data={button} />
    </FloatingCard>
  </div>
);

FloatingCardWithBigPicture.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape({
    buttonText: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired
  })
}

export default FloatingCardWithBigPicture;
