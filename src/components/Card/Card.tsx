import React, { FC } from 'react';
import { CardProps } from './types.d';
const Card: FC<CardProps> = ({ description, image, title }) => {
  return (
    <div className='col-12 col-md-6 col-lg-4'>
      <div className='card'>
        <figure className='card__figure'>
          <img
            src={image}
            className='card__image'
            alt={title}
          />
        </figure>
        <h3 className='card__title'>{title}</h3>
        <p className='card__desc'>{description}</p>
      </div>
    </div>
  );
};

export default Card;
