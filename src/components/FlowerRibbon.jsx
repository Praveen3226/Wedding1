import React, { useState } from "react";

export default function FlowerRibbon({ onUntie }) {
  const [done, setDone] = useState(false);

  const handleClick = () => {
    if (done) return;
    setDone(true);
    onUntie();
  };

  return (
    <div
      className={`cloth ${done ? "untied" : ""}`}
      onClick={handleClick}
    >
      <div className="knot" />
      <div className="tail left" />
      <div className="tail right" />
    </div>
  );
}
