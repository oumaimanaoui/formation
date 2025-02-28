import React from 'react';

function CourseCard({ course }) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i < rating ? 'filled' : ''}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <article className="course-card">
      <div className="course-card__image">
        <img src={course.image} alt={course.title} />
      </div>
      <div className="course-card__details">
        <button className="course-card__button course-card__button--learn-more">
          En savoir plus
        </button>
        <button className="course-card__button course-card__button--join-now">
          Rejoignez-nous maintenant
        </button>
        <div className="course-card__price">{course.price}</div>
        <div className="course-card__rating">
          {renderStars(course.rating)} ({course.ratingCount})
        </div>
        <h3 className="course-card__title">{course.title}</h3>
      </div>
    </article>
  );
}

export default CourseCard;