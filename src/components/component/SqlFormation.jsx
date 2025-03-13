import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './courshtml.css';

const courses = [
  {
    teacher: 'John Doe',
    image: '/sql3.png',
    link: '/UiUxDesign',
    price: '49.99', // Added price
  },
  {
    teacher: 'Jane Smith',
    image: '/sql3.png',
    link: '/ArtDesgin',
    price: '59.99',
  },
  {
    teacher: 'David Lee',
    image: '/sql3.png',
    link: '/computerScience',
    price: '79.99',
  },
  {
    teacher: 'Stephanie Thomas',
    image: '/sql3.png',
    link: '/WebManagement1',
    price: '60.99',
  },
  {
    teacher: 'Stephanie Thomas',
    image: '/sql3.png',
    link: '/WebManagement2',
    price: '55.99',
  },
  {
    teacher: 'Stephanie Thomas',
    image: '/sql3.png',
    link: '/WebManagement3',
    price: '46.99',
  },
  {
    teacher: 'Stephanie Thomas',
    image: '/sql3.png',
    link: '/WebManagement4',
    price: '60.99',
  },
  {
    teacher: 'Stephanie Thomas',
    image: '/sql3.png',
    link: '/WebManagement',
    price: '70.99',
  },
 
 
  {
    teacher: 'Stephanie Thomas',
    image: '/sql3.png',
    link: '/WebManagemt',
    price: '56.99',
  },
  {
    teacher: 'Stephanie Thomas',
    image: '/sql3.png',
    link: '/ WebManagements',
    price: '50.99',
  },
];

function  SqlFormation() {
  const navigate = useNavigate();

  const handleCourseClick = (course) => {
    navigate('/UiUxDesign', { state: { product: course } });
  };

  return (
    <div className="course-list">
      <h1>Courses</h1>
      <h2>Consultez notre catalogue de cours en ligne</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index} onClick={() => handleCourseClick(course)}>
            <img src={course.image} alt={course.teacher} />
            <p>Teacher: {course.teacher}</p>
            <p>Price: ${course.price}</p>
            <button>Acheter</button>
          </div>
        ))}
      </div>
      <Link to="/cours" className="return-to-shop">
        ← Retour à la accueil
      </Link>
    </div>
  );
}

export default SqlFormation;