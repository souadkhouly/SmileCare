import React from "react";
import HeroSection from "../../Components/HeroSection";
import ServicesSection from "../../Components/ServicesSection";
import Header from "../../Components/Header";
import doctor1 from "../Img/doctor1.jpg";
import StudentCards from "../../Components/StudentCards";

export default function Home() {
  // const handleSearch = ({ searchTerm, specialty }) => {
  // Implement search logic here
  //   console.log('Searching:', { searchTerm, specialty });
  // };
  return (
    <div className="home">
      <Header />
      <HeroSection />

      {/* Service */}
      <div>
        <div>
          <ServicesSection />
        </div>
      </div>

      {/* About us */}
      <div
        className={`
          about 
          bg-primary-color 
          py-20 
          text-blue-800
        `}
      >
        <div className="text-center mb-16">
          <h3
            className={`
              text-[2.75rem] font-semibold mb-5 
              bg-secondary-color
              bg-clip-text text-transparent
            `}
          >
            About Us
          </h3>
        </div>

        <div
          className={`
            flex flex-col md:flex-row items-center justify-between 
            max-w-[1200px] mx-auto gap-16 px-5
          `}
        >
          <div className="flex-1">
            <p
              className={`
                text-lg leading-relaxed text-secondary-color mb-8
              `}
            >
              We have built a site that helps more than one category. But
              specifically the idea came to build it from the suffering of
              students of the Faculty of Dentistry in communicating with
              patients to treat dental cases that suit their subjects at the
              university. Thus, our idea is based on finding patients for these
              students and also a good benefit for the patient who will get free
              treatment, and all this under the purchase of specialized doctors.
            </p>

            <a
              href="b"
              className={`
                inline-block 
                bg-buttons-color
                rounded-full 
                px-8 py-3 
                text-white 
                font-medium 
                shadow-lg 
                transition-transform duration-200 
                hover:scale-105
              `}
            >
              <span
                className={`
                  text-base 
                  cursor-pointer 
                  font-medium
                `}
              >
                Learn More
              </span>
            </a>
          </div>

          <div className="flex-1">
            <img
              alt="About Us"
              src={doctor1}
              className={`
                w-full h-auto 
                rounded-2xl 
                shadow-[0_20px_25px_-5px_rgba(37,99,235,0.1),0_10px_10px_-5px_rgba(37,99,235,0.04)]
              `}
            />
          </div>
        </div>
      </div>
      <div>
        <StudentCards />
      </div>
    </div>
  );
}
