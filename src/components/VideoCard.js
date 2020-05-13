import React from 'react';
import PropTypes from 'prop-types'

import './VideoCard.scss'

const VideoCard = ({ videoLink, header, content, className }) => {
  if (videoLink === '' || header === '') return null;

  return (
    <div className={`video-card-container ${className}`}>
      <div className="video-card">
        <div className="video-card__video-container">
          <iframe 
            className="video-card__video"
            title="Preview Concert Video"
            width="560" 
            height="315"
            src={videoLink} 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
        <h3 className="video-card__heading">{header}</h3>
        <p className="video-card__content">{content}</p>
      </div>
    </div>
  )
}

VideoCard.propTypes = {
  videoLink: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default VideoCard;
