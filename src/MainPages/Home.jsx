import React,{useState,useEffect} from "react";
import "../Styles/font.css";

import 'aos/dist/aos.css';
import AOS from 'aos';

import { Link } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";



const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const[isOpen1, setIsopen1]= useState(false);
  const[isOpen2, setIsopen2]= useState(false);
  const[isOpen3, setIsopen3]= useState(false);
  const[isOpen4, setIsopen4]= useState(false);
  const[isOpen5, setIsopen5]= useState(false);
  const[isOpen6, setIsopen6]= useState(false);
  const[isOpen7, setIsopen7]= useState(false);
  const[isOpen8, setIsopen8]= useState(false);
  const[isOpen9, setIsopen9]= useState(false);
  const[isOpen10, setIsopen10]= useState(false);
  const[isOpen11, setIsopen11]= useState(false);
  const[isOpen12, setIsopen12]= useState(false);
  const[isOpen13, setIsopen13]= useState(false);
  const[isOpen14, setIsopen14]= useState(false);
  const[isOpen15, setIsopen15]= useState(false);
  const[isOpen16, setIsopen16]= useState(false);
  const[isOpen17, setIsopen17]= useState(false);
  const[isOpen18, setIsopen18]= useState(false);
  const[isOpen19, setIsopen19]= useState(false);
  const[isOpen20, setIsopen20]= useState(false);
  const[isOpen21, setIsopen21]= useState(false);
  const[isOpen22, setIsopen22]= useState(false);
  const[isOpen23, setIsopen23]= useState(false);
  const[isOpen24, setIsopen24]= useState(false);
  const[isOpen25, setIsopen25]= useState(false);
  const[isOpen26, setIsopen26]= useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
   
  };
  const toggleAccordion1 = () =>{
    setIsopen1 (!isOpen1)
  }
  const toggleAccordion2 = () =>{
    setIsopen2 (!isOpen2)
  }
  const toggleAccordion3 = () =>{
    setIsopen3 (!isOpen3)
  }
  const toggleAccordion4 = () =>{
    setIsopen4 (!isOpen4)
  }
  const toggleAccordion5 = () =>{
    setIsopen5 (!isOpen5)
  }
  const toggleAccordion6 = () =>{
    setIsopen6 (!isOpen6)
  }
  const toggleAccordion7 = () =>{
    setIsopen7 (!isOpen7)
  }
  const toggleAccordion8 = () =>{
    setIsopen8 (!isOpen8)
  }
  const toggleAccordion9 = () =>{
    setIsopen9 (!isOpen9)
  }
  const toggleAccordion10 = () =>{
    setIsopen10 (!isOpen10)
  }
  const toggleAccordion11 = () =>{
    setIsopen11 (!isOpen11)
  }
  const toggleAccordion12 = () =>{
    setIsopen12 (!isOpen12)
  }
  const toggleAccordion13 = () =>{
    setIsopen13 (!isOpen13)
  }
  const toggleAccordion14 = () =>{
    setIsopen14 (!isOpen14)
  }
  const toggleAccordion15 = () =>{
    setIsopen15 (!isOpen15)
  }
  const toggleAccordion16 = () =>{
    setIsopen16 (!isOpen16)
  }
  const toggleAccordion17 = () =>{
    setIsopen17 (!isOpen17)
  }
  const toggleAccordion18 = () =>{
    setIsopen18 (!isOpen18)
  }
  const toggleAccordion19 = () =>{
    setIsopen19 (!isOpen19)
  }
  const toggleAccordion20 = () =>{
    setIsopen20 (!isOpen20)
  }
  const toggleAccordion21 = () =>{
    setIsopen21 (!isOpen21)
  }
  const toggleAccordion22 = () =>{
    setIsopen22 (!isOpen22)
  }
  const toggleAccordion23 = () =>{
    setIsopen23 (!isOpen23)
  }
  const toggleAccordion24 = () =>{
    setIsopen24 (!isOpen24)
  }
  const toggleAccordion25 = () =>{
    setIsopen25 (!isOpen25)
  }
  const toggleAccordion26 = () =>{
    setIsopen26 (!isOpen26)
  }
  AOS.init({
    duration: 1200,
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
  }, []);

  return (
    <>

<div className='bg-homeabout bg-cover bg-center h-72 flex lg:px-28 items-center ' data-aos="fade-down">
        <div className="">
          <h1 className='text-white py-2 text-6xl'>About Us</h1>
          <p className='text-white text-xl'>Welcome to ITCA-we Encourage, Educate, Envision </p>
          <p className='text-white text-xl'>and Empower the engineering and technology fraternity</p>
           <p className='text-white text-xl'> across the globe to conceptualize and realize engineering solutions for societal needs.</p>
           <Link to='/aboutinfo'>
   <button className="bg-skyblue py-2 px-4 rounded-lg text-white mt-4 ">Learn More</button>
   </Link>
        </div>
      </div>
  
      <div className="lg:flex justify-center gap-4 text-white " data-aos="fade-up">
      <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen ? 'h-auto' : 'h-24'}`}>
        <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion}>
          Vision
        </h1>
        {isOpen && (
          <p className="mt-2 " data-aos="fade-down">
            "Empowering citizens with a technology-centric ethos, catalyzing profound societal and national advancement."
          </p>
        )}
      </div>
      <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen1 ? 'h-auto' : 'h-24'}`}>
        <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion1}>
          Mission
        </h1>
        {isOpen1 && (
          <p className="mt-2" data-aos="fade-down">
            "Through collaborative endeavors, we strive to empower the advancement of technology-centric initiatives, creating a dynamic societal landscape where every citizen embraces technology as a catalyst for positive change. In doing so, we aim to foster an ongoing journey of evolution towards collective well-being."
          </p>
        )}
      </div>
      <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen2 ? 'h-auto' : 'h-24'}`}>
        <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion2}>
          Governance
        </h1>
        {isOpen2 && (
          <p className="mt-2" data-aos="fade-down">
            "ITCA has renowned and senior leaders from multiple engineering disciplines with globally recognized contributions to industry, academia, and research organizations."
          </p>
        )}
      </div>
      <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen3 ? 'h-auto' : 'h-24'}`}>
        <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion3}>
        Heritage
        </h1>
        {isOpen3 && (
          <div>
          <p className="mt-2" data-aos="fade-down">
            "ITC over the last 18 years has attained international prominence as a unique platform fostering Industry-Academia-Research Labs-Policy Makers’ collaboration with the objective of capacity-building for global technological progress."
          </p>
            <Link to="/heritage" className="text-center">
            <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white  ">
              <p className="">Read more</p>
              <span className="ml-1"><FaArrowRightLong /></span>
            </div>
          </Link>
          </div>
          
        )}
      </div>
      <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2  ${isOpen4 ? 'h-auto' : 'h-24'}`}>
        <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion4}>
        Partnerships
        </h1>
        {isOpen4 && (
          <div>
          <p className="mt-2" data-aos="fade-down">
            "ITCA has structured active and functional partnerships with global organizations to build synergy with leading institutions abroad to facilitate cross-pollination of ideas and create opportunities for collaboration. ITCA’s partnerships include:"
          </p>
            <Link to="/partnership" className="text-center">
            <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white ">
              <p className="">Read more</p>
              <span className="ml-1"><FaArrowRightLong /></span>
            </div>
          </Link>
          </div>
        )}
       
      </div>
      <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2  ${isOpen5 ? 'h-auto' : 'h-24'}`}>
        <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion5}>
        Future Directions
        </h1>
        {isOpen5 && (
          <p className="mt-2" data-aos="fade-down">
            "Coming Soon"
          </p>
        )}
      </div>
      <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2  ${isOpen6 ? 'h-auto' : 'h-24'}`}>
        <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion6}>
        Affiliations
        </h1>
        {isOpen6 && (
          <p className="mt-2" data-aos="fade-down">
            "Coming Soon"
          </p>
        )}
      </div>
      <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2  ${isOpen7 ? 'h-auto' : 'h-24'}`}>
        <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion7}>
        Ngo Darpan
        </h1>
        {isOpen7 && (
          <div>
          <p className="mt-2" data-aos="fade-down">
            "ITCA has completed the registration on NITI-Aayog maintained platform for voluntary organizations to bring about greater partnership between government & voluntary sector and foster better transparency, efficiency."
          </p>
          <Link to="/ngo" className="text-center">
      <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white ">
        <p className="">Read more</p>
        <span className="ml-1"><FaArrowRightLong /></span>
      </div>
    </Link>
          </div>
        )}
      </div>
    
    </div>
    <div className='bg-aboutus bg-cover bg-center h-72 flex lg:px-28 items-center ' data-aos="fade-down">
      <div className="">
        <h1 className='text-white py-2 text-6xl'>Events</h1>
        <p className='text-white text-xl'>Conferences, seminars, meetings with experts, online courses, hackathons, </p>
        <p className='text-white text-xl'> international student exchange programmes,  summer schools abroad and</p>
         <p className='text-white text-xl'> in India and meetings with ITCA leadership are among myriad events that are offered to members.</p>
         <Link to='/eventinfo'>
 <button className="bg-skyblue py-2 px-4 rounded-lg text-white mt-4 ">Learn More</button>
 </Link>
      </div>
    </div>

    <div className="lg:flex justify-center gap-4 text-white " data-aos="fade-up">
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0   ${isOpen8 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion8}>
      Congress
      </h1>
      {isOpen8 && (
         <div>
         <p className="mt-2" data-aos="fade-down">
           "Indian Technology Congress (ITC) is a flagship event of the Indian Technology Congress Association (ITCA), a dedicated Association for Technologists "
         </p>
           <Link to="/congress" className="text-center">
           <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white  ">
             <p className="">Read more</p>
             <span className="ml-1"><FaArrowRightLong /></span>
           </div>
         </Link>
         </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0  ${isOpen9 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion9}>
      Webinars
      </h1>
      {isOpen9 && (
       <div>
       <p className="mt-2" data-aos="fade-down">
         "ITCA offers webinars and live seminars to apprise students, faculty and technology aficionados on aspects of CubeSat technology to assist students and faculty, "
       </p>
         <Link to="/webinar" className="text-center">
         <div className="flex mb-0 items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white  ">
           <p className="">Read more</p>
           <span className="ml-1"><FaArrowRightLong /></span>
         </div>
       </Link>
       </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center    ${isOpen10 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion10}>
      Masterclass
      </h1>
      {isOpen10 && (
        <p className="mt-2" data-aos="fade-down">
          "Coming Soon"
        </p>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0  ${isOpen11 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion11}>
      Past Events
      </h1>
      {isOpen11 && (
        <div>
        <p className="mt-2" data-aos="fade-down">
          "ITC-2021, the 9th edition of Indian Technology Congress, was unique in that it facilitated exploring space technologies for sustainable development.  "
        </p>
          <Link to="/pastevent" className="text-center">
          <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white  ">
            <p className="">Read more</p>
            <span className="ml-1"><FaArrowRightLong /></span>
          </div>
        </Link>
        </div>
        
      )}
    </div>
  
  
  </div>

  <div class='bg-dev bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-down">
  <div class="text-center">
    <h1 class='text-white py-2 text-6xl'>Professional Development</h1>
  
  </div>
</div>

    <div className="lg:flex justify-center gap-4 text-white " data-aos="fade-up">
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0  ${isOpen12 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion12}>
      Incubation
      </h1>
      {isOpen12 && (
         <div>
         <p className="mt-2" data-aos="fade-down">
           "ITCA has set up an incubation hub and facilitates start-up organizations and entrepreneurs to access financing options based on their requirements. "
         </p>
           <Link to="/incubation" className="text-center">
           <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white  ">
             <p className="">Read more</p>
             <span className="ml-1"><FaArrowRightLong /></span>
           </div>
         </Link>
         </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen13 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion13}>
      Educator
      </h1>
      {isOpen13 && (
       <div>
       <p className="mt-2" data-aos="fade-down">
         "Mentoring Initiative is a member benefit for ITCA members seeking career guidance or advice from experienced professionals with diverse experience. "
       </p>
         <Link to="/educator" className="text-center">
         <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white  ">
           <p className="">Read more</p>
           <span className="ml-1"><FaArrowRightLong /></span>
         </div>
       </Link>
       </div>
      )}
    </div>
   
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen14 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion14}>
      Advisor
      </h1>
      {isOpen14 && (
        <div>
        <p className="mt-2" data-aos="fade-down">
          "ITCA has constituted an Advisory Board of globally renowned space scientists to guide the ambitious 75 Students’ Satellites initiative. This board comprises of:"
        </p>
          <Link to="/advisor" className="text-center">
          <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white  ">
            <p className="">Read more</p>
            <span className="ml-1"><FaArrowRightLong /></span>
          </div>
        </Link>
        </div>
        
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen15 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion15}>
      Thought Leadership
      </h1>
      {isOpen15 && (
        <div>
        <p className="mt-2" data-aos="fade-down">
          "Our members decipher industry trends and integrate the technological breakthroughs to develop mint-fresh innovations that form the basis of solutions. "
        </p>
          <Link to="/leadership" className="text-center">
          <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white  ">
            <p className="">Read more</p>
            <span className="ml-1"><FaArrowRightLong /></span>
          </div>
        </Link>
        </div>
        
      )}
    </div>
  
  
  </div>


  <div class='bg-dev bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-down">
  <div class="text-center">
    <h1 class='text-white py-2 text-6xl'>Membership</h1>

  </div>
</div>

    <div className="lg:flex justify-around gap-4 text-white " data-aos="fade-up">
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0  ${isOpen16 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion16}>
      Individual Membership
      </h1>
      {isOpen16 && (
         <div>
         <p className="mt-2" data-aos="fade-down">
           "Technology's pervasive presence across our globe underscores its vast diversity, embodied by our esteemed Fellows who represent a rich spectrum within science, engineering, and technology. With passion, they tackle the most intricate challenges of every domain through this unique ITCA platform. Founder Fellows, pillars of this endeavor, bring forth a wealth of wisdom."
         </p>
           <Link to="/individual" className="text-center">
           <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white  ">
             <p className="">Read more</p>
             <span className="ml-1"><FaArrowRightLong /></span>
           </div>
         </Link>
         </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen17 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion17}>
      Institutional Memberships
      </h1>
      {isOpen17 && (
       <div>
       <p className="mt-2" data-aos="fade-down">
         "The Institutional Members category welcomes associations, public, and private institutions engaged in fields aligned with the objectives of the ITCA. This includes academia, universities, research institutes, industrial entities, and professional organizations, both domestically and internationally, with a focused interest in technological advancements."
       </p>
         <Link to="/institutional" className="text-center">
         <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white  ">
           <p className="">Read more</p>
           <span className="ml-1"><FaArrowRightLong /></span>
         </div>
       </Link>
       </div>
      )}
    </div>
   
    
  
  
  </div>

  <div class='bg-dev bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-down">
  <div class="text-center">
    <h1 class='text-white py-2 text-6xl'>Forums</h1>

  </div>
</div>

    <div className="lg:flex justify-center gap-4 text-white " data-aos="fade-up">
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0  ${isOpen18 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion18}>
    Space
      </h1>
      {isOpen18 && (
         <div>
         <p className="mt-2" data-aos="fade-down">
           "Coming Soon "
         </p>
         
         </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen19 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion19}>
      Agri Tech
      </h1>
      {isOpen19 && (
       <div>
       <p className="mt-2" data-aos="fade-down">
         "AgriTech refers to the emerging opportunities for the Technology, products& services that supports Agricultural Domain to meet the needs of a projected 10 Billion global inhabitants by 2050. AgriTech Advisory Board brings together the distinguished expertise equally from the 'agricultural' domain as well as the 'technology' in all its dimensions."
       </p>
         <Link to="/educator" className="text-center">
         <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white  ">
           <p className="">Read more</p>
           <span className="ml-1"><FaArrowRightLong /></span>
         </div>
       </Link>
       </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0  ${isOpen20 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion20}>
      Industry 4.0
      </h1>
      {isOpen20 && (
         <div>
         <p className="mt-2" data-aos="fade-down">
           "Coming Soon "
         </p>
         
         </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0  ${isOpen21 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion21}>
      System
      </h1>
      {isOpen21 && (
         <div>
         <p className="mt-2" data-aos="fade-down">
           "Coming Soon "
         </p>
         
         </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 ${isOpen22 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion22}>
      Temple Engineering
      </h1>
      {isOpen22 && (
        <div>
        <p className="mt-2" data-aos="fade-down">
          "Whispers in Heritage Decoding the Symbolic Temple Engineering Ancient innovators defied gravity and time, crafting structures of beauty and engineering prowess. Temple engineering, a blend of art and science, holds forgotten knowledge within the sands of time. Modern technology now seeks to unlock these secrets, using algorithms to reveal ."
        </p>
          <Link to="/advisor" className="text-center">
          <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-4 rounded-lg text-white  ">
            <p className="">Read more</p>
            <span className="ml-1"><FaArrowRightLong /></span>
          </div>
        </Link>
        </div>
        
      )}
    </div>
  
  
  
  </div>



  <div class='bg-dev bg-cover bg-center h-72 flex justify-center items-center' data-aos="fade-down">
  <div class="text-center">
    <h1 class='text-white py-2 text-6xl'>Publication</h1>

  </div>
</div>

    <div className="lg:flex justify-center gap-4 text-white " data-aos="fade-up">
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0  ${isOpen23 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion23}>
      Tips
      </h1>
      {isOpen23 && (
         <div>
         <p className="mt-2" data-aos="fade-down">
           "Coming Soon "
         </p>
         
         </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0  ${isOpen24 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion24}>
      Update
      </h1>
      {isOpen24 && (
         <div>
         <p className="mt-2" data-aos="fade-down">
           "Coming Soon "
         </p>
         
         </div>
      )}
    </div>
    
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0  ${isOpen25 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion25}>
      Report
      </h1>
      {isOpen25 && (
         <div>
         <p className="mt-2" data-aos="fade-down">
           "Coming Soon "
         </p>
         
         </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0  ${isOpen26 ? 'h-auto' : 'h-24'}`}>
      <h1 className="text-xl cursor-pointer mt-2" onClick={toggleAccordion26}>
      News
      </h1>
      {isOpen26 && (
         <div>
         <p className="mt-2" data-aos="fade-down">
           "Coming Soon "
         </p>
         
         </div>
      )}
    </div>
    
  
  
  
  </div>





  
    </>
  );
};

export default Home;
