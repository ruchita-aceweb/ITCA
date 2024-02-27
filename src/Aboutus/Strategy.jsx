import React from 'react';
import "../Styles/font.css";
import strategy from "../Images/Strategy.jpg";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Strategy = () => {
  AOS.init({
    duration: 1200,
  });
  return (
 <>
  <div class='bg-partnership bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-down">
  <div class="text-center">
    <h1 class='text-white py-2 text-6xl'>Strategy</h1>
    <p class='text-white text-xl'>Home/Strategy</p>
  </div>
</div>
<div className='container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-5 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark sm:px-7.5 '>
  <div className='p-9'>
  <p className="text-justify ">ITCA's Leadership has worked on developing a strategic plan to leverage contemporary advancements in engineering and technology to drive change in the academia, society, and the industry. These transformational initiatives are outlined and articulated through its thematic Missions. ITCA is currently progressing the 75 Students' Satellites Mission.</p>
  <img src={strategy} alt="satellite" className="mx-auto lg:mt-9" />
  <p className="text-justify ">Its earlier missions included piped irrigation networks and water technologies, biomedical devices, and drones for societal applications.</p>
  </div>
</div>
 </>
  )
}

export default Strategy