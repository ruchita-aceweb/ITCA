import React,{useEffect} from 'react';
import "../Styles/font.css";
import imgspecialist from "../Images/specialteam.png";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Specialist = () => {
  AOS.init({
    duration: 1200,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
  <>
  <div class='bg-history bg-cover bg-center h-72 flex justify-center items-center'  data-aos="fade-down">
  <div class="text-center">
    <h1 class='text-white py-2 text-6xl'>Specialist Groups</h1>
    <p class='text-white text-xl'>Home/Specialist Groups</p>
  </div>
</div>
<div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-9 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark">
<div className="flex flex-wrap justify-center   leading-8">

<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full  ">
  
    <p  class="text-justify">Specialist groups are a collaborative community of professionals working in one area. Participation in a specialist group helps deepen one's involvement and showcases skills and expertise level. Currenly, ITCA has an active specialist group focued on SpaceTech.</p>
    <p class="text-justify"> We are in the process of adding multiple specialist groups.</p>
    
    
  </div>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full px-4">
    <img src={imgspecialist} alt="satellite" className="mx-auto"  data-aos="fade-left" />
  </div>
  </div>
  </div>
  </>
  )
}

export default Specialist