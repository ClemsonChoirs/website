import React from 'react'
import PropTypes from 'prop-types'

import './Button.scss';
import { Link } from 'gatsby';

export const Button = ({ data, className }) => {
  if (!data || (!data.buttonLink && !data.downloadableFile)) return <></>

  const button = (
    <button className={`button ${className}`}>
      {data.buttonText}
    </button>
  );

  if (data.downloadableFile) {
    data.newTab = true;
    data.buttonLink = data.downloadableFile.publicURL
  }

  if (data.newTab) {
    return (
      <a href={data.buttonLink} target="_blank" rel="noopener noreferrer">
        {button}
      </a>
    );
  } else {
    return (
      <Link to={data.buttonLink}>
        {button}
      </Link>
    )
  }
}

Button.propTypes = {
  data: PropTypes.shape({
    buttonLink: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    newTab: PropTypes.bool
  })
}

export default Button;
