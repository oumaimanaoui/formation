import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './courshtml.css';

const courses = [
  {
    teacher: 'John Doe',
    image: '/toup.png',
    link: '/UiUxDesign',
    price: '49.99', // Added price
  },
  {
    teacher: 'Jane Smith',
    image: '/pnp.png',
    link: '/ArtDesgin',
    price: '59.99',
  },
  {
    teacher: 'David Lee',
    image: '/pngp.png',
    link: '/computerScience',
    price: '79.99',
  },
  {
    teacher: 'Stephanie Thomas',
    image: '/iconehtml.png',
    link: '/WebManagement1',
    price: '60.99',
  },
  {
    teacher: 'Stephanie Thomas',
    image: '/iconehtml1.png',
    link: '/WebManagement2',
    price: '55.99',
  },
  {
    teacher: 'Stephanie Thomas',
    image: '/136446.png',
    link: '/WebManagement3',
    price: '46.99',
  },
  {
    teacher: 'Stephanie Thomas',
    image: '/pnfhtml.png',
    link: '/WebManagement4',
    price: '60.99',
  },
  {
    teacher: 'Stephanie Thomas',
    image: '/imag.png',
    link: '/WebManagement',
    price: '70.99',
  },
 
 
  {
    teacher: 'Stephanie Thomas',
    image: '/iconehtml0.png',
    link: '/WebManagemt',
    price: '56.99',
  },
  {
    teacher: 'Stephanie Thomas',
    image: '/iconehtml3.png',
    link: '/ WebManagements',
    price: '50.99',
  },
];

function HtmlFormation() {
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleReturnHome = () => {
    navigate('/DrawerContent');
  };

  const handleCourseClick = (course) => {
    setSelectedCourse(course);
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
            <Link to={course.link}><button>Acheter</button></Link>
          </div>
        ))}
      </div>
      <button className="return-button" onClick={handleReturnHome}>
        Retour à l'accueil
      </button>
      {selectedCourse && <Cart selectedCourse={selectedCourse} />}
    </div>
  );
}

export default HtmlFormation;