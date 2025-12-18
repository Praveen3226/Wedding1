import React from "react";
import bride from "../assets/bride.png";
import groom from "../assets/groom.png";

export default function Dolls({ opened }) {
  return (
    <div className={`dolls ${opened ? "near" : ""}`}>
      <img src={bride} alt="Bride" />
      <img src={groom} alt="Groom" />
    </div>
  );
}
