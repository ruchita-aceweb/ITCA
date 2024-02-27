import React,{useState} from "react";
import "../Styles/font.css";
import Oureventcar from "./Oureventcar"
import imgsat from "../Images/sat2.jpg";
import imgsat1 from "../Images/pro.jpg";

import imgment1 from "../Images/ment2.jpg";
import imgment2 from "../Images/sat3.jpg";
import img1 from "../Images/Logos-01.png";
import img2 from "../Images/Logos-02.png";
import img3 from "../Images/Logos-03.png";
import img4 from "../Images/Logos-04.png";
import img5 from "../Images/Logos-05.png";
import img6 from "../Images/Logos-06.png";
import img7 from "../Images/Logos-07.png";
import img8 from "../Images/Logos-08.png";
import img9 from "../Images/Logos-09.png";
import img10 from "../Images/Logos-10.png";
import img11 from "../Images/Logos-11.png";
import img12 from "../Images/Logos-12.png";
import img13 from "../Images/Logos-13.png";
import img14 from "../Images/Logos-14.png";
import img15 from "../Images/Logos-15.png";
import img16 from "../Images/Logos-16.png";
import img17 from "../Images/Logos-17.png";
import img18 from "../Images/Logos-18.png";
import img19 from "../Images/Logos-19.png";
import img20 from "../Images/Logos-20.png";
import img21 from "../Images/Logos-21.png";
import img22 from "../Images/Logos-22.png";
import img23 from "../Images/Logos-23.png";
import img24 from "../Images/Logos-24.png";
import img25 from "../Images/Logos-25.png";
import img26 from "../Images/Logos-26.png";
import img27 from "../Images/Logos-27.png";
import img28 from "../Images/Logos-28.png";
import img29 from "../Images/Logos-29.png";
import 'aos/dist/aos.css';
import AOS from 'aos';
import imgsub from "../Images/Membership.jpg";

import { MdModelTraining } from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";
import { VscSymbolEnumMember } from "react-icons/vsc";



const Home = () => {
  AOS.init({
    duration: 1200,
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
   <div class="bg-satellite_banner bg-cover bg-center h-96 ">
    <div class="container m-auto">
        <h1 class="text-white text-6xl  px-10  py-20 font-bold  " data-aos="fade-up">Indian <br></br>Technology <br></br> Congress Association</h1>
    </div>
</div>
<div className="bg-bule1">
<div class="container m-auto text-white p-6 leading-8">
<h1 className="text-center  text-5xl p-2 mb-4  font-bold">75 Students’ Satellites Mission</h1>
    <p className="text-center  ">Indian Prime Minister Shri. Narendra Modi Ji appraised the UN General Assembly of the nation's intent to Launch 75 Students built Satellites that have been developed and built by Indian Schools and Colleges. Indian Technology Congress Association initiated in 2018, the 75 Students' Satellites Mission to Celebrate India's 75 years of Freedom by 2022 during ITC, 2018 held at Bangalore.</p>
    <h1 className="text-center mt-4 mb-2 text-3xl font-bold text-white">About ITCA</h1>
    <p className="text-center text-white mb-4">Welcome to ITCA-we Encourage, Educate, Envision and Empower the engineering and technology fraternity across the globe to conceptualize and realize engineering solutions for societal needs.</p>
    <div className="flex justify-center mt-2 bg-green mb-2">
   <button className="bg-skyblue py-2 px-4 rounded-lg ">Learn More</button>
    </div>
   
</div>
</div>
<div className="flex flex-wrap bg-black text-white leading-8 ">

<div className="container m-auto w-full lg:w-1/2 md:w-1/2 sm:w-full  lg:px-10">
    <h1 className="text-center lg:px-6 py-2 text-2xl font-bold">Building the World of Tomorrow with Today's Engineering</h1>
    <p className="text-center lg:px-6 py-4">We are pushing the boundaries of engineering and technology, not just for today, but for the future, in collaboration with our Fellows, Members, and Partners. To contribute to societal growth, we are building skills and competencies and reforming the workforce. Our members influence public policy and drive innovation. By doing all these, ITCA drives engineering to shape the world of tomorrow</p>
    <div className="flex justify-center mt-2 bg-green mb-2">
   <button className="bg-skyblue py-2 px-4 rounded-lg ">Learn More</button>
    </div>
  </div>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full ">
    <img src={imgsat1} alt="satellite" className="mx-auto" data-aos="fade-left" onClick={() => handleImageClick(imgsat1)} />
  </div>

  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full ">
    <img src={imgsat} alt="satellite" className="mx-auto" data-aos="fade-right" onClick={() => handleImageClick(imgsat)}/>
  </div>
  <div className="container m-auto w-full lg:w-1/2 md:w-1/2 sm:w-full  lg:px-10">
    <h1 className="text-center p-4 text-2xl font-bold">Professional Development</h1>
    <p className="text-center ">Our focus is on continued education and fostering the culture of lifelong learning. ITCA's teams are continuously endeavouring to curate content relevant to the industry needs and structure summer schools both in India and abroad.</p>
    <div className="flex justify-center mt-2 bg-green mb-2">
   <button className="bg-skyblue py-2 px-4 rounded-lg ">Learn More</button>
    </div>
  </div>
</div>
  <div className="flex flex-wrap bg-ligthgrey text-white lg:px-10 py-4 leading-8">
  <div className="w-full lg:w-1/3 md:w-1/2 sm:w-full  ">
   
  <h1 className="text-center p-4 text-2xl  font-bold">Training</h1>
  <div className="text-white flex justify-center font-bold  "><MdModelTraining className="bg-skyblue p-2 text-8xl text-white rounded-full" /></div>
    <p className="text-center p-4 ">ITCA has developed content for continuing education programs (for industry professionals intending to diversify into new areas) in areas of SpaceTech, and is also developing content focused on high school educational programs.

</p>

<div className="flex justify-center mt-2 bg-green mb-2">
   <button className="bg-skyblue py-2 px-4 rounded-lg">Learn More</button>
    </div>
  </div>
  <div className="w-full lg:w-1/3 md:w-1/2 sm:w-full  ">
    <h1 className="text-center p-4 text-2xl font-bold">Proceedings</h1>
    <div className="text-white flex justify-center font-bold  "><VscServerProcess className="bg-skyblue p-2 text-8xl text-white rounded-full" /></div>
    <p className="text-center  p-4">Proceedings are thematic ITCA's deep-dive publications providing detailed review of technical advances with sectoral scan and possible use-cases for technologies

.</p>
<div className="flex justify-center mt-2 bg-green mb-2 ">
   <button className="bg-skyblue py-2 px-4 rounded-lg ">Learn More</button>
    </div>
  </div>
  <div className="w-full lg:w-1/3 md:w-1/2 sm:w-full">
    <h1 className="text-center p-4 text-2xl font-bold">Membership and Accredation</h1>
    <div className="text-white flex justify-center font-bold  "><VscSymbolEnumMember className="bg-skyblue p-2 text-8xl text-white rounded-full" /></div>
    <p className="text-center p-4 ">ITCA consists of individual members who are qualified as Graduate or Equivalent in the disciplines and pursuing with Technology domains in India along with membership of any recognized professional body of any specialized field. The member categories:</p>
    <div className="flex justify-center mt-2 bg-green mb-2">
   <button className="bg-skyblue py-2 px-4 rounded-lg ">Learn More</button>
    </div>
  </div>
  
  

</div>

<div className="flex flex-wrap justify-center bg-black text-white leading-8">
<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full ">
    <img src={imgment1} alt="satellite" className="mx-auto" data-aos="fade-right" onClick={() => handleImageClick(imgment1)} />
  </div>
<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full  lg:pt-16">
    <h1 className="text-center p-4 text-2xl  font-bold">Mentoring</h1>
    <p className="text-center  lg:px-10 ">Mentoring Initiative is a member benefit for ITCA members seeking career guidance or advice from experienced professionals with diverse experience to become contributing engineers. ITCA retains its core focus on mentoring with the objective of creating win-win benefits for both the mentor and mentee.</p>
    <div className="flex justify-center mt-2 bg-green mb-2">
   <button className="bg-skyblue py-2 px-4 rounded-lg ">Learn More</button>
    </div>
    
  </div>
  </div>
 

  <div className="flex flex-wrap justify-center bg-black text-white leading-8">
<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full lg:pt-12 p-4">
    <h1 className="text-center p-4 text-2xl font-bold">Events</h1>
    <p className="text-center lg:px-10">Conferences, seminars, meetings with experts, online courses, hackathons, international student exchange programmes, summer schools abroad and in India and meetings with ITCA leadership are among myriad events that are offered to members.</p>
    <p className="text-center lg:px-10">These events are organized to facilitate enhancement of the engineering profession by active learning, networking, contributing, and collaborating with peers and engineering practitioners.</p>
    <div className="flex justify-center mt-2 bg-green mb-2">
   <button className="bg-skyblue py-2 px-4 rounded-lg ">Learn More</button>
    </div>
  </div>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full ">
    <img src={imgment2} alt="satellite" className="mx-auto" data-aos="fade-left" onClick={() => handleImageClick(imgment2)}/>
  </div>
  </div>


  <div className="flex flex-wrap justify-center bg-black text-white leading-8">
<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full ">
    <img src={imgment1} alt="satellite" className="mx-auto" data-aos="fade-right" onClick={() => handleImageClick(imgment1)}/>
  </div>
<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full  lg:pt-16">
    <h1 className="text-center p-4 text-2xl  font-bold">Startup Incubation</h1>
    <p className="text-center lg:px-10">ITCA has set up an incubation hub and facilitates start-up organizations and entrepreneurs to access financing options based on their requirements. Start-ups and entrepreneurs can work with ITCA's Fellows and Members to sharpen and refine their business ideas and enhance success rates.</p>
    <div className="flex justify-center mt-2 bg-green mb-2">
   <button className="bg-skyblue py-2 px-4 rounded-lg">Learn More</button>
    </div>
    
  </div>
  </div>


 


<div className="flex flex-wrap justify-center bg-black text-white leading-8">
<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full lg:pt-24 lg:px-10" data-aos="fade-right">
    <h1 className="text-center p-4 text-5xl  font-bold">Sustainable Development Goals</h1>
    <p className="text-center p-4 ">The United Nations, involving more than 190 Member States, has developed the 2030 Agenda for Sustainable Development in order to address these challenges in the form of 17 Sustainable Development Goals (SDGs) with 169 associated specific targets. Space science, technology and satellites have the potential to contribute to the Sustainable Development Goals. Critical technologies of the 21st century including information technology, modern communication, global positioning systems, satellite television, weather forecasting and remote sensing all rely on space science and technology.</p>
    <div className="flex justify-center mt-2 bg-green mb-4">
   <button className="bg-skyblue py-2 px-4 rounded-lg">Learn More</button>
    </div>
  </div>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full ">
    <img src={imgsub} alt="satellite" className="" data-aos="fade-left" onClick={() => handleImageClick(imgsub)} />
  </div> 
</div>
<Oureventcar/>
<div className="flex flex-wrap justify-center bg-black text-white leading-8">
<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full lg:pt-12 p-4">
    <h1 className="text-center p-4  text-2xl font-bold">Get Associated</h1>
    <p className="text-center lg:px-10 py-2">If you are interested in engineering, technology and how they can address present day challenges, ITCA is the right organization to associate with. ITCA empowers you to pursue your vision with confidence. Now matter the idea, we are there with you, all the way in your journey from concept to product.</p>
  
    <div className="flex justify-center mt-2 bg-green mb-2">
   <button className="bg-skyblue py-2 px-4 rounded-lg ">Learn More</button>
    </div>
  </div>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full " data-aos="fade-left">
    <img src={imgment2} alt="satellite" className="mx-auto"  onClick={() => handleImageClick(imgment2)}/>
  </div>
  </div>
  <div className="flex flex-wrap justify-center bg-black text-white leading-8">
<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full ">
    <img src={imgment1} alt="satellite" className="mx-auto" data-aos="fade-right" onClick={() => handleImageClick(imgment1)}/>
  </div>
<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full  lg:pt-16">
    <h1 className="text-center p-4 text-2xl  font-bold">Boards and Committees</h1>
    <p className="text-center lg:px-10 py-2 ">ITCA has built linkages with State Governments in various states and is being approached for recommendations on policy. Should you been keen to participate in these initiatives of strengthening public policy, you could share your interest areas and profile with the Secretariat</p>
    <div className="flex justify-center mt-2 bg-green mb-2">
   <button className="bg-skyblue py-2 px-4 rounded-lg ">Learn More</button>
    </div>
    
  </div>
  </div>


  <div className="flex flex-wrap justify-center bg-black text-white leading-8">
<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full lg:pt-12 p-4">
    <h1 className="text-center p-4 text-2xl font-bold">Specialist Groups</h1>
    <p className="text-center lg:px-10 py-2 ">Specialist groups are a collaborative community of professionals working in one area. Participation in a specialist group helps deepen one's involvement and showcases skills and expertise level. Currenly, ITCA has an active specialist group focued on SpaceTech. We are in the process of adding multiple specialist groups</p>
  
    <div className="flex justify-center mt-2 bg-green mb-2">
   <button className="bg-skyblue py-2 px-4 rounded-lg ">Learn More</button>
    </div>
  </div>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full ">
    <img src={imgment2} alt="satellite" className="mx-auto" data-aos="fade-left" onClick={() => handleImageClick(imgment2)}/>
  </div>
  </div>
  <div className="flex flex-wrap justify-center bg-black text-white leading-8">
<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full ">
    <img src={imgment1} alt="satellite" className="mx-auto" data-aos="fade-right" onClick={() => handleImageClick(imgment1)}/>
  </div>
<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full  lg:pt-16">
    <h1 className="text-center p-4 text-2xl  font-bold">History</h1>
    <p className="text-center p-4 ">TC over the last 18 years has attained international prominence as a unique platform fostering Industry-Academia-Research Labs-Policy Makers’ collaboration with the objective of capacity-building for global technological progress.</p>
    <div className="flex justify-center mt-2 bg-green mb-2">
   <button className="bg-skyblue py-2 px-4 rounded-lg ">Learn More</button>
    </div>
    
  </div>
  </div>


  <div className="flex flex-wrap justify-center bg-black text-white leading-8">
<div className="w-full lg:w-1/2 md:w-1/2 sm:w-full lg:pt-12 p-4">
    <h1 className="text-center p-4 text-2xl font-bold">Partnerships</h1>
    <p className="text-center lg:px-10 py-2 ">TCA has structured active and functional partnerships with global organizations to build synergy with leading institutions abroad to facilitate cross-pollination of ideas and create opportunities for collaboration.</p>
  
    <div className="flex justify-center mt-2 bg-green mb-2">
   <button className="bg-skyblue py-2 px-4 rounded-lg ">Learn More</button>
    </div>
  </div>
  <div className="w-full lg:w-1/2 md:w-1/2 sm:w-full ">
    <img src={imgment2} alt="satellite" className="mx-auto" data-aos="fade-left" onClick={() => handleImageClick(imgment2)}/>
  </div>
  </div>







<div className="bg-black lg:py-9"><h1 className="text-center text-white py-4  text-4xl font-bold">In Synergy With</h1>
<div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 py-9  lg:px-40 px-9" data-aos="zoom-in">

<div class="bg-white h-28  flex justify-center items-center">
    <img src={img1} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img1)} />
</div>
 
   <div class="bg-white h-28 flex justify-center items-center">
    <img src={img2} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img2)}/>
  </div>

  <div class="bg-white h-28 flex justify-center items-center">
  <img src={img3} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img3)}/>
</div>
   <div class="bg-white h-28 flex justify-center items-center">
  <img src={img4} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img4)}/>
  </div>
  
   <div class="bg-white h-28 flex justify-center items-center">
  <img src={img5} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img5)} />
  </div>
   <div class="bg-white h-28 flex justify-center items-center">
  <img src={img6} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img6)}/>
  </div>
   <div class="bg-white h-28 flex justify-center items-center">
  <img src={img7} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img7)}/>
  </div>
   <div class="bg-white h-28 flex justify-center items-center">
  <img src={img8} alt="imagelogo" class="lg:max-w-full p-2 max-h-full"onClick={() => handleImageClick(img8)} />
  </div>
   <div class="bg-white h-28 flex justify-center items-center">
  <img src={img9} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img9)}/>
  </div>
   <div class="bg-white h-28 flex justify-center items-center">
  <img src={img10} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img10)}/>
  </div>
   <div class="bg-white h-28 flex justify-center items-center">
  <img src={img11} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img11)}/>
  </div>
   <div class="bg-white h-28 flex justify-center items-center">
  <img src={img12} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img12)}/>
  </div>

  <div class="bg-white h-28 flex justify-center items-center">
  <img src={img13} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img13)}/>
  </div>
  <div class="bg-white h-28 flex justify-center items-center">
  <img src={img14} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img14)}/>
  </div>
  <div class="bg-white h-28 flex justify-center items-center">
  <img src={img15} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img15)}/>
  </div>
  <div class="bg-white h-28 flex justify-center items-center">
  <img src={img16} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img16)}/>
  </div>
  <div class="bg-white h-28 flex justify-center items-center">
  <img src={img17} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img17)}/>
  </div>
  <div class="bg-white h-28 flex justify-center items-center">
  <img src={img18} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img18)}/>
  </div>
  <div class="bg-white h-28 flex justify-center items-center">
  <img src={img19} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img19)} />
  </div>
  <div class="bg-white h-28 flex justify-center items-center">
  <img src={img20} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img20)}/>
  </div>
  <div class="bg-white h-28 flex justify-center items-center">
  <img src={img21} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img21)}/>
  </div>
  <div class="bg-white h-28 flex justify-center items-center">
  <img src={img22} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img22)}/>
  </div>
  <div class="bg-white h-28 flex justify-center items-center">
  <img src={img23} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img23)}/>
  </div>
  <div class="bg-white h-28 flex justify-center items-center">
  <img src={img24} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img24)} />
  </div>
  <div class="bg-white h-28 flex justify-center items-center">
  <img src={img25} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img25)} />
  </div>
  <div class="bg-white h-28 flex justify-center items-center">
  <img src={img26} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img26)}/>
  </div>
  <div class="bg-white h-28 flex justify-center items-center">
  <img src={img27} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img27)}/>
  </div>
  <div class="bg-white h-28 flex justify-center items-center">
  <img src={img28} alt="imagelogo" class="lg:max-w-full p-2 max-h-full" onClick={() => handleImageClick(img28)}/>
  </div>
  <div class="bg-white h-28 flex justify-center items-center">
  <img src={img29} alt="imagelogo" class="lg:max-w-full p-2 max-h-full"onClick={() => handleImageClick(img29)} />
  </div>
  </div>
 
  
  
  
  
</div>
{selectedImage && (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={() => setSelectedImage(null)}>
      <div className="absolute inset-0 flex justify-center items-center">
        <img src={selectedImage} alt="Selected Image" className="max-w-full max-h-full" />
      </div>
    </div>
      )}

    </>
  );
};

export default Home;
