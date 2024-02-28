import React from 'react';
import "../Styles/font.css";
import history from "../Images/History1.jpg";
import history1 from "../Images/History2.jpg";
import 'aos/dist/aos.css';
import AOS from 'aos';

const History = () => {
  AOS.init({
    duration: 1200,
  });
  return (
    <>
   <div class='bg-history bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-down">
  <div class="text-center">
    <h1 class='text-white py-2 text-6xl'>History</h1>
    <p class='text-white text-xl'>Home/History</p>
  </div>
</div>
<div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-9 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark">

<div className="flex flex-wrap justify-center    leading-8">


  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full  ">
    <img src={history} alt="satellite" className="mx-auto"  data-aos="fade-right" />
  </div>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full lg:pt-4 ">
  <h1 class="text-justify text-xl p-4 font-bold">ITC over the last 18 years has attained international prominence as a unique platform fostering Industry-Academia-Research Labs-Policy Makers’ collaboration with the objective of capacity-building for global technological progress.</h1>
  <p  class="text-justify px-4">On a parallel track to nurture an inclusive environment in India to pursue NewSpace opportunities, ITCA has initiated amongst the educational institutions an ambitious “75 Students’ Satellites Mission 2022” to commemorate the “75 Years of Indian Independence” (1947-2022) by launching 75 student-built satellites into orbit in conjunction with national and international tech-space organizations. Its Space team has structured this mission with leading educators and faculty to strengthen India’s focus on science-based approach and experience-based learning and build a culture of innovation in the country.</p>

 
  </div>
  </div>


  <div className="flex flex-wrap justify-center    leading-8">



<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full lg:pt-16 ">
<p  class="text-justify px-4">The envisioned objectives of ITCA would include advancing and promoting the cause of technology in India and abroad; organizing annual meets / thematic expositions to promote R&D and collaboration leading to the advancement of technology; publishing country reports, journals and transactions as may be contextually relevant; taking up the consultancy and studies; and instituting and presenting Awards to recognize and honour significant contributions by individuals and organizations.</p>

<p  class="text-justify px-4">ITCA enshrining these objectives and ideas was formally registered at Bangalore on 03 January 2018. While these were the initial thoughts, we anticipate that refinements would happen as members collaborate and ITCA evolves over the coming months. The initial Memorandum / Articles of Association, and the associated set of byelaws was developed with the intent to set the context for growth of ITCA.</p>
</div>
<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full  ">
  <img src={history1} alt="satellite" className="mx-auto"  data-aos="fade-left" />
</div>
</div>





</div>
    
    </>
  )
}

export default History