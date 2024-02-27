import React from 'react';
import "../Styles/font.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Contact = () => {
  AOS.init({
    duration: 1200,
  });
  return (
   <>
     <div class='bg-aboutus bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-up">
  <div class="text-center">
    <h1 class='text-white py-2 text-6xl'>Contact Us</h1>
    <p class='text-white text-xl'>Home/Contact Us</p>
  </div>
</div>

<div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-5 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark sm:px-7.5">
<div className="flex flex-wrap justify-center    leading-8 lg:p-16">
<div className="w-full lg:w-1/3 md:w-1/2 sm:w-full  ">
  <div className='mb-4'>
  <h1 className='text-xl font-bold'>Dr. K. Gopalakrishnan</h1>
  <h1 className='text-xl font-bold'>Project Director</h1>
<p  class="text-justify ">75 Students' Satellites Mission 2022 and Member Secretary, 75 Satellites Project Monitoring Committee (PMC), ISRO-HQ</p>
<p class="text-justify"><a href="tel:+91 99860 77247">+91 98451 73730</a></p>
<p  class="text-justify "> <a  href="mailto:srinivas.durvasula@itca.org.in">secretarygeneral@itca.org.in</a></p>
</div>

<div className='mb-4'>
  <h1 className='text-xl font-bold'>Er. Srinivas Durvasula</h1>
  <h1 className='text-xl font-bold'>Program Manager, ITCA</h1>

<p class="text-justify"><a href="tel:+91 98451 73730">+91 99860 77247</a></p>
<p  class="text-justify "> <a  href="mailto:president@itca.org.in">srinivas.durvasula@itca.org.in</a></p>
</div>

<div className='mb-4'>
  <h1 className='text-xl font-bold'>Er. S. Shanmugam</h1>
  <h1 className='text-xl font-bold'>Manager, ITCA</h1>

<p class="text-justify"><a href="tel:+91 99806 10017">+91 99806 10017</a></p>
<p  class="text-justify "> <a  href="mailto:shanmugam@itca.org.in">shanmugam@itca.org.in</a></p>
</div>

<div className='mb-4'>
  <h1 className='text-xl font-bold'>Secretariat</h1>
  <p  class="text-justify ">#3, First Main, BDA Layout, Kodihalli, HAL 2nd Stage, Bengaluru – 560 008. Tele-Fax: +91 80 4850 8380</p>
<p  class="text-justify "> <a  href="mailto:president@itca.org.in www.itca.org.in;">president@itca.org.in www.itca.org.in;</a></p>
</div>
  </div>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full  " data-aos="fade-left">
  <h1 className='text-3xl font-bold text-center mb-4 '>Get Support from our Team</h1>
  <div class="max-w-md mx-auto bg-back text-black rounded-lg overflow-hidden md:max-w-lg ">
  <div class="md:flex">
    <div class="w-full px-4 py-6">
      <div class="mb-6">
        
        <input type="text" id="name" name="name" placeholder=" your Name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
      </div>
      <div class="mb-6">
     
        <input type="email" id="email" name="email" placeholder=" your Email" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
      </div>
      <div class="mb-6">
     
        <input type="number" id="number" name="number" placeholder=" your Number" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
      </div>
      <div class="mb-6">
     
        <input type="subject" id="subject" name="subject" placeholder="Subject" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
      </div>
      <div class="mb-6">
        
        <textarea id="message" name="message" rows="4" placeholder="Enter your message" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"></textarea>
      </div>
      <div class="text-center">
        <button type="submit" class="py-2 px-4 bg-back1 text-white font-semibold rounded-md hover:bg-white hover:text-black focus:outline-none focus:bg-indigo-600">Send Message</button>
      </div>
    </div>
  </div>
</div>

  </div>
</div>
</div>
   </>
  )
}

export default Contact