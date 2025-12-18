import React, { useRef } from "react";
import Lottie from "lottie-react";
import giftAnimation from "../assets/Gift.json";

export default function ClothSeal({ onUntie }) {
  const lottieRef = useRef(null);

  const handleClick = () => {
    if (!lottieRef.current) return;
    lottieRef.current.play();
  };

  return (
<div
  onClick={handleClick}
  style={{
    position: "absolute",
    top: "6px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "360px",
    zIndex: 9999,          // ⬅️ VERY IMPORTANT
    pointerEvents: "auto", // ⬅️ FORCE clicks
    cursor: "pointer"
  }}
>

      <Lottie
        lottieRef={lottieRef}
        animationData={giftAnimation}
        loop={false}
        autoplay={false}
        onComplete={onUntie}
      />
    </div>
  );
}
