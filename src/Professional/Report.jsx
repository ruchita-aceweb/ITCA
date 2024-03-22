import React,{useEffect} from 'react';
import "../Styles/font.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Report = () => {
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
     <h1 class='text-white py-2 text-6xl'>Reports</h1>
    

   </div>
 </div>
 <div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-5 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark sm:px-7.5">
  <div className='p-10'>
 <div className="flex flex-wrap justify-center   leading-8">

<div className="w-full lg:w-1/3 md:w-1/2 sm:w-full ">

    <p  class="text-justify">ITCA constitutes teams of its adherents to prepare roadmaps and execution strategies to address contemporary societal challenges. These reports would be of immense value to all policymakers, administrators, technocrats, and engineers involved in conceptualizing and executing technological solutions for various challenges.</p>
    <p  class="text-justify">ITCA since its inception has been involved in the development of reports pertaining to the deployment of Industry 4.0 solutions for the agriculture sector.</p>
    <p  class="text-justify">Interested members are invited to write to the secretariat to request a copy of the report.</p>
   
    
  </div>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full  "  data-aos="fade-left">
  
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
  </div>
   </>
  )
}

export default Report