import React from 'react';

export default function CaseCard({ 
  image, 
  title, 
  specialty, 
  difficulty, 
  description, 
  author,
  rating 
}) {
  return (
    <div className="case-card">
      <div className="case-card__image-container">
        <img 
          src={image} 
          alt={title} 
          className="case-card__image"
          loading="lazy"
        />
        <div className="case-card__difficulty" aria-label={`Difficulty: ${difficulty}`}>
          {difficulty}
        </div>
      </div>
      
      <div className="case-card__content">
        <div className="case-card__header">
          <h3 className="case-card__title">{title}</h3>
          <div className="case-card__rating">
            <span className="case-card__rating-score">{rating}</span>
            <span className="case-card__rating-star">★</span>
          </div>
        </div>

        <div className="case-card__specialty">
          <i className="fa-solid fa-tooth"></i>
          <span>{specialty}</span>
        </div>

        <p className="case-card__description">{description}</p>

        <div className="case-card__footer">
          <div className="case-card__author">
            <i className="fa-solid fa-user-doctor"></i>
            <span>{author}</span>
          </div>
          <button className="case-card__cta" aria-label={`View details for ${title}`}>
            View Case
          </button>
        </div>
      </div>
    </div>
  );
}