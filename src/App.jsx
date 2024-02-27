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
import Proceedings from "./Professional/Proceedings";
import Tip from "./Professional/Tip.jsx";
import Report from "./Professional/Report.jsx";
import Mentoring from "./Professional/Mentoring.jsx";
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
        <Route path="/history" element={<History/>} />
        <Route path="/partnership" element={<Partnership/>} />
        <Route path="/governance" element={<Governance/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/strategy" element={<Strategy/>} />
        <Route path="/sustainable" element={<Sustainabledev/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/webinar" element={<Webinar/>}/>
        <Route path="/pastevent" element={<Pastevent/>}/>
        <Route path="/professionaldev" element={<Professionaldev/>}/>
        <Route path="/proceedings" element={<Proceedings/>}/>
        <Route path="/tip" element={<Tip/>}/>
        <Route path="/report" element={<Report/>}/>
        <Route path="/mentoring" element={<Mentoring/>}/>
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
        <Route path="/experistes" element={<Expertise/>}/>

   
      
      </Routes>
      <Footer />
    </>
  );
};

export default App;
