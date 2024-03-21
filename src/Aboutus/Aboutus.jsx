import React, { useState, useEffect } from "react";

import "../Styles/font.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

import { Link } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";


const Aboutus = () => {

    const [isOpen, setIsOpen] = useState(false);
    const[isOpen1, setIsopen1]= useState(false);
    const[isOpen2, setIsopen2]= useState(false);
    const[isOpen3, setIsopen3]= useState(false);
    const[isOpen4, setIsopen4]= useState(false);
    const[isOpen5, setIsopen5]= useState(false);
    const[isOpen6, setIsopen6]= useState(false);
    const[isOpen7, setIsopen7]= useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
     
    };
    const toggleAccordion1 = () =>{
      setIsopen1 (!isOpen1)
    }
    const toggleAccordion2 = () =>{
      setIsopen2 (!isOpen2)
    }
    const toggleAccordion3 = () =>{
      setIsopen3 (!isOpen3)
    }
    const toggleAccordion4 = () =>{
      setIsopen4 (!isOpen4)
    }
    const toggleAccordion5 = () =>{
      setIsopen5 (!isOpen5)
    }
    const toggleAccordion6 = () =>{
      setIsopen6 (!isOpen6)
    }
    const toggleAccordion7 = () =>{
      setIsopen7 (!isOpen7)
    }


  AOS.init({
    duration: 1200,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  

  return (
    <>
     <div className='bg-homeabout bg-cover bg-center homebanners  flex lg:px-28 items-center ' data-aos="fade-down" >
        <div className="p-4">
          <h1 className='text-white py-2 text-6xl'>About Us</h1>
          <p className='text-white text-xl'>Welcome to ITCA-we Encourage, Educate, Envision </p>
          <p className='text-white text-xl'>and Empower the engineering and technology fraternity</p>
           <p className='text-white text-xl'> across the globe to conceptualize and realize engineering solutions for societal needs.</p>
           <Link to='/aboutinfo'>
   <button className="bg-skyblue py-2 px-4 rounded-lg text-white mt-4 ">Learn More</button>
   </Link>
        </div>
      </div>
  
      <div className="lg:flex justify-center gap-2 text-white bg-skyblue" >
    
      <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen ? 'h-[520px]' : 'h-24'}`}>
        <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion}>
        Vision
        </h1>
        {isOpen && (
          <p className="mt-2">
         "Empowering citizens with a technology-centric ethos, catalyzing profound societal and national advancement."
          </p>
        )}
      </div>
      <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen1 ? 'h-auto' : 'h-24'}`}>
        <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion1}>
          Mission
        </h1>
        {isOpen1 && (
          <p className="mt-2">
            "Through collaborative endeavors, we strive to empower the advancement of technology-centric initiatives, creating a dynamic societal landscape where every citizen embraces technology as a catalyst for positive change. In doing so, we aim to foster an ongoing journey of evolution towards collective well-being."
          </p>
        )}
      </div>
      <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen2 ? 'h-auto' : 'h-24'}`}>
        <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion2}>
          Governance
        </h1>
        {isOpen2 && (
          <p className="mt-2">
            "ITCA has renowned and senior leaders from multiple engineering disciplines with globally recognized contributions to industry, academia, and research organizations."
          </p>
        )}
      </div>
      <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2  ${isOpen3 ? 'h-auto' : 'h-24'}`}>
        <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion3}>
      Heritage
        </h1>
        {isOpen3 && (
          <div>
          <p className="mt-2">
          "ITC over the last 18 years has attained international prominence."
          </p>
            <Link to="/partnership" className="text-center">
            <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-2 rounded-lg text-white ">
              <p className="">Read more</p>
              <span className="ml-1"><FaArrowRightLong /></span>
            </div>
          </Link>
          </div>
        )}
       
      </div>
      <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2  ${isOpen4 ? 'h-auto' : 'h-24'}`}>
        <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion4}>
        Partnerships
        </h1>
        {isOpen4 && (
          <div>
          <p className="mt-2">
            "ITCA has structured active and functional partnerships with global . "
          </p>
            <Link to="/partnership" className="text-center">
            <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white ">
              <p className="">Read more</p>
              <span className="ml-1"><FaArrowRightLong /></span>
            </div>
          </Link>
          </div>
        )}
       
      </div>
      <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2  ${isOpen5 ? 'h-auto' : 'h-24'}`}>
        <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion5}>
        Future Directions
        </h1>
        {isOpen5 && (
          <p className="mt-2">
            "Coming Soon"
          </p>
        )}
      </div>
      <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2  ${isOpen6 ? 'h-auto' : 'h-24'}`}>
        <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion6}>
        Affiliations
        </h1>
        {isOpen6 && (
          <p className="mt-2">
            "Coming Soon"
          </p>
        )}
      </div>
      <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2  ${isOpen7 ? 'h-[520px' : 'h-24'}`}>
        <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion7}>
        Ngo Darpan
        </h1>
        {isOpen7 && (
          <div>
          <p className="mt-2">
            "ITCA has completed the registration on NITI-Aayog."
          </p>
          <Link to="/ngo" className="text-center">
      <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-2 rounded-lg text-white ">
        <p className="">Read more</p>
        <span className="ml-1"><FaArrowRightLong /></span>
      </div>
    </Link>
          </div>
        )}
      </div>
    
    </div>


    


    </>
  );
};

export default Aboutus;