import React from 'react';
import img1 from '../Img/img1.jpg';
import img2 from '../Img/img2.jpg';
import img3 from '../Img/img3.jpg';
import img4 from '../Img/img4.jpg';
import img5 from '../Img/img5.jpg';
import img6 from '../Img/img6.jpg';

const Service = () => {
  const services = [
    {
      image: img1,
      title: 'Bridge Teeth',
      description:
        'A dental bridge is installed by linking to neighboring teeth in the jaw. It typically uses porcelain materials to create a natural tooth appearance.',
    },
    {
      image: img2,
      title: 'Cosmetic Fillings',
      description:
        'Cosmetic dental fillings are materials used to beautify and restore damaged or infected teeth. The type of filling depends on the size and nature of the damage requiring repair.',
    },
    {
      image: img5,
      title: 'Dental Abscess Treatment',
      description:
        'We treat dental abscesses - bacterial infections causing pus accumulation in teeth or gums - with professional care and modern techniques.',
    },
    {
      image: img6,
      title: 'Panoramic X-Ray',
      description:
        'Our advanced panoramic X-ray provides a comprehensive two-dimensional view of your entire mouth, enabling thorough dental assessment and treatment planning.',
    },
    {
      image: img4,
      title: 'Panoramic X-Ray',
      description:
        'Our advanced panoramic X-ray provides a comprehensive two-dimensional view of your entire mouth, enabling thorough dental assessment and treatment planning.',
    },
    {
      image: img3,
      title: 'Panoramic X-Ray',
      description:
        'Our advanced panoramic X-ray provides a comprehensive two-dimensional view of your entire mouth, enabling thorough dental assessment and treatment planning.',
    },
  ];

  return (
    <div>
      <section
        id="services"
        className="py-20 px-4 md:px-8 bg-primary-color"
      >
        <h1 className="text-center text-4xl md:text-5xl font-semibold text-secondary-color uppercase mb-4 relative pb-4
          after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-sky-blue after:rounded
        ">
          Our Services
        </h1>
        <h3 className="text-center text-base md:text-lg text-[#7F8C8D] max-w-2xl mx-auto mb-12 leading-relaxed">
          Comprehensive dental care tailored to your needs
        </h3>
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4
          "
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-white rounded-[12px] overflow-hidden shadow-md transition-all duration-300
                flex flex-col h-full
                hover:-translate-y-1 hover:shadow-lg
              "
            >
              <a
                href={service.image}
                className="flex flex-col h-full text-inherit p-6"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  title={service.title}
                  className="w-full h-52 object-cover rounded-[10px] transition-all duration-300 hover:scale-105"
                />
                <h3
                  className="
                    text-2xl font-semibold text-secondary-color mt-6 mb-4 transition-colors duration-300
                    group-hover:text-[#4A90E2]
                  "
                >
                  {service.title}
                </h3>
                <p className="text-base text-[#7F8C8D] leading-relaxed flex-grow">
                  {service.description}
                </p>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Service;
