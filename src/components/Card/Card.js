import React from 'react';
import './Card.scss'
import propTypes from 'prop-types';

const Card = ( { details } ) => {
  const handleClick = ( e, details ) => {
    e.stopPropagation();
    let card = document.getElementById( `${details.key}-card` );
    card.classList.toggle( 'card--flipped' );
  }

  return (
    <div key={details.key} className='card' id={details.key + '-card'}>
      <div className='card__inner'>
        <div className='card__front'>
          <img
            className='card__image'
            src={details.image.default ? details.image.default : details.image}
            alt={details.header + ' image'}
          />
          <div className='card__heading'>{details.header}</div>
          <div className='card__sub'>{details.frontSub}</div>
          <div className='card__buttons__area'>
            <a
              rel='noreferrer'
              target='_blank'
              href={details.ref}
              className='card__re__button'
              download={details.download}
            >
              {details.refText}
            </a>
            <div
              className='card__more__button'
              onClick={( e ) => handleClick( e, details )}
            >
              More
              </div>
          </div>
        </div>
        <div className='card__back'>
          <div className='card__heading'>{details.time}</div>
          <div className='card__sub'>{details.backSub}</div>
          <div className='card__description'>{details.description}</div>
          <div
            className='card__back__button'
            onClick={( e ) => handleClick( e, details )}
          >
            Back
            </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  details: propTypes.object.isRequired,
}

export default Card;