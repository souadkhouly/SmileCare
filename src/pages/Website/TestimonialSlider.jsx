import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    img: 'https://denticare.bold-themes.com/michelle/wp-content/uploads/sites/18/2020/01/client-01-160x160.jpg',
    title: 'I look & feel great!',
    text: 'Your wonderful efforts make every smile brighter; thank you for your dedication',
  },
  {
    img: 'https://denticare.bold-themes.com/michelle/wp-content/uploads/sites/18/2020/01/client-02-160x160.jpg',
    title: 'Nothing but the tooth!',
    text: 'You contribute to changing patients lives with your human touch and exceptional skills.',
  },
  {
    img: 'https://denticare.bold-themes.com/michelle/wp-content/uploads/sites/18/2020/01/client-03-160x160.jpg',
    title: 'One great experience.',
    text: 'Your excellence in providing healthcare shows your true passion for the profession; you are health heroes',
  },
  {
    img: 'https://denticare.bold-themes.com/michelle/wp-content/uploads/sites/18/2020/02/client-04-160x160.jpg',
    title: 'Awesome service',
    text: 'Every patient leaves smiling thanks to your professionalism and diligent care; thank you',
  },
  {
    img: 'https://denticare.bold-themes.com/michelle/wp-content/uploads/sites/18/2020/02/client-05-160x160.jpg',
    title: 'Great smiles!',
    text: 'Your hard work and creativity in dental care reflect your complete commitment to improving quality of life.',
  },
];

// Custom Arrow components with Tailwind classes
const Arrow = ({  style, onClick, direction }) => (
  <div
    className={`
      !bg-[#115278] !text-[#fefefe] rounded-full w-10 h-10 flex items-center justify-center z-10
      absolute ${direction === 'next' ? 'right-2' : 'left-2'} top-[20%] -translate-y-1/2 cursor-pointer
      shadow-md
    `}
    style={{ ...style }}
    onClick={onClick}
  >
    {direction === 'next' ? '→' : '←'}
  </div>
);

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <Slider
      {...settings}
      className="!flex "
      // The !flex ensures the slick-slide flex override
    >
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="flex items-center justify-center "
        >
          <div
            className={`
              p-6 border-2 border-gray-200 rounded-2xl bg-[#f9f9f9] shadow-md text-center mb-8
              w-full max-w-md min-w-[260px] h-[370px] flex flex-col justify-between gap-5
              sm:max-w-sm sm:h-[350px]
              md:max-w-md md:h-[370px]
              lg:max-w-lg lg:h-[400px]
              xl:max-w-xl xl:h-[420px]
              content_slider_item
              transition-all duration-200
            `}
          >
            <div className="mb-4 slider_image flex justify-center">
              <span>
                <img
                  decoding="async"
                  width="120"
                  height="120"
                  src={testimonial.img}
                  alt={testimonial.title}
                  className="rounded-full w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] object-cover mx-auto"
                />
              </span>
            </div>
            <header className="text-[#115278] text-[1.1rem] md:text-[1.2rem] my-2 font-semibold slider_headline">
              <h4 className="slider_headline_tag">
                <span>{testimonial.title}</span>
              </h4>
            </header>
            <div className="text-[#555] text-[0.95rem] md:text-[1rem] leading-tight slider_text flex-1 flex items-center justify-center">
              <p className="px-2">{testimonial.text}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default TestimonialSlider;