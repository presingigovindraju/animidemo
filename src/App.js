import react from "react";
import HeroSection from "./Components/HeroSection/HeroSection";
import "./App.css";
import CoustomersSection from "./Components/CoustomersSection/CoustomersSection";
import AeroWalkSection from "./Components/AeroWalkSection/AeroWalkSection.js";
import AeroCarbonSection from "./Components/AeroCarbonSection/AeroCarbonSection.js";
import AeroFlySection from "./Components/AeroFlySection/AeroFlySection.js";



const App =()=>{



    return (
        <div>
            <HeroSection />
            <CoustomersSection />
            <AeroWalkSection />
            <AeroCarbonSection />
            <AeroFlySection />
        </div>
    )
}



export default App