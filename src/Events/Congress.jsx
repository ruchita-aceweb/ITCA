import React from 'react';
import "../Styles/font.css";
import imgcongress from "../Images/Associate1.jpg"

const Congress = () => {
  return (
    <>
    <div class='bg-aboutus bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-down">
    <div class="text-center">
      <h1 class='text-white py-2 text-6xl'>Congress</h1>
      <p class='text-white text-xl'>Home/Congress</p>
    </div>
  </div>
  <div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-5 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark sm:px-7.5">
  <div className="flex flex-wrap justify-center px-10  leading-8">

<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full p-4 ">
<p class="text-justify">Indian Technology Congress (ITC) is a flagship event of the Indian Technology Congress Association (ITCA), a dedicated Association for Technologists focused on facilitating collaboration between Professionals from the industry, R&D Laboratories, Government, Academic Institutions and professional bodies. Over the years, ITC has emerged as a leading forum for the confluence of thought leaders in technology, sciences and businesses working on deploying technology-intensive solutions for contemporary challenges. </p>
<p class="text-justify">The previous editions of ITC and Team Tech (the earlier version of ITC) since 2004 have attracted over 11716 delegates, 1328 research paper presentations, 57 parallel sessions / workshops,
480+ Exhibitors showcasing their products, 1821 Speakers, 108 Best Paper Awards and 50 Technology Awards being presented to renowned technical experts from engineering and technology.
</p>

    
    
  </div>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full lg:pt-6 ">
    <img src={imgcongress} alt="satellite" className="mx-auto" data-aos="fade-left"/>
  </div>
  </div>
  </div>
   </>
  )
}

export default Congress