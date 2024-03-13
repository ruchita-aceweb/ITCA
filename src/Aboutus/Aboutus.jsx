import React, { useState, useEffect } from "react";
import imgabout1 from "../Images/About ITCA.png";
import "../Styles/font.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Aboutus = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  AOS.init({
    duration: 1200,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className='bg-aboutus bg-cover bg-center h-72 flex justify-center items-center ' data-aos="fade-down">
        <div className="text-center">
          <h1 className='text-white py-2 text-6xl'>About Us</h1>
          <p className='text-white text-xl'>Home/Aboutus</p>
        </div>
      </div>
  
      <div class=" lg:flex justify-between gap-4 text-white text-xl " data-aos="fade-up">
      <div class="w-full lg:w-1/4 p-4 bg-about text-center lg:rounded-bl-lg lg:rounded-br-lg lg:m-0 mb-2"> <Link to='/vision'><h1 className=" lg:mt-6 text-2xl">Vision </h1></Link></div>
      <div class="w-full lg:w-1/4 p-4 bg-about text-center lg:rounded-bl-lg lg:rounded-br-lg lg:m-0 mb-2"> <Link to='/mission'><h1 className=" lg:mt-6 text-2xl">Mission </h1></Link></div>
      <div class="w-full  lg:w-1/4 p-4 bg-about text-center lg:rounded-bl-lg lg:rounded-br-lg lg:m-0 mb-2">  <Link to='/governance'> <h1 className=" lg:mt-6 text-2xl">Governance</h1></Link></div>
  <div class="w-full lg:w-1/4 p-4 bg-about text-center lg:rounded-bl-lg lg:rounded-br-lg lg:m-0 mb-2"> <Link to='/heritage'><h1 className=" lg:mt-6 text-2xl">Heritage  </h1></Link></div>
  <div class="w-full  lg:w-1/4 p-4 bg-about text-center lg:rounded-bl-lg lg:rounded-br-lg lg:m-0 mb-2">  <Link to='/partnership'><h1 className=" lg:mt-6 text-2xl">Partnerships</h1></Link></div>
 
   <div class="w-full  lg:w-1/4 p-4 bg-about text-center lg:rounded-bl-lg lg:rounded-br-lg lg:m-0 mb-2">   <Link to='/contact'><h1 className=" lg:mt-6 text-2xl">Future Directions</h1></Link></div>
   <div class="w-full  lg:w-1/4 p-4 bg-about text-center lg:rounded-bl-lg lg:rounded-br-lg lg:m-0 mb-2">  <Link to='/strategy'> <h1 className=" lg:mt-6 text-2xl">Affiliations</h1></Link></div>
   <div class="w-full  lg:w-1/4 p-4 bg-about text-center lg:rounded-bl-lg lg:rounded-br-lg lg:m-0 mb-2">  <Link to='/ngo'> <h1 className="  text-2xl lg:mt-6">NGO Darpon </h1></Link></div>
 

</div>


      <div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-9 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark">
        <h1 className='text-3xl py-4 font-bold'>About ITCA</h1>
        <p className="text-justify">Welcome to ITCA-we Encourage, Educate, Envision and Empower the engineering and technology fraternity across the globe to conceptualize and realize engineering solutions for societal needs.</p>
        <p className="text-justify">ITCA is a society registered in Karnataka.<span className='font-bold'>NITI Aayog Unique ID: KA/2021/0272994.</span> </p>
        <div className="flex flex-wrap justify-center leading-8">
          <div className="w-full lg:w-2/3 md:w-1/2 sm:w-full  ">

            <p  class="text-justify">On a parallel track to nurture an inclusive environment in India to pursue NewSpace opportunities, ITCA has initiated amongst the educational institutions an ambitious “75 Students’ Satellites Mission 2022” to commemorate the “75 Years of Indian Independence” (1947-2022) by launching 75 student-built satellites into orbit in conjunction with national and international tech-space organizations. Its Space team has structured this mission with leading educators and faculty to strengthen India’s focus on science-based approach and experience-based learning and build a culture of innovation in the country.</p>
            <p  class="text-justify">ITCA has worked closely with Department of Space, Government of India organizations to give impetus and provide launch opportunities for THREE of our Students Satellite’s (UNITYSat) designed, fabricated, tested, integrated, and freely launched along with other Student’s Satellites.</p>
            <p class="text-justify"> Space technology and small satellites, precision agriculture, and Industry 4.0 are prominent recent areas of ITCA’s activity. It has pioneered the transfer of advanced technologies including Sensors for Societal Applications, Tissue Engineering, and MAVs. ITCA has created teams of professionals from diverse fields to progress Techno-Economic Viability (TEV) analysis for large infrastructure projects conceptualized by State Governments under Public Private Partnership (PPP) mode. The range of activities include:</p>

          </div>

          <div className="w-full lg:w-1/3 md:w-1/2 sm:w-full lg:pt-6 ">
            <img
              src={imgabout1}
              alt="satellite"
              className="mx-auto cursor-pointer"
              data-aos="fade-left"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
       <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
  <div className="bg-white p-4 max-w-md flex flex-col items-start">
    <button
      className="text-black  self-end" // Adding margin-bottom for spacing
      onClick={() => setIsModalOpen(false)}
    >
<IoClose />
    </button>
    <img src={imgabout1} alt="Large Satellite" />
  </div>
</div>

      )}
    


    </>
  );
};

export default Aboutus;