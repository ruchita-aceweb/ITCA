import React,{useEffect} from 'react';
import "../Styles/font.css";
import imgprofession from "../Images/profeesionaldev.jpg";
import 'aos/dist/aos.css';
import AOS from 'aos';
const Professionaldev = () => {
  AOS.init({
    duration: 1200,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
 <>
   <div class='bg-dev bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-down">
  <div class="text-center">
    <h1 class='text-white py-2 text-6xl'>Professional Development</h1>
    <p class='text-white text-xl'>Home/Professional Development</p>
  </div>
</div>

<div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-9 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark">
  <div className=''>
  <p className='text-justify'>Our focus is on continued education and fostering the culture of lifelong learning. ITCA's teams are continuously endeavouring to curate content relevant to the industry needs and structure summer schools both in India and abroad.</p>
  <div className="flex flex-wrap justify-center   leading-8">

<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full ">
<h1 className='text-3xl py-4 font-bold'>International Space School</h1>
    <p  class="text-justify">International Space School has been organized by Samara University in collaboration with the United Nations Office for Outer Space Affairs, International Astronautical Federation, Paris, and UNISEC-Samara Chapter. ITCA has sponsored Student’s Team to Samara Summer School, Russia every year, since 2019.</p>
   
    
  </div>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full p-2  ">
    <img src={imgprofession} alt="satellite" className="mx-auto"  data-aos="fade-left" />
  </div>
  </div>
  </div>
</div>
 </>
  )
}

export default Professionaldev