import React from 'react';
import { useNavigate } from 'react-router-dom';
import './courshtml.css';

const courses = [
  {
    title: 'UI/UX Design',
    category: 'UX',
    teacher: 'John Doe',
    image: '/toup.png',
    price: '$29.99', // Added price
  },
  {
    title: 'Art & Design',
    category: 'Art & Design',
    teacher: 'Jane Smith',
    image: '/pnp.png',
    price: '$39.99', // Added price
  },
  {
    title: 'Computer Science',
    category: 'Computer Science',
    teacher: 'David Lee',
    image: '/pngp.png',
    price: '$49.99', // Added price
  },
  {
    title: 'Web Management',
    category: 'Web',
    teacher: 'Stephanie Thomas',
    image: '/iconehtml.png',
    price: '$24.99', // Added price
  },
  {
    title: 'Web Management',
    category: 'Web',
    teacher: 'Stephanie Thomas',
    image: '/iconehtml1.png',
    price: '$24.99', // Added price
  },
  {
    title: 'Web Management',
    category: 'Web',
    teacher: 'Stephanie Thomas',
    image: '/136446.png',
    price: '$70.99', // Added price
  },
  {
    title: 'Web Management',
    category: 'Web',
    teacher: 'Stephanie Thomas',
    image: '/pnfhtml.png',
    price: '$60.99', // Added price
  },
  {
    title: 'Web Management',
    category: 'Web',
    teacher: 'Stephanie Thomas',
    image: '/imag.png',
    price: '$55.99', // Added price
  },
  {
    title: 'Web Management',
    category: 'Web',
    teacher: 'Stephanie Thomas',
    image: '/iconehtml.png',
    price: '$30.99', // Added price
  },
  {
    title: 'Web Management',
    category: 'Web',
    teacher: 'Stephanie Thomas',
    image: '/pnp.png',
    price: '$39.99', // Added price
  },
  {
    title: 'Web Management',
    category: 'Web',
    teacher: 'Stephanie Thomas',
    image: '/iconehtml0.png',
    price: '$50.99', // Added price
  },
  {
    title: 'Web Management',
    category: 'Web',
    teacher: 'Stephanie Thomas',
    image: '/iconehtml3.png',
    price: '$45.99', // Added price
  },
];

function JavascriptFormation() {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/DrawerContent');
  };

  return (
    <div className="course-list">
      <h1>Courses</h1>
      <h2>Consultez notre catalogue de cours en ligne</h2>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div className="course-card" key={index}>
            <div className="course-image-container">
              <img src={course.image} alt={course.title} />
              <div className="course-price">{course.price}</div>
            </div>
            <h3>{course.title}</h3>
            <p>Category: {course.category}</p>
            <p>Teacher: {course.teacher}</p>
            <button>Acheter</button>
          </div>
        ))}
      </div>
      <button className="return-button" onClick={handleReturnHome}>
        Retour à l'accueil
      </button>
    </div>
  );
}

export default JavascriptFormation;