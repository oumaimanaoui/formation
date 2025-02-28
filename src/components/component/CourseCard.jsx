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
    <div className="course-card">
      <div className="course-image">
        <img src={course.image} alt={course.title} />
      </div>
      <div className="course-details">
        <button className="learn-more">En savoir plus</button>
        <button className="join-now">Rejoignez-nous maintenant</button>
        <div className="price">{course.price}</div>
        <div className="rating">
          {renderStars(course.rating)} ({course.ratingCount})
        </div>
        <div className="title">{course.title}</div>
      </div>
    </div>
  );
}

export default CourseCard;