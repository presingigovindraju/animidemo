import react from "react";
import HeroSection from "./Components/HeroSection/HeroSection";
import "./App.css";
import CoustomersSection from "./Components/CoustomersSection/CoustomersSection";
import AeroWalkSection from "./Components/AeroWalkSection/AeroWalkSection.js";
import AeroCarbonSection from "./Components/AeroCarbonSection/AeroCarbonSection.js";
import AeroFlySection from "./Components/AeroFlySection/AeroFlySection.js";
import UltraLightWeightSectionOne from "./Components/UltraLightWeightSectionOne/UltraLightWeightSectionOne.js";
import UltraLightWeightSectionTwo from "./Components/UltraLightWeightSectionTwo/UltraLightWeightSectionTwo.js";
import UltraLightWeightSectionThree from "./Components/UltraLightWeightSectionThree/UltraLightWeightSectionThreeImg.js";
import FormSection from "./Components/FormSection/FormSection.js";


const App =()=>{



    return (
        <div>
            <HeroSection />
            <CoustomersSection />
            <AeroWalkSection />
            <UltraLightWeightSectionOne />
            <AeroCarbonSection />
            <UltraLightWeightSectionTwo />
            <AeroFlySection />
            <UltraLightWeightSectionThree />
            <FormSection />
        </div>
    )
}



export default App