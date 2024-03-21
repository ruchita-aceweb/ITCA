import React,{useState,useEffect} from "react";
import "../Styles/font.css";

import 'aos/dist/aos.css';
import AOS from 'aos';

import { Link } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";
import Footer from "../SharedComponents/Footer";



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

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
  }, []);

  return (
    <>

<div className='bg-homeabout bg-cover bg-center homebanners  flex lg:px-28 items-center ' data-aos="fade-down" >
        <div className="p-4">
          <h1 className='text-white py-2 text-6xl'>About Us</h1>
          <p className='text-white text-xl'>Welcome to ITCA-we Encourage, Educate, Envision </p>
          <p className='text-white text-xl'>and Empower the engineering and technology fraternity</p>
           <p className='text-white text-xl'> across the globe to conceptualize and realize engineering solutions for societal needs.</p>
           <Link to='/aboutinfo'>
   <button className="bg-skyblue py-2 px-4 rounded-lg text-white mt-4 ">Learn More</button>
   </Link>
        </div>
      </div>
  
      <div className="lg:flex justify-center  text-white gap-2 bg-skyblue">
      <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen ? 'h-auto' : 'h-24' }` } onClick={toggleAccordion}>
        <h1 className="text-xl cursor-pointer mt-2"  >
          Vision
        </h1>
        {isOpen && (
          <p className="mt-2 " >
            "Empowering citizens with a technology-centric ethos, catalyzing profound societal and national advancement."
          </p>
        )}
      </div>
      <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen1 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion1}>
        <h1 className="text-xl cursor-pointer mt-2" >
          Mission
        </h1>
        {isOpen1 && (
          <p className="mt-2" >
            "Through collaborative endeavors, we strive to empower the advancement of technology-centric initiatives, creating a dynamic societal landscape where every citizen embraces technology as a catalyst for positive change. In doing so, we aim to foster an ongoing journey of evolution towards collective well-being."
          </p>
        )}
      </div>
      <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen2 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion2}>
        <h1 className="text-xl cursor-pointer mt-2" >
          Governance
        </h1>
        {isOpen2 && (
          <p className="mt-2" >
            "ITCA has renowned and senior leaders from multiple engineering disciplines with globally recognized contributions to industry, academia, and research organizations."
          </p>
        )}
      </div>
      <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2  ${isOpen3 ? 'h-auto' : 'h-24'}`}  onClick={toggleAccordion3}>
        <h1 className="text-xl cursor-pointer mt-2">
      Heritage
        </h1>
        {isOpen3 && (
          <div>
          <p className="mt-2" >
          "ITC over the last 18 years has attained international prominence."
          </p>
            <Link to="/partnership" className="text-center">
            <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-2 rounded-lg text-white ">
              <p className="">Read more</p>
              <span className="ml-1"><FaArrowRightLong /></span>
            </div>
          </Link>
          </div>
        )}
       
      </div>
      <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2  ${isOpen4 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion4}>
        <h1 className="text-xl cursor-pointer mt-2" >
        Partnerships
        </h1>
        {isOpen4 && (
          <div>
          <p className="mt-2" >
            "ITCA has structured active and functional partnerships with global . "
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
      <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2  ${isOpen5 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion5}>
        <h1 className="text-xl cursor-pointer mt-2" >
        Future Directions
        </h1>
        {isOpen5 && (
          <p className="mt-2" >
            "Coming Soon"
          </p>
        )}
      </div>
      <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2  ${isOpen6 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion6}>
        <h1 className="text-xl cursor-pointer mt-2" >
        Affiliations
        </h1>
        {isOpen6 && (
          <p className="mt-2" >
            "Coming Soon"
          </p>
        )}
      </div>
      <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2  ${isOpen7 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion7}>
        <h1 className="text-xl cursor-pointer mt-2" >
        Ngo Darpan
        </h1>
        {isOpen7 && (
          <div>
          <p className="mt-2" >
            "ITCA has completed the registration on NITI-Aayog."
          </p>
          <Link to="/ngo" className="text-center">
      <div className="flex items-center justify-between mt-4 bg-skyblue py-2 px-2 rounded-lg text-white ">
        <p className="">Read more</p>
        <span className="ml-1"><FaArrowRightLong /></span>
      </div>
    </Link>
          </div>
        )}
      </div>
    
    </div>
    <div className='bg-homeevent bg-cover bg-center homebanners  flex lg:px-28 items-center '  >
      <div className="p-4">
        <h1 className='text-white py-2 text-6xl'>Events</h1>
        <p className='text-white text-xl'>Conferences, seminars, meetings with experts, online courses, hackathons, </p>
        <p className='text-white text-xl'> international student exchange programmes,  summer schools abroad and</p>
         <p className='text-white text-xl'> in India and meetings with ITCA leadership are among myriad events that are offered to members.</p>
         <Link to='/eventinfo'>
 <button className="bg-skyblue py-2 px-4 rounded-lg text-white mt-4 ">Learn More</button>
 </Link>
      </div>
    </div>

    <div className="lg:flex justify-center gap-2 bg-skyblue text-white ">
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen8 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion8}>
      <h1 className="text-xl cursor-pointer mt-2" >
      Congress
      </h1>
      {isOpen8 && (
         <div>
         <p className="mt-2">
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
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2  ${isOpen9 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion9}>
      <h1 className="text-xl cursor-pointer mt-2" >
      Webinars
      </h1>
      {isOpen9 && (
       <div>
       <p className="mt-2">
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
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2   ${isOpen10 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion10}>
      <h1 className="text-xl cursor-pointer mt-2" >
      Masterclass
      </h1>
      {isOpen10 && (
        <p className="mt-2">
          "Coming Soon"
        </p>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen11 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion11}>
      <h1 className="text-xl cursor-pointer mt-2" >
      Past Events
      </h1>
      {isOpen11 && (
        <div>
        <p className="mt-2">
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

  <div class='bg-homeprofession bg-cover bg-center homebanners  flex justify-center items-center'  >
  <div class="text-center">
    <h1 class='text-white py-2 text-6xl'>Professional Development</h1>
  
  </div>
</div>

    <div className="lg:flex justify-center gap-2 bg-skyblue text-white " >
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen12 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion12}>
      <h1 className="text-xl cursor-pointer mt-2" >
      Incubation
      </h1>
      {isOpen12 && (
         <div>
         <p className="mt-2">
           "ITCA has set up an incubation hub and facilitates start-up organizations and entrepreneurs to access financing options based on their. "
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
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen13 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion13}>
      <h1 className="text-xl cursor-pointer mt-2" >
      Educator
      </h1>
      {isOpen13 && (
       <div>
       <p className="mt-2">
         "Mentoring Initiative is a member benefit for ITCA members seeking career guidance or advice from experienced professionals . "
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
   
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen14 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion14}>
      <h1 className="text-xl cursor-pointer mt-2" >
      Advisor
      </h1>
      {isOpen14 && (
        <div>
        <p className="mt-2">
          "ITCA has constituted an Advisory Board of globally renowned space scientists to guide the ambitious 75 Students’ Satellites initiative."
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
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen15 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion15}>
      <h1 className="text-xl cursor-pointer mt-2" >
      Thought Leadership
      </h1>
      {isOpen15 && (
        <div>
        <p className="mt-2">
          "Our members decipher industry trends and integrate the technological breakthroughs to develop mint-fresh innovations. "
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


  <div class='bg-homemember bg-cover bg-center homebanners  flex justify-center items-center' >
  <div class="text-center">
    <h1 class='text-white py-2 text-6xl'>Membership</h1>

  </div>
</div>

    <div className="lg:flex justify-evenly  bg-skyblue text-white " >
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2  ${isOpen16 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion16}>
      <h1 className="text-xl cursor-pointer mt-2" >
      Individual Membership
      </h1>
      {isOpen16 && (
         <div>
         <p className="mt-2">
           "Technology's pervasive presence across our globe underscores its vast diversity, embodied by our esteemed Fellows who represent a rich spectrum within. "
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
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen17 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion17}>
      <h1 className="text-xl cursor-pointer mt-2" >
      Institutional Memberships
      </h1>
      {isOpen17 && (
       <div>
       <p className="mt-2">
         "The Institutional Members category welcomes associations, public, and private institutions engaged in fields aligned with the objectives of the ITCA."
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

  <div class='bg-homeforums bg-cover bg-center homebanners  flex justify-center items-center' >
  <div class="text-center">
    <h1 class='text-white py-2 text-6xl'>Forums</h1>

  </div>
</div>

    <div className="lg:flex justify-center gap-2 bg-skyblue text-white " >
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen18 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion18}>
      <h1 className="text-xl cursor-pointer mt-2" >
    Space
      </h1>
      {isOpen18 && (
         <div>
         <p className="mt-2">
           "Coming Soon "
         </p>
         
         </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen19 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion19}>
      <h1 className="text-xl cursor-pointer mt-2" >
      Agri Tech
      </h1>
      {isOpen19 && (
       <div>
       <p className="mt-2">
         "AgriTech refers to the emerging opportunities for the Technology, products& services that supports Agricultural."
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
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen20 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion20}>
      <h1 className="text-xl cursor-pointer mt-2" >
      Industry 4.0
      </h1>
      {isOpen20 && (
         <div>
         <p className="mt-2">
           "Coming Soon "
         </p>
         
         </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen21 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion21}>
      <h1 className="text-xl cursor-pointer mt-2" >
      System
      </h1>
      {isOpen21 && (
         <div>
         <p className="mt-2">
           "Coming Soon "
         </p>
         
         </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen22 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion22}>
      <h1 className="text-xl cursor-pointer mt-2" >
      Temple Engineering
      </h1>
      {isOpen22 && (
        <div>
        <p className="mt-2">
          "Whispers in Heritage Decoding the Symbolic Temple Engineering Ancient innovators defied gravity and time, crafting ."
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



  <div class='bg-homepublication bg-cover bg-center homebanners  flex justify-center items-center' >
  <div class="text-center">
    <h1 class='text-white py-2 text-6xl'>Publication</h1>

  </div>
</div>

    <div className="lg:flex justify-center gap-2 bg-skyblue text-white " >
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen23 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion23}>
      <h1 className="text-xl cursor-pointer mt-2" >
      Tips
      </h1>
      {isOpen23 && (
         <div>
         <p className="mt-2">
           "Coming Soon "
         </p>
         
         </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0  mb-2 ${isOpen24 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion24}>
      <h1 className="text-xl cursor-pointer mt-2" >
      Update
      </h1>
      {isOpen24 && (
         <div>
         <p className="mt-2">
           "Coming Soon "
         </p>
         
         </div>
      )}
    </div>
    
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2 ${isOpen25 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion25}>
      <h1 className="text-xl cursor-pointer mt-2" >
      Report
      </h1>
      {isOpen25 && (
         <div>
         <p className="mt-2">
           "Coming Soon "
         </p>
         
         </div>
      )}
    </div>
    <div className={`w-full lg:w-1/4 p-4 bg-about text-center  lg:m-0 mb-2  ${isOpen26 ? 'h-auto' : 'h-24'}`} onClick={toggleAccordion26}>
      <h1 className="text-xl cursor-pointer mt-2" >
      News
      </h1>
      {isOpen26 && (
         <div>
         <p className="mt-2">
           "Coming Soon "
         </p>
         
         </div>
      )}
    </div>
    
  
  
  
  </div>





  <Footer/>
    </>
  );
};

export default Home;
