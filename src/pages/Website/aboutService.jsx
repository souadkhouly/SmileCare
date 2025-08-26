import React from 'react';
import img1 from '../Img/img1.jpg';
import img2 from '../Img/img2.jpg';
import img3 from '../Img/img3.jpg';
import img4 from '../Img/img4.jpg';
import img5 from '../Img/img5.jpg';
import img6 from '../Img/img6.jpg';
import Header from '../../Components/Header';
// import './service.css';

const aboutService = () => {
  const services = [
    {
      image: img1,
      title: 'Bridge Teeth',
      description: 'A dental bridge is installed by linking to neighboring teeth in the jaw. It typically uses porcelain materials to create a natural tooth appearance.'
    },
    {
      image: img2,
      title: 'Cosmetic Fillings',
      description: 'Cosmetic dental fillings are materials used to beautify and restore damaged or infected teeth. The type of filling depends on the size and nature of the damage requiring repair.'
    },
 
    {
      image: img5,
      title: 'Dental Abscess Treatment',
      description: 'We treat dental abscesses - bacterial infections causing pus accumulation in teeth or gums - with professional care and modern techniques.'
    },
    {
      image: img6,
      title: 'Panoramic X-Ray',
      description: 'Our advanced panoramic X-ray provides a comprehensive two-dimensional view of your entire mouth, enabling thorough dental assessment and treatment planning.'
    },
    {
      image: img4,
      title: 'Panoramic X-Ray',
      description: 'Our advanced panoramic X-ray provides a comprehensive two-dimensional view of your entire mouth, enabling thorough dental assessment and treatment planning.'
    },
    {
      image: img3,
      title: 'Panoramic X-Ray',
      description: 'Our advanced panoramic X-ray provides a comprehensive two-dimensional view of your entire mouth, enabling thorough dental assessment and treatment planning.'
    }
  ];

  return (
    <div>
      <section className="services" id="services">
        <h1 className="heading">Our Services</h1>
        <h3 className="ex">Comprehensive dental care tailored to your needs</h3>
        
        <div className="container-box container">
          {services.map((service, index) => (
            <div className="box" key={index}>
              <a href={service.image}>
                <img src={service.image} alt={service.title} title={service.title} />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default aboutService;
