import React,{useEffect} from 'react';
import "../Styles/font.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Governance = () => {
  AOS.init({
    duration: 1200,
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
   <>
     <div class='bg-dev bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-up" >
  <div class="text-center">
    <h1 class='text-white py-2 text-6xl'>Governance</h1>
    <p class='text-white text-xl'>Home/Governance</p>
  </div>
</div>
<div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-5 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark sm:px-7.5">
<div className="flex flex-wrap justify-center    leading-8">
<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full  ">
<p  class="text-justify px-4">ITCA has renowned and senior leaders from multiple engineering disciplines with globally recognized contributions to industry, academia, and research organizations.</p>
<p  class="text-justify px-4">Like to know more? <a className='font-bold' href="mailto:president@itca.org.in">president@itca.org.in</a></p>
  </div>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full" data-aos="fade-left">
  <div class="max-w-md mx-auto bg-back text-black rounded-lg overflow-hidden md:max-w-lg">
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

export default Governance