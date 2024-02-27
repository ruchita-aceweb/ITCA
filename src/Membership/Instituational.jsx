import React from 'react';
import "../Styles/font.css";
import imginstitute from "../Images/Logos-04.png";
import imginstitute1 from "../Images/Logos-03.png";
import imginstitute2 from "../Images/Logos-06.png";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Instituational = () => {
  AOS.init({
    duration: 1200,
  });
  return (
    <>
    <div class='bg-aboutus bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-down">
  <div class="text-center">
    <h1 class='text-white py-2 text-6xl'>Institutional Memberships</h1>
    <p class='text-white text-xl'>Home/Institutional Memberships</p>
  </div>
</div>
<div className="container m-auto leading-8 mb-4 rounded-sm border mt-14 border-stroke bg-white px-5 py-3 shadow-2xl dark:border-strokedark dark:bg-boxdark sm:px-7.5">
<h1 className='text-3xl py-4 font-bold'>Institutional</h1>
<p class="text-justify">The categories of Institutional memberships are:-</p>
<div className="flex flex-wrap justify-center px-10  leading-8">

<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full p-4 ">
<h1 className='text-lg font-bold py-2'>DONORS</h1>
    <p class="text-justify">There shall be a category of Donor Members.</p>
    <h1 className='text-lg font-bold py-2'>PATRON ORGANIZATIONS</h1>
    <p class="text-justify">Government, Universities, Corporates, Industries, Research Labs and similar Institutions providing or granting funds for the cause of achievements of the aims and objectives of ITCA to be identified as Patron Organizations. Top level executives or their nominees will be recognized as patrons of ITCA.</p>
  
    <h1 className='text-lg font-bold py-2'>FOUNDING INSTITUTIONS</h1>
    <p class="text-justify">Institutions, Industries, Research Labs, Professional Bodies and Societies willing to promote, co-operate, contribute and accept the aims and objectives of ITCA will be Founding Organizations to be limited to 30 numbers.These institutions may nominate one member in the category of Founder Fellow or any other category to be approved by the council and will enjoy the privileges of Institutional Member.</p>
    
    
  </div>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full lg:pt-6 ">
    <img src={imginstitute} alt="satellite" className="mx-auto"  data-aos="fade-left" />
  </div>
  </div>
  <div className="flex flex-wrap justify-center px-10  leading-8">
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full lg:pt-6 ">
    <img src={imginstitute1} alt="satellite" className="mx-auto"  data-aos="fade-right" />
  </div>

<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full p-4 ">

    <h1 className='text-lg font-bold'>INSTITUTIONAL MEMBERS</h1>
    <p class="text-justify">Institutional Membership is open to all industries, Corporate, Universities, Colleges, Government departments and R&D Organizations interested in promoting the Aims and Objectives of the Association. Each Academic Institutional Member may nominate two persons who can enjoy all the privileges of Members of the Association. Membership for others not falling under the above-mentioned categories may be considered subject to the approval of the Council on a case-to-case basis.</p>
    <p class="text-justify">An Institution paying a subscription as stipulated by the Association from time to time shall be eligible to nominate two persons as its representative to attend the Annual Session of the Technology Congress. Donors and Institutional Member shall be eligible to receive, free of cost, a copy of the complete set of Proceedings of the Annual Congress and also a copy each of the Association’s publications.</p>
   
  </div>
  
  </div>


  <div className="flex flex-wrap justify-center px-10  leading-8">

<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full p-4 ">
<h1 className='text-lg font-bold py-2'>RIGHTS, OBLIGATION AND PRIVILEGES OF MEMBERS:</h1>
<p class="text-justify">Subject to the Provisions and Restrictions contained in the Rules and Regulations:</p>
<ul className='list-disc p-4'>
  <li>All Members shall enjoy the rights and privileges of the Association.</li>
  <li>Nominees of Institutional Members, shall also enjoy the rights and privileges of the Association.</li>
  <li>All the Members are entitled to use the facilities of Association as and when created, subject to the provisions of the Rules and Regulations.</li>
  <li>To Contribute papers to all association events and receive usual priced publications of ITCA on connectional rates.</li>
  <li>Honorary Fellows shall have the rights and privileges of members but shall not be eligible to hold any office.</li>
  <li>All the life members are entitled to hold the office of the Association as per the rules and regulations.</li>
</ul>
   
    
    
  </div>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full lg:pt-6 ">
    <img src={imginstitute} alt="satellite" className="mx-auto"  data-aos="fade-left"/>
  </div>
  </div>

  <div className="flex flex-wrap justify-center px-10  leading-8">
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full lg:pt-6 ">
    <img src={imginstitute2} alt="satellite" className="mx-auto"  data-aos="fade-right"/>
  </div>
<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full p-4 ">
<h1 className='text-lg font-bold py-2'>Voting Rights:</h1>

<ul className='list-disc p-4'>
  <li>All the Members and Nominees of the Institutional Members shall have the right to exercise one vote per member.</li>
  <li>Proxy voting is permitted at the Annual General Meeting and special general meetings only.</li>
  
</ul>
   
    
    
  </div>
 
  </div>


</div>
  </>
  )
}

export default Instituational