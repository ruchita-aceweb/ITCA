import React from 'react';
import "../Styles/font.css";
import experits from "../Images/ment2.jpg";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Expertise = () => {
  AOS.init({
    duration: 1200,
  });
  return (
 <>
   <div class='bg-aboutus bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-down">
  <div class="text-center">
    <h1 class='text-white py-2 text-6xl'>Expertise</h1>
    <p class='text-white text-xl'>Home/Expertise</p>
  </div>
</div>
<div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-9 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark">
<h1 className='text-3xl py-4 font-bold'>Building the World of Tomorrow with Today's Engineering </h1>
<p class="text-justify">We are pushing the boundaries of engineering and technology, not just for today, but for the future, in collaboration with our Fellows, Members, and Partners. To contribute to societal growth, we are building skills and competencies and reforming the workforce. Our members influence public policy and drive innovation. By doing all these, ITCA drives engineering to shape the world of tomorrow.</p>
<div className='flex flex-wrap justify-center p-4'>
  <div className=' w-full lg:w-1/3 md:w-1/2 sm:w-full p-4 '>
    <h1 className='text-2xl'>Insights</h1>
    <p className='text-justify'>We help organizations identify technology advances, contextualize these in relation to their businesses and structure technology-driven actions to build business advantage.</p>
  </div>
  <div className='w-full lg:w-1/3 md:w-1/2 sm:w-full '>
    <img src={experits} alt='satelliate'/>
  </div>
  <div className=' w-full lg:w-1/3 md:w-1/2 sm:w-full p-4'>
    <h1 className='text-2xl'>Thought Leadership</h1>
    <p className='text-justify'>Our members decipher industry trends and integrate the technological breakthroughs to develop mint-fresh innovations that form the basis of solutions for contemporary society and business needs. We focus on leveraging inspiring ideas and building resilient future-proof solutions through multidisciplinary collaboration.</p>
  </div>
</div>
</div>
 </>
  )
}

export default Expertise