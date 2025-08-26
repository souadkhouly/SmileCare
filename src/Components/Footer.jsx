import logo from "../Assest/logo.png";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
// import { FaEnvelope, FaPhone, FaEarthAmericas } from 'react-icons/fa6'; // Uncomment if needed

function Footer() {
  return (
    <footer className="w-full bg-footer-bg text-white px-8 py-16 md:px-6 md:py-12 sm:px-4 sm:py-8">
      <a href="#Home">
        <img
          className="block max-w-[180px] h-auto mx-auto mb-8 transition-transform duration-300 ease-in-out hover:scale-105 sm:max-w-[140px]"
          src={logo}
          alt="smilecare-logo"
        />
      </a>
      <div
        className="
          flex flex-col gap-16 max-w-[1200px] mx-auto
          md:flex-row md:gap-12
        "
      >
        {/* Column 1 */}
        <div className="flex-1 text-left md:text-center">
          <span className="block text-[25px] font-semibold text-white mb-6 ">
            Smile Care
          </span>
          <p className="leading-relaxed mb-6">
            We are a team of dental students, specialist supervisors, and
            professionals who work together to ensure you receive the best
            treatment you need.
          </p>
          {/*
            <p className='flex items-center gap-4 mb-4'><a href='phone'><FaPhone /></a></p>
            <p className='flex items-center gap-4 mb-4'><a href='email'><FaEnvelope /></a></p>
            <p className='flex items-center gap-4 mb-4'><a href='home'><FaEarthAmericas /></a></p>
          */}
        </div>
        {/* Column 2 */}
        <div className="flex-1 text-left md:text-center">
          <span className="block text-[25px] font-semibold text-white mb-6 ">
            About SmileCare
          </span>
          <ul className="p-0">
            <li className="mb-3">
              <a
                href="#information"
                className="
                  text-[#e6f0f8]
                  transition-colors
                  duration-300
                  hover:text-white
                  inline-block
                  hover:translate-x-[5px]
                "
              >
                More Info
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#team"
                className="
                  text-[#e6f0f8]
                  transition-colors
                  duration-300
                  hover:text-white
                  inline-block
                  hover:translate-x-[5px]
                "
              >
                Our Team
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#awards"
                className="
                  text-[#e6f0f8]
                  transition-colors
                  duration-300
                  hover:text-white
                  inline-block
                  hover:translate-x-[5px]
                "
              >
                Our Awards
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#services"
                className="
                  text-[#e6f0f8]
                  transition-colors
                  duration-300
                  hover:text-white
                  inline-block
                  hover:translate-x-[5px]
                "
              >
                Dental Services
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#solutions"
                className="
                  text-[#e6f0f8]
                  transition-colors
                  duration-300
                  hover:text-white
                  inline-block
                  hover:translate-x-[5px]
                "
              >
                Our Solutions
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#clients"
                className="
                  text-[#e6f0f8]
                  transition-colors
                  duration-300
                  hover:text-white
                  inline-block
                  hover:translate-x-[5px]
                "
              >
                Clients
              </a>
            </li>
            <li className="mb-3">
              <a
                href="#pricing"
                className="
                  text-[#e6f0f8]
                  transition-colors
                  duration-300
                  hover:text-white
                  inline-block
                  hover:translate-x-[5px]
                "
              >
                Pricing
              </a>
            </li>
          </ul>
        </div>
        {/* Column 3 */}
        <div className="flex-1 text-left md:text-center">
          <span className="block text-[25px] font-semibold text-white mb-6 ">
            Social Networks
          </span>
          <p className="leading-relaxed mb-6">
            Visit SmileCare on these social links and connect with us. Make sure
            to follow our accounts for regular updates.
          </p>
          <ul className="flex gap-6 mt-4 justify-start md:justify-center p-0">
            <li>
              <a
                href="#facebook"
                className="
                  text-[#e6f0f8]
                  text-[1.5rem]
                  transition-colors
                  duration-300
                  hover:text-white
                  inline-block
                  transition-transform
                  hover:scale-120
                  hover:scale-[1.2]
                "
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                href="#twitter"
                className="
                  text-[#e6f0f8]
                  text-[1.5rem]
                  transition-colors
                  duration-300
                  hover:text-white
                  inline-block
                  transition-transform
                  hover:scale-120
                  hover:scale-[1.2]
                "
              >
                <FaTwitter />
              </a>
            </li>
            <li>
              <a
                href="#linkedin"
                className="
                  text-[#e6f0f8]
                  text-[1.5rem]
                  transition-colors
                  duration-300
                  hover:text-white
                  inline-block
                  transition-transform
                  hover:scale-120
                  hover:scale-[1.2]
                "
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
