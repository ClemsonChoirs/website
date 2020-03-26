import React, { Fragment } from 'react';
import CardTitle from '../CardTitle';
import Button from '../Button';

import './ExpandedCard.scss';

const ExpandedCard = ({
  photo: image,
  title,
  date,
  description,
  button: {
    buttonLink,
    buttonText
  },
  showLocation,
  secondDescription: {
    subtitle,
    description: secondDescription
  }
}) => (
  <div className="expanded-card">
    <img
      alt={title}
      className="expanded-card__image"
      src={!!image.childImageSharp ? image.childImageSharp.fluid.src : image}
    />
    <div className="expanded-card__description">
      <CardTitle subtitle={date} title={title} />
      <p className="expanded-card__description__text">{description}</p>
      {
        !showLocation && (
          <Fragment>
            <CardTitle subtitle={subtitle} />
            <p className="expanded-card__description__text">{secondDescription}</p>
          </Fragment>
        )
      }
      <div className="expanded-card__description__button">
        <Button link={buttonLink}>{buttonText}</Button>
      </div>
    </div>
  </div>
)

export default ExpandedCard;