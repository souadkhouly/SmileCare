import React from 'react';

export default function ServiceCard({ rating, title, description, ctaText }) {
  return (
    <div className="service-card">
      <div className="service-card__rating">
        <span className="service-card__rating-score">{rating}</span>
        <span className="service-card__rating-star">★</span>
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
      <button className="service-card__cta">{ctaText}</button>
    </div>
  );
}