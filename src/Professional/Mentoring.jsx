import React from 'react';
import imgment from "../Images/ment2.jpg";
import "../Styles/font.css";
import 'aos/dist/aos.css';
import AOS from 'aos';



const Mentoring = () => {
  AOS.init({
    duration: 1200,
  });
  return (
<>
<div class='bg-aboutus bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-down">
   <div class="text-center">
     <h1 class='text-white py-2 text-6xl'>Mentoring</h1>
    
     <p class='text-white text-xl'>Home/Mentoring</p>
   </div>
 </div>
 <div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-5 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark sm:px-7.5">
  <div className='p-10'>
 <div className="flex flex-wrap justify-center   leading-8">

<div className="w-full lg:w-1/3 md:w-1/2 sm:w-full px-4 ">

    <p  class="text-justify">Mentoring Initiative is a member benefit for ITCA members seeking career guidance or advice from experienced professionals with diverse experience to become contributing engineers. ITCA retains its core focus on mentoring with the objective of creating win-win benefits for both the mentor and mentee.</p>
    <p  class="text-justify">Mentees engaging with experienced professionals would benefit through career guidance and networking opportunities to secure the job of their choice. Mentors would have opportunities to share their expertise and knowledge and help the younger generation engineers to scale and deliver to their potential.</p>
   
   
    
  </div>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full  ">
  
  <img src={imgment} alt="satellite" className="mx-auto flex justify-center"   data-aos="fade-left"/>

  </div>
  </div>
  </div>
  </div>
</>
  )
}

export default Mentoring