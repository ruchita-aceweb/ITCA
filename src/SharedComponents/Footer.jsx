import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo-white.png";
import "../Styles/Footer.css";
import {
  FaArrowRight,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaMailBulk,
} from "react-icons/fa";

import { footerusefuldata } from "../Dataadded/Datanav";

const Footer = () => {
  
  // Quick Links data
  const quickLinks = [
    { text: "Home", to: "/" },
    { text: "About us", to: "/" },
    { text: "Events", to: "/" },
    { text: "Associate...", to: "/" },
    { text: "Gallery", to: "/" },
    { text: "Membership", to: "/" },
    { text: "Contact", to: "/" },
   
  ];
  const supportLinks = [
    { text: "Policy and Advocacy", to: "/" },
    { text: "Awards and Recognition", to: "/" },
    { text: "ITCA Learning Initiatives", to: "/" },
    { text: "News", to: "/" },
    { text: "Events", to: "/" },
 
   
  ];
  const handleKnowMoreClick = () => {
    // Scroll to the top of the page when the "Know More" button is clicked
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  

  return (
    <footer className="py-8 text-white bg-blue-950">
      <div className="container flex flex-wrap mx-auto">
        {/* Logo and Contact Info */}
        <div className="w-full px-4 mb-4 md:w-1/4">
          <Link to="/home" className="mb-4 text-2xl font-semibold">
            <img src={logo} alt="Registration Guru" className="w-16 h-14" />
          </Link>
          <p className="mt-4 text-lg">
         
          </p>
          <div>
           
            <ContactInfo
              icon={<FaPhoneAlt size={15} />}
              link="tel:+890499797771"
              text="8904998617771"
            />
           
            <ContactInfo
              icon={<FaMailBulk size={15} />}
              link="mailto:president@itca.org.in"
              text="president@itca.org.in"
            />
            <address>Indian Technology Congress Association #3, First Main, BDA Layout, Kodihalli, HAL 2nd Stage, Bengaluru - 560008.</address>
          </div>
        </div>

        {/* Quick Links */}
        <div className="w-full px-4 mb-4 md:w-1/4">
          <SectionHeader text="Quick Links" />
          <ul className="footer-link">
            {quickLinks.map((link, index) => (
              <FooterLink
                key={index}
                text={link.text}
                to={link.to}
                icon={<FaArrowRight size={10} />}
              />
            ))}
          </ul>
        </div>

        {/* Practice Area */}
        <div className="w-full px-4 mb-4 md:w-1/4">
          <SectionHeader  onClick={handleKnowMoreClick} text="Useful Links" />
          <ul className="footer-link">
            {footerusefuldata.map((item, index) => (
              <FooterLink
             
                key={index}
                text={item.title}
                to={item.link}
                icon={<FaArrowRight size={10} />}
              />
            ))}
          </ul>
        </div>

        {/* Our Areas */}
        <div className="w-full px-4 mb-4 md:w-1/4">
          <SectionHeader text="Support" />
          <ul className="footer-link">
          <ul className="footer-link">
            {supportLinks.map((link, index) => (
              <FooterLink
                key={index}
                text={link.text}
                to={link.to}
                icon={<FaArrowRight size={10} />}
              />
            ))}
          </ul>
          </ul>
        </div>
      </div>
    </footer>
  );
};

// Helper components
const SectionHeader = ({ text }) => (
  <h3 className="mb-4 text-2xl font-semibold">{text}</h3>
);

const ContactInfo = ({ icon, link, text }) => (
  <div className="flex items-center mb-1">
    {icon}&nbsp;
    <a href={link} className="text-white">
      {text}
    </a>
  </div>
);


const FooterLink = ({ text, to, icon }) => (
  <li className="mb-2 flex items-center">
    {icon}&nbsp; <Link to={to}>{text}</Link>
  </li>
);

export default React.memo(Footer);
