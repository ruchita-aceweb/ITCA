
import React, { useState, useEffect } from "react";
import imgabout1 from "../Images/About ITCA.png";
import "../Styles/font.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { IoClose } from "react-icons/io5";


const Aboutinfo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  AOS.init({
    duration: 1200,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <>
   <div className='bg-aboutus bg-cover bg-center h-72 flex justify-center items-center ' data-aos="fade-down">
        <div className="text-center">
          <h1 className='text-white py-2 text-6xl'>About Us</h1>
    
        </div>
      </div>
      <div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-9 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark">
        <h1 className='text-3xl py-4 font-bold'>About ITCA</h1>
        <p className="text-justify">Welcome to ITCA-we Encourage, Educate, Envision and Empower the engineering and technology fraternity across the globe to conceptualize and realize engineering solutions for societal needs.</p>
        <p className="text-justify">ITCA has focused on building synergies between academia, industry, and research organizations, emphasizing building societal transformation and progress capacity. ITCA has created and nurtured teams with significant expertise in multiple engineering disciplines to progress technological research programs. Over the last 15 years, the ITCA has gained international recognition as a unique platform for industry-academia-research labs-policymakers engagement to build capacity-building for global technological advancement. </p>
        <div className="flex flex-wrap justify-center leading-8">
          <div className="w-full lg:w-2/3 md:w-1/2 sm:w-full  ">

            <p  class="text-justify">Identifying the opportunities NewSpace has opened for India’s rapid growth and development, ITCA has structured as a collaborative ecosystem of leading global SpaceTech organizations including TMISAT-Israel, Israel Aerospace Industries, CSPD-Serbia, and UNISEC-Japan, amongst other entities working with the leadership of ITCA’s SpaceTech team to establish and mentor start-ups for the design and development of Small Satellites (SmallSats). ITCA’s incubated organizations, namely TSC Technologies and the Indo-Israeli SpaceTech organization TMISAT-Israel are involved in the design, manufacture, integration and testing of small satellites.</p>
            <p  class="text-justify">On a parallel track to nurture an inclusive environment in India to pursue NewSpace opportunities, ITCA has initiated amongst the educational institutions an ambitious “75 Students’ Satellites Mission” to commemorate the “75 Years of Indian Independence” by launching 75 student-built satellites into orbit in conjunction with national and international tech-space organizations. Its Space team has structured this mission with leading educators and faculty to strengthen India’s focus on science-based approach and experience-based learning and build a culture of innovation in the country.</p>
            <p class="text-justify"> ITCA has worked closely with Department of Space, Government of India organizations to give impetus and provide launch opportunities for THREE of our Students Satellite’s (UNITYSat) designed, fabricated, tested, integrated, and freely launched along with other Student’s Satellites.</p>
            <p class="text-justify">Space technology and small satellites, precision agriculture, and Industry 4.0 are prominent recent areas of ITCA’s activity. It has pioneered the transfer of advanced technologies including Sensors for Societal Applications, Tissue Engineering, and MAVs. ITCA has created teams of professionals from diverse fields to progress Techno-Economic Viability (TEV) analysis for large infrastructure projects conceptualized by State Governments under Public Private Partnership (PPP) mode. The range of activities include:</p>
            <p className="">
              Vision, Mission, Governance, Heritage, Partnerships, Future Directions, Affiliations, Ngo Darpan.
            </p>

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
      className="text-black  self-end" 
      onClick={() => setIsModalOpen(false)}
    >
<IoClose />
    </button>
    <img src={imgabout1} alt="Large Satellite" />
  </div>
</div>

      )}
    
      </>
  )
}

export default Aboutinfo