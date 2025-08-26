import React from 'react';
import { GiToothbrush } from 'react-icons/gi';
import { MdOutlineMedicalServices } from 'react-icons/md';
import { FaAppleAlt } from 'react-icons/fa';

const KidsOralCare = () => {
  const icons = [
    <GiToothbrush className="text-[2rem] xs:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] text-secondary-color mb-2" />,
    <FaAppleAlt className="text-[2rem] xs:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] text-secondary-color mb-2" />,
    <MdOutlineMedicalServices className="text-[2rem] xs:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] text-secondary-color mb-2" />
  ];

  const features = [
    {
      title: 'Brushing',
      description: 'Use a soft toothbrush, and brush your teeth twice a day with gentle circular motions.',
      icon: icons[0],
    },
    {
      title: 'Nutrition',
      description: 'Eat calcium-rich foods like milk, fruits and vegetables, and avoid excess sugar to maintain dental health.',
      icon: icons[1],
    },
    {
      title: 'Checkups',
      description: 'Start visiting the dentist from age one, and continue regular check-ups every six months to maintain dental health.',
      icon: icons[2],
    },
  ];

  return (
    <div className="kids-oral-care w-full px-2 sm:px-4 md:px-0">
      <div className="content w-full max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto bg-white/90 rounded-xl shadow-lg px-4 xs:px-6 sm:px-8 md:px-10 py-6 xs:py-8 md:py-10">
        <div className="headline text-center mb-4">
          <h4 className="headline-title text-[1.25rem] xs:text-[1.5rem] md:text-[2rem] font-bold text-secondary-color">
            <span className="oral-care-headline-content block">
              Dental Excellence,<br className="hidden md:inline" />Great Smiles
            </span>
          </h4>
        </div>
        <div className="oral-care-description mb-6">
          <p className="text-sm xs:text-base md:text-lg text-[#333] leading-relaxed">
            Your smile is the secret to your charm. Take care of your teeth as you care for your dreams;
            each brushing is a step towards a bright smile. Remember, oral care is not just a routine,
            but an investment in your confidence. Let your smile open the doors to happiness!
          </p>
        </div>
        <div className="features">
          <div className="
            features-inner 
            flex flex-col 
            gap-4 
            justify-center 
            sm:grid sm:grid-cols-2 
            md:grid-cols-3 
            sm:gap-6
          ">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="
                  feature-item 
                  w-full 
                  bg-white 
                  border border-[#ddd] 
                  rounded-lg 
                  p-4 xs:p-5 
                  text-center 
                  shadow-md 
                  transition-transform 
                  duration-200 
                  hover:scale-105 
                  flex flex-col items-center
                  min-h-[180px] 
                  sm:min-h-[200px]
                  md:min-h-[220px]
                "
              >
                <div className="icon-container flex justify-center items-center mb-2 text-sky-blue">
                  {feature.icon}
                </div>
                <div className="feature-title mb-1">
                  <h4 className="text-base xs:text-lg font-bold text-secondary-color">{feature.title}</h4>
                </div>
                <div className="feature-description">
                  <p className="text-xs xs:text-sm text-[#666]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="separator mt-6 border-t border-[#e5e7eb]"></div>
    </div>
  );
};

export default KidsOralCare;