import React from "react";
import imgdoctor from "../Img/doctor1.jpg";
import signatureimg from "../Img/img-signature.png";
import TestimonialSlider from "./TestimonialSlider";
import TeamList from "./TeamList";
import oralcare from "../Img/soul.png";
import KidsOralCare from "./KidsOralCare";
import WhyOurClientsLikeUs from "./WhyOurClientsLikeUs";
import Header from "../../Components/Header";
import bg_image from "../Img/back2.jpg"
import Footer from "../../Components/Footer";
import Service from "./Service";

function About() {
  return (
    <>
      <Header />
      {/* About Us Section */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-fixed text-white"
        style={{
          backgroundImage: `url(${bg_image})`,
        }}
      >
        <div className="absolute inset-0 min-h-screen bg-[#5f83a0]/80 z-0" />
        <div className="relative z-10">
          <div className="top-info">
            <span className="block text-[#115278] text-[20px] font-light tracking-tight px-12 pt-12 pb-0">
              We'd Love To
            </span>
            <strong className="block text-[35px] tracking-wide px-12 pb-5 pt-0 drop-shadow-[0_6px_10px_rgba(0,0,0,0.1)]">
              See You Smile
            </strong>
          </div>
          <hr className="h-px bg-gradient-to-r from-gray-400 to-transparent bg-[length:8px_1px] my-0 mb-5 border-0 z-40 relative" />
          <div className="info-about-our-site flex flex-row items-center justify-around relative z-10
            max-lg:flex-col max-lg:items-center max-lg:space-y-4 max-lg:space-x-0
            max-lg:px-4
          ">
            <p className="row-info1 w-2/5 text-[rgb(224,218,218)] pb-8 max-lg:w-4/5 max-md:w-4/5">
              We have established a platform that caters to multiple categories,
              yet our core inspiration stemmed from the challenges faced by
              Dentistry students in engaging with patients to address dental cases
              aligned with their academic curriculum. Our platform facilitates the
              connection between students and patients, providing a valuable
              opportunity for the patients to receive tailored treatment at no
              cost, all supervised by specialized professionals.Students can
              efficiently locate suitable patients to enhance their practical
              experience.
            </p>
            <p className="row-info2 w-1/4 text-[rgb(224,218,218)] pb-8 max-lg:w-4/5 max-md:w-4/5">
              Patients, on the other hand, benefit from swift access to treatment
              at minimized, and often no, costs. Our mission is to ensure every
              patient receives timely and affordable dental care, bridging the gap
              between academic learning and real-world practice
            </p>
            <p className="row-info3 relative w-[15%] text-[rgb(224,218,218)] pb-8 max-lg:w-4/5 max-md:w-4/5
              before:content-[''] before:absolute before:h-0.5 before:w-32 before:left-8 before:-top-9 before:bg-[#115278]
              after:content-[''] after:absolute after:h-0.5 after:w-32 after:left-8 after:top-[90px] after:bg-[#115278]
            ">
              " SmileiCare was founded in the first place to create absolutely
              beautiful smiles"
            </p>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="our-team flex justify-around items-center flex-row max-lg:flex-col max-lg:space-y-8 py-8">
        <div className="our-team-info w-[35%] text-center max-lg:w-4/5">
          <span>
            <small className="block pb-2 text-lg text-[#5f83a0]">SmileCare</small>
            <strong className="block pb-0 text-xl text-[#013357]">Specialized Team</strong>
            <br />
          </span>
          <p className="relative text-[1.563em] leading-[1.5] pl-2 pt-0
            before:content-[''] before:absolute before:h-0.5 before:w-32 before:right-32 before:-top-10 before:bg-[#9f0c58]
            after:content-[''] after:absolute after:h-0.5 after:w-32 after:right-32 after:top-[180px] after:bg-[#9f0c58]
          ">
            " We are a team of specialist dentists and student trainees who work
            together to ensure you get the best treatment you need at a time
            that suits you. "
          </p>
          <img className="signatureimage w-[100px] mx-auto" src={signatureimg} alt="signature" />
        </div>
        <div className="our-team-img w-[55%] max-lg:w-4/5">
          <img className="w-full p-5" src={imgdoctor} alt="the specialist doctor" />
        </div>
      </div>

      {/* Team List */}
      <TeamList />

      {/* Our Awards Section */}
      <div className="our-awards mt-8">
        <h2 className="leading-8 text-[1.5rem] pl-20 text-left text-secondary-color p-5">
          Every smile holds a story, and every story holds a success
        </h2>
        <TestimonialSlider />
        <br />
        <br />
      </div>

      {/* Dental Services Section */}
      <div className="Dental-services">

        <Service />
      </div>

      {/* Solutions Section */}
      <div className="solution section w-full">
        <div
          className="
            oral-care 
            flex flex-col-reverse 
            md:flex-row 
            items-center 
            gap-6 
            md:gap-10 
            mb-5
          "
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <KidsOralCare />
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
            <img
              className="max-w-[320px] w-full h-auto object-contain rounded-xl shadow-md"
              src={oralcare}
              alt="oralcare"
            />
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="clients_section">
        <WhyOurClientsLikeUs />
      </div>
    </>
  );
}

export default About;
