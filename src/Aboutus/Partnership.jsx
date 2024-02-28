import React from 'react';
import "../Styles/font.css";
import wrcr from "../Images/partnerwrcr.png";
import unisec from "../Images/unisecindia.jpg";
import  engage from "../Images/enage.jpg";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Partnership = () => {
  AOS.init({
    duration: 1200,
  });
  return (
  <>
    <div class='bg-partnership bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-down">
  <div class="text-center">
    <h1 class='text-white py-2 text-6xl'>Partnerships</h1>
    <p class='text-white text-xl'>Home/Partnerships</p>
  </div>
</div>
<div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-9 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark">
  <h1 className='text-xl font-bold'>ITCA has structured active and functional partnerships with global organizations to build synergy with leading institutions abroad to facilitate cross-pollination of ideas and create opportunities for collaboration. ITCA’s partnerships include:</h1>
  <div className='flex flex-wrap justify-center    leading-8'>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full  ">
    <h1 className='text-2xl py-6 font-bold'>World CanSat/Rocketry Championship</h1>
<p  className="text-justify px-4">World CanSat/Rocketry Championship is an international competition open to elite competitors from around the world, representing their nations, as university student teams or as independent student teams.</p>

<p  className="text-justify px-4">Following the successful completion of the International CanSat/Rocketry Competition in Serbia in October 2019, Serbia and India agreed to launch the initiative to establish CanSat/Rocketry Championship at the Global level, so that the CanSat/Rocketry program can be raised to a higher level, involving even more students and countries. Both countries believe that this is very important globally, primarily in terms of education, and in promoting Space engineering in general. The WCRC was formulated and negotiated among the founding organizations from six nations: Serbia, India, Italy, Tunisia, Canada and Peru.</p>
</div>
<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full  ">
  <img src={wrcr} alt="satellite" className="mx-auto" data-aos="fade-left" />
</div>
  </div>
  <div className='flex flex-wrap justify-center    leading-8'>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full lg:pt-24 ">
  <img src={unisec} alt="satellite" className="mx-auto" data-aos="fade-right"/>
</div>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full  ">
    <h1 className='text-2xl font-bold'>University Space Engineering Consortium (UNISEC)</h1>
<p  class="text-justify py-4 px-4">University Space Engineering Consortium (UNISEC)-Global envisions a world where space science and technology are used by individuals and institutions in every country, rich or poor, and offers opportunities across the whole structure of society–whether academic, industrial or educational– for peaceful purposes and for the benefit of humankind.</p>

<p  class="text-justify px-4">UNISEC-Global is an international non-profit body, consisting of local-chapters across the world. Since its establishment in November 2013 in Japan, UNISEC-Global has provided a forum every year to promote practical space development activities, mainly at university level, such as designing, developing, manufacturing, launching and operating micro/nano/pico satellites and rockets, including their payloads.</p>
</div>

  </div>

  <div className='flex flex-wrap justify-center    leading-8'>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full  ">
    <h1 className='text-2xl py-6 font-bold'>ITCA’s Engagement with Israeli Universities</h1>
<p  class="text-justify px-4">ITCA has been at the forefront of building partnerships with Israeli Universities which could be utilized by Indian Institutions and Universities. Leadership of Indian Universities and Institutions expressed to ITCA their keenness and intent to introduce programmes that could bridge the gap between the curriculum and the expectations of industry and were proponents of Practice-based Learning methodology</p>

<p  class="text-justify px-4">Reaching students earlier in their educational development cycle is critical in developing a workforce to remain competitive in the global marketplace. It is essential that teachers in high schools must engage students in Science, Technology, Engineering and Mathematics (STEM) curriculum earlier to generate interest, develop skills and provide the educational foundation for students to build upon.</p>
</div>
<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full  ">
  <img src={engage} alt="satellite" className="mx-auto" data-aos="fade-left"/>
</div>
  </div>
</div>
  </>
  )
}

export default Partnership