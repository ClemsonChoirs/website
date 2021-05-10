import React from 'react';
import PropTypes from 'prop-types'

import './AudioCard.scss'

const AudioList = ({ header, audioList, className }) => {
  let audioLink = null
  if (audioList.length >= 1) audioLink = audioList[0].audioLink
  if (!audioLink || audioLink.publicURL === '' || header === '') return null;

  return (
    <div className={`audio-card-container ${className}`}>
      <div className="audio-card">
        <h3 className="audio-card__heading">{header}</h3>
        {
          audioList.map(({ audioLink, content }) => (
            <>
              <p className="audio-card__content">{content}</p>
              <audio controls src={audioLink.publicURL} className="audio-card__audio">
                <track kind="captions" />
                Your browser does not support HTML5 audio.
              </audio>
            </>
          ))
        }
      </div>
    </div>
  )
};

AudioList.propTypes = {
  audioList: PropTypes.array.isRequired,
  header: PropTypes.string.isRequired
}

export default AudioList;
