import React from 'react';
import img1 from "../Assest/1.png";
import img2 from '../Assest/11.jpg';
import img3 from '../Assest/12.jpg';
import img4 from '../Assest/14.jpg';
import img5 from '../Assest/18.png';
import img6 from '../Assest/18.png';
import Header from '../Components/Header';

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
    <div className="bg-[#F5F8FF] min-h-screen w-full">
      <Header />
      <section
        id="services"
        className="py-20 px-4 sm:px-6 md:px-8 bg-[#F5F8FF] w-full"
      >
        <h1
          className="
            text-center
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-semibold
            text-secondary-color
            uppercase
            mb-4
            relative
            pb-4
            after:content-['']
            after:absolute
            after:bottom-0
            after:left-1/2
            after:-translate-x-1/2
            after:w-20
            after:h-1
            after:bg-[#4A90E2]
            after:rounded
            "
        >
          Our Services
        </h1>
        <h3
          className="
            text-center
            text-base
            sm:text-lg
            md:text-xl
            text-[#7F8C8D]
            max-w-2xl
            mx-auto
            mb-12
            leading-relaxed
            font-normal
          "
        >
          Comprehensive dental care tailored to your needs
        </h3>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-8
            px-0
            md:px-4
            w-full
            "
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-[12px]
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
                flex
                flex-col
                h-full
                overflow-hidden
                group
                "
            >
              <a
                href={service.image}
                className="
                  flex flex-col h-full color-inherit p-6
                  focus:outline-none
                  focus:ring-2
                  focus:ring-[#4A90E2]
                  transition-all
                  duration-300
                "
                tabIndex={0}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  title={service.title}
                  className="
                    w-full
                    h-48
                    object-cover
                    rounded-[10px]
                    mb-4
                    transition-transform
                    duration-300
                    group-hover:scale-105
                  "
                />
                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    font-semibold
                    text-secondary-color
                    mb-2
                    transition-colors
                    duration-300
                    group-hover:text-[#4A90E2]
                  "
                >
                  {service.title}
                </h3>
                <p
                  className="
                    text-base
                    text-[#7F8C8D]
                    leading-relaxed
                    flex-grow
                  "
                >
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
