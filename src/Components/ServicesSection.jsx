import React from 'react';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  const services = [
    {
      rating: 4.5,
      title: 'Geriatric Dental Suites',
      description: 'Students can practice with elderly patients and gum disease cases under expert supervision.',
      ctaText: 'Browse Cases'
    },
    {
      rating: 3.4,
      title: "Children's Dental Care",
      description: 'Specialized treatment for young patients to ensure healthy tooth development.',
      ctaText: 'View Opportunities'
    },
    {
      rating: 3.4,
      title: "Children's Dental Care",
      description: 'Specialized treatment for young patients to ensure healthy tooth development.',
      ctaText: 'View Opportunities'
    }
  ];

  return (
    <section className="py-10 sm:py-14 md:py-16 bg-primary-color">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <h1
          className="text-2xl sm:text-3xl md:text-[2.5rem] lg:text-[40px] text-center mb-8 bg-secondary-color bg-clip-text text-transparent drop-shadow-md font-bold"
        >
          We Are Always Ready to Help You &amp; Your Family
        </h1>
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6 
          sm:gap-8
        ">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                bg-white 
                rounded-2xl 
                shadow-lg 
                border-t-4 
                border-buttons-color 
                p-6 
                sm:p-8 
                flex flex-col 
                justify-between 
                transition-transform 
                duration-300 
                hover:-translate-y-2 
                hover:shadow-2xl
              "
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-base sm:text-lg font-semibold text-sky-blue">{service.title}</span>
                <span className="flex items-center gap-1 text-yellow-400 font-bold text-sm sm:text-base">
                  {service.rating}
                  <svg className="w-5 h-5 inline-block" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"/>
                  </svg>
                </span>
              </div>
              <p className="text-gray-500 mb-6 text-sm sm:text-base">{service.description}</p>
              <button
                className="w-fit mt-auto bg-buttons-color hover:bg-sky-blue text-white font-semibold py-2 px-4 rounded-lg shadow transition-all duration-200 text-sm sm:text-base"
              >
                {service.ctaText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}