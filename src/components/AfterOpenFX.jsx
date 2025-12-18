import React, { useRef } from "react";
import Lottie from "lottie-react";
import afterOpenAnimation from "../assets/afterOpen.json";

export default function AfterOpenFX() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none", // 👈 does not block clicks
        zIndex: 20
      }}
    >
      <Lottie
        animationData={afterOpenAnimation}
        loop={false}
        autoplay={true}
      />
    </div>
  );
}
