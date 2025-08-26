import React from 'react';
import { FaMapMarkerAlt, FaTooth, FaUserMd } from 'react-icons/fa';

const features = [
  {
    icon: <FaMapMarkerAlt />,
    title: 'Great Location',
    subtitle:
      'The website provides transportation to and from the university clinics, which are well-known to everyone',
  },
  {
    icon: <FaTooth />,
    title: '1st Class Service',
    subtitle:
      'Services are considered to be of high quality when supervised by a reputable entity, and the websits services are under the auspices of the Ministry of Education and Health.',
  },
  {
    icon: <FaUserMd />,
    title: 'Professional Doctor',
    subtitle:
      'The supervision of specialists at every step enhances patients trust in the website and the services it provides.',
  },
];

const WhyOurClientsLikeUs = () => {
  return (
    <div className="why-clients-like-us px-5 py-5 bg-[#f9f9f9]">
      <div className="content-section mb-8">
        <div className="header text-center mb-4">
          <h2 className="headline text-2xl md:text-3xl font-bold text-sky-blue">
            <small className="block text-base md:text-lg font-normal text-secondary-color">Why Our Clients</small>
            Like Us
          </h2>
        </div>
        <div className="description text-base md:text-lg text-[#666] leading-relaxed">
          <p>
            At our clinic, we prioritize your comfort and care above all else. Our team of expert professionals is
            dedicated to providing personalized treatment tailored to your needs. With state-of-the-art technology
            and a welcoming environment, we ensure that every visit is not only effective but also a positive and
            relaxing experience. Your smile is our passion, and we strive to make each appointment a step towards optimal dental health and satisfaction.
          </p>
        </div>
      </div>
      <div className="features-section flex flex-col md:flex-row md:justify-between">
        {features.map((item, index) => (
          <div
            key={index}
            className="feature-item flex-1 bg-white border border-[#ddd] rounded-lg p-6 text-center mx-0 md:mx-2 my-2 md:my-0 shadow-md transition-transform duration-200 hover:scale-105"
          >
            <div className="icon text-[40px] md:text-[70px] text-secondary-color mb-3 flex justify-center">
              {item.icon}
            </div>
            <div className="feature-title">
              <h4 className="text-lg md:text-xl font-bold text-sky-blue">{item.title}</h4>
            </div>
            <div className="feature-subtitle text-sm md:text-base text-[#666] mt-2">
              {item.subtitle}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyOurClientsLikeUs;