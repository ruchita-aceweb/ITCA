import React, { useEffect, lazy } from "react";

// router
import { Routes, Route} from "react-router-dom";
import History from "./Aboutus/History.jsx";
import Partnership from "./Aboutus/Partnership.jsx";
import Governance from "./Aboutus/Governance.jsx";
import Contact from "./Aboutus/Contact.jsx";
import Strategy from "./Aboutus/Strategy.jsx";
import Sustainabledev from "./Aboutus/Sustainabledev.jsx";
import Aboutus from "./Aboutus/Aboutus.jsx";
import Event from "./Events/Event.jsx";
import Webinar from "./Events/Webinar.jsx";
import Pastevent from "./Events/Pastevent.jsx";
import Professionaldev from "./Professional/Professionaldev.jsx";



import Startup from "./Professional/Startup.jsx";
import Training from "./Professional/Training.jsx";
import Associate from "./Associate/Associate";
import Specialist from "./Associate/Specialist.jsx";
import Boards from "./Associate/Boards.jsx";
import Individual from "./Membership/Individual.jsx";
import Instituational from "./Membership/Instituational.jsx";
import Ngodarpan from "./Membership/Ngodarpan.jsx";
import Latestnews from "./News/Latestnews.jsx";
import Media from "./News/Media.jsx";
import Expertise from "./Expertise/Expertise.jsx";
import Vision from "./Aboutus/Vision.jsx";
import Mission from "./Aboutus/Mission.jsx";
import Congress from "./Events/Congress.jsx";
import Masterclass from "./Events/Masterclass.jsx";
import Incubation from "./Professional/Incubation.jsx";
import Educator from "./Professional/Educator.jsx";
import Advisor from "./Professional/Advisor.jsx";
import Leadership from "./Professional/Leadership.jsx";
import Space from "./Forums/Space.jsx";
import Tips from "./Publication/Tips.jsx";
import Update from "./Publication/Update.jsx";
import Report from "./Publication/Report.jsx";
import Newnews from "./Publication/Newnews.jsx";
import Agritech from "./Forums/Agritech.jsx";
import Industry from "./Forums/Industry.jsx";
import System from "./Forums/System.jsx";
import Temple from "./Forums/Temple.jsx";
import Proceedings from "./Professional/Proceedings.jsx";
import Mentoring from "./Professional/Mentoring.jsx";
import Aboutinfo from "./Aboutus/Aboutinfo.jsx";
import Eventinfo from "./Events/Eventinfo.jsx";





// MainPages
const Home = lazy(() => import("./MainPages/Home"));
// components
const Navbar  = lazy(() => import( "./SharedComponents/Navbar.jsx"));
const Footer  = lazy(() => import( "./SharedComponents/Footer.jsx"));

const App = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    return () => {};
  }, []);

  return (
    <>
      
   
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/aboutinfo" element={<Aboutinfo/>}/>
        <Route path="/vision" element={<Vision/>}/>
        <Route path="/mission" element={<Mission/>}/>
        <Route path="/heritage" element={<History/>} />
        <Route path="/partnership" element={<Partnership/>} />
        <Route path="/governance" element={<Governance/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/strategy" element={<Strategy/>} />
        <Route path="/sustainable" element={<Sustainabledev/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/eventinfo" element={<Eventinfo/>}/>
        <Route path="/congress" element={<Congress/>}/>
        <Route path="/webinar" element={<Webinar/>}/>
        <Route path="/masterclass" element={<Masterclass/>}/>
        <Route path="/pastevent" element={<Pastevent/>}/>
        <Route path="/professionaldev" element={<Professionaldev/>}/>
        <Route path="/incubation" element={<Incubation/>}/>
        <Route path="/educator" element={<Educator/>}/>
        <Route path="/advisor" element={<Advisor/>}/>
        <Route path="/leadership" element={<Leadership/>}/>
        <Route path="/startup" element={<Startup/>}/>
        <Route path="/training" element={<Training/>}/>
        <Route path="/associate" element={<Associate/>}/>
        <Route path="/specialist" element={<Specialist/>}/>  
        <Route path="/boards" element={<Boards/>}/> 
        <Route path="/individual" element={<Individual/>}/>
        <Route path="/institutional" element={<Instituational/>}/>
        <Route path="/ngo" element={<Ngodarpan/>}/>
        <Route path="/latest" element={<Latestnews/>}/>
        <Route path="/media" element={<Media/>}/>
        <Route path="/space" element={<Space/>}/>
        <Route path="/tips" element={<Tips/>}/>
        <Route path="/update" element={<Update/>}/>
        <Route path="/report" element={<Report/>}/>
        <Route path="/newnews" element={<Newnews/>}/>
        <Route path="/agritech" element={<Agritech/>}/>
        <Route path="/industry" element={<Industry/>}/>
        <Route path="/system" element={<System/>}/>
        <Route path="/temple" element={<Temple/>}/>
        <Route path="/proceedings" element={<Proceedings/>}/>
        <Route path="/mentoring" element={<Mentoring/>}/>
        

   
      
      </Routes>
      <Footer />
    </>
  );
};

export default App;
