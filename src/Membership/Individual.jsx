import React from 'react';
import "../Styles/font.css";
import imgindividual from "../Images/Logos-04.png";
import imgindividual1 from "../Images/Logos-01.png";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Individual = () => {
  AOS.init({
    duration: 1200,
  });
  return (
  <>
    <div class='bg-aboutus bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-down">
  <div class="text-center">
    <h1 class='text-white py-2 text-6xl'>Individual Membership</h1>
    <p class='text-white text-xl'>Home/Individual Membership</p>
  </div>
</div>
<div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-5 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark sm:px-7.5">
<h1 className='text-3xl py-4 font-bold'>Individual</h1>
<p class="text-justify">The Association shall consist of individual members who are qualified as Graduate or Equivalent in the disciplines and pursuing with Technology domains in India along with membership of any recognized professional body of any specialized field. The member categories are:</p>
<div className="flex flex-wrap justify-center px-10  leading-8">

<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full p-4 ">
  
    <h1 className='text-lg font-bold py-2'>Founder Fellows:</h1>
    <p class="text-justify">All signatories to the Memorandum of Association and the Rules and Regulations will be admitted to the category ‘Founder Fellows’. In addition to that extraordinary personalities who, in the opinion of the signatories to this Memorandum of Association have significantly contributed to the growth of technology will also be Founder Fellows. The maximum number of founder Fellows is limited to Hundred.</p>
    
    <h1 className='text-lg font-bold py-2'>Honorary Fellows:</h1>
    <p class="text-justify">An Honorary Fellow shall be a person who has made “distinctive contributions” to engineering, science, industry, research, public service, or other pursuits allied with and beneficial to the technology profession. This class of Membership will be bestowed on outstanding persons in respective professions and will be limited to 50 numbers.</p>
    
    <h1 className='text-lg font-bold py-2'>Fellow:</h1>
    <p class="text-justify">‘Fellow’ is a membership grade of distinction and is conferred on worthy candidates to recognize their outstanding technology achievements. Fellows shall have experience in their field of activity for a period of at least 15 years after graduation. However, candidates having post-graduate / doctorates having 10 years experience will be eligible to become Fellows. The number of fellow will not be more than 25% of the total membership at any given point of time excluding Founder Fellows.</p>
  </div>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full lg:pt-6 ">
    <img src={imgindividual} alt="satellite" className="mx-auto"  data-aos="fade-left" />
  </div>
  </div>
  <div className="flex flex-wrap justify-center px-10  leading-8">
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full lg:pt-6 ">
    <img src={imgindividual1} alt="satellite" className="mx-auto"   data-aos="fade-right"/>
  </div>

<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full p-4 ">
  
    <h1 className='text-lg font-bold py-2'>Member:</h1>
    <p class="text-justify">‘Member’ is the grade conferred on working professionals having more than 5 years’ experience in the chosen field of Technology after their graduation.</p>
    
    <h1 className='text-lg font-bold py-2'>Associate Member:</h1>
    <p class="text-justify">‘Associate’ is conferred on those professionals having a University Degree.</p>
    
    <h1 className='text-lg font-bold py-2'>Student Member:</h1>
    <p class="text-justify">‘Student’ grade applies to those who are regularly enrolled in approved institutions or university at undergraduate level. A person studying at the undergraduate level may be enrolled as a Student Member provided his application is duly attested by the Principal/Head of the Department / Institution.</p>
    <p class="text-justify">Diploma or equivalent qualified candidates are also eligible for appropriate category membership, the regulations will separately developed and adopted by the council.</p>
    <p class="text-justify">No subscription and registration fees will be collected for the first 1000 members of the Association. Following this membership drive, membership subscription as prescribed in regulation will be levied. Membership subscription would be for life. For student members the subscription would be at subsidized rates, for the duration of the education programme on an annual basis.</p>
    <p class="text-justify">Membership shall be based on an appropriate prescribed membership form duly filled-in along with a valid reference of an existing member, individual or institutional as the case may be, and one-time membership fee paid in full and shall be subject to the approval of the Council.</p>
    <p class="text-justify">Student Members, Associate Members, Members and Fellows shall be entitled to the use of post-nominals SITCA, AMITCA, MITCA and FITCA respectively.</p>
    <p class="text-justify">These nominations will be scrutinized and recommended to Council for approval by a Committee of Membership constituted by the Council from time to time.</p>
  </div>
  
  </div>
  
  
</div>
  </>
  )
}

export default Individual