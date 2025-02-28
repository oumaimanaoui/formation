import React from 'react';
import CourseCard from './CourseCard';
import './PopularCourses.css';

function PopularCourses() {
  const courses = [
    {
      id: 1,
      title: 'Cours de conception et de développement Web pour débutants',
      price: '149,00 $',
      rating: 5,
      ratingCount: 123,
      image: '/image10.png',
    },
    {
      id: 2,
      title: 'Cours de conception et de développement Web pour débutants',
      price: '149,00 $',
      rating: 5,
      ratingCount: 123,
      image: '/image9.png',
    },
    {
      id: 3,
      title: 'Cours de conception et de développement Web pour débutants',
      price: '149,00 $',
      rating: 5,
      ratingCount: 123,
      image: '/image4.png',
    },
  ];

  return (
    <section className="popular-courses">
      <h2 className="popular-courses__title">Cours populaires</h2>
      <div className="popular-courses__grid">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}

export default PopularCourses;