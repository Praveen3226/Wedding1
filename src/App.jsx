import React, { useState ,useEffect} from "react";
import Scroll from "./components/Scroll";
import Dolls from "./components/Dolls";
import AfterOpenFX from "./components/AfterOpenFX";
import HintPopup from "./components/HintPopup";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [showHint, setShowHint] = useState(true);



  return (
    <div className="scene">
        {showHint && <HintPopup />}
      <Scroll
        opened={opened}
        onUntie={() => {
          console.log("UNTIED → opening scroll");
          setOpened(true);
          setShowHint(false); 
        }}
      />

      <Dolls opened={opened} />

      {opened && <AfterOpenFX />}
    </div>
  );
}
