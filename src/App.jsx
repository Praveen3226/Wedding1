import React, { useState } from "react";
import Scroll from "./components/Scroll";
import Dolls from "./components/Dolls";
import AfterOpenFX from "./components/AfterOpenFX";
import HintPopup from "./components/HintPopup";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [showHint, setShowHint] = useState(true);

  return (
    <div className="scene">
      {/* Relative container to anchor the hint above the scroll */}
      <div className="invitation-wrapper">
        {showHint && <HintPopup />}
        <Scroll
          opened={opened}
          onUntie={() => {
            console.log("UNTIED → opening scroll");
            setOpened(true);
            setShowHint(false); 
          }}
        />
      </div>

      <Dolls opened={opened} />
      {opened && <AfterOpenFX />}
    </div>
  );
}
