import React from 'react';
import './categories.css';

function Categories() {
  const categories = [
    {
      id: 1,
      name: 'Titre Professionnel Employé(e)',
      image: 'img/cat-1.jpg', // Replace with your image
      count: 0, // No count shown in the image
    },
    {
      id: 2,
      name: 'Préparation à l\'entrée en école d\'aide-',
      image: 'pdf2.png', // Replace with your image
      count: 0,
    },
    {
      id: 3,
      name: 'CQP Salarié(e) Polyvalent(e): Aménagement paysager ou',
      image: 'pdf0.png', // Replace with your image
      count: 0,
    },
    {
      id: 4,
      name: 'Accès à la qualification dans les métiers de l\'agriculture et',
      image: '/pdf1.png', // Replace with your image
      count: 0,
    },
  ];

  return (
    <div className="container-xxl py-5 category">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Formations</h6>
          <h1 className="mb-5">Découvrez les cours mises à votre disposition!</h1>
        </div>
        <div className="row g-3">
          {categories.map((category) => (
            <div key={category.id} className="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.1s">
              <a className="position-relative d-block overflow-hidden" href="">
                <img className="img-fluid" src={category.image} alt={category.name} />
                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: '1px' }}>
                  <h5 className="m-0">{category.name}</h5>
                  {/* No count displayed */}
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;