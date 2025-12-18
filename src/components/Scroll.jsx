import React from "react";
import ClothSeal from "./ClothSeal";
import garland from "../assets/garland.png";
import qrcode from "../assets/my_location_qr.png";
import { Utensils, Gem  } from 'lucide-react'; // Import the icons you need
import marriageAnimation from "../assets/Marriage animation.json"; 
import MarriageCouple from "../assets/Marriage Couple hugging.json";
import Lottie from "lottie-react";

export default function Scroll({ opened, onUntie }) {
  return (
    <div className={`scroll ${opened ? "open" : ""}`}>
      <div className="rod top" />

      <ClothSeal onUntie={onUntie} />

      <div className="scroll-body">
        <div className="scroll-bg">

          {/* Opening line */}
        <div className="wedding-branding">
        <p className="invite-line">
            Together with our families, we joyfully invite you to witness 
            the union of our lives and the beginning of our forever story.
        </p>

        <h1 className="couple-monogram">
            Annapoorna <span className="union-separator">Weds</span> Rakesh
            
        </h1>
        <img src={garland} alt="decoration" className="garland-left" />
        {/* Garland and Date Container */}
        <div className="date-section-container">
            
            <p className="event-date">
            on Sunday the 25th January 2026
            </p>
        </div>
        <div className="presence-message-block">
            <p className="presence-main">
            As we embark on this beautiful journey of love and togetherness, 
            your blessings are the foundation of our new beginning.
            </p>
            <p className="presence-sub">
            Having you witness our union and share in our joy would make our 
            celebration truly complete. Your presence is the greatest gift we could receive.
            </p>
        </div>
        </div>

        <div className="invite-plain">
            
        <div className="venue-container">
        <div className="venue-decoration">✧ Venue ✧</div>
        
        <div className="venue-mobile-block">
        <div className="venue-at">at</div>
        <div className="venue-name">Sri Basaveshwara Sugnana Mantapa</div>
        <div className="venue-address">
            Next to Telephone Exchange, Vijayanagar,<br />
            Bangalore – 560040
        </div>
        </div>




        </div>

        <h2 className="grace-line">Awaiting your gracious presence,</h2>

<div className="family-pair">
  <h3 className="parents">
    Smt. Geetha R. and Sri. Ranganath S.<br />
    <span className="child-name">Praveen R.</span>
  </h3>

  <h3 className="parents">
    Smt. Sudha M.V. and Sri. Manju A.<br />
    <span className="child-name">Vikas M.</span>
  </h3>
</div>



        <div className="event-dual">

{/* LEFT — Reception */}
<div className="event-card left">
  <div className="event-icon">
  <Lottie
    animationData={marriageAnimation}
    loop
    autoplay
    style={{ width: 120, height: 120 }}
  />

  </div>

  <p className="event-title">Reception :</p>
  <p className="event-text">
    24-01-2026, Saturday<br />
    7:00 p.m. onwards
  </p>
</div>


  {/* RIGHT — Muhurtam */}
  <div className="event-card right">
    <div className="event-icon">
        <Lottie
    animationData={MarriageCouple}
    loop
    autoplay
    style={{ width: 120, height: 120 }}
  />
    </div>
    <p className="event-title">Muhurtam :</p>
    <p className="event-text">
      25-01-2026, Sunday<br />
      10:00 a.m. to 11:00 a.m.
    </p>
  </div>
        <div className="qr-container">
        <div className="qr-box">
            <div className="qr-frame top-left"></div>
            <div className="qr-frame top-right"></div>
            <div className="qr-frame bottom-left"></div>
            <div className="qr-frame bottom-right"></div>
            
            {/* Replace with your actual QR code image path */}
            <img src={qrcode} alt="Venue Location QR" className="qr-image" />
        </div>
        
        <p className="qr-instruction">
            Scan to navigate to the venue <br />
            <a 
            href="https://maps.app.goo.gl/Ms76ivd6VicUKMSk8?g_st=ic" 
            target="_blank" 
            rel="noreferrer" 
            className="map-link"
            >
            📍 View on Google Maps
            </a> 
        </p>
        </div>

        </div>



          </div>

        </div>
      </div>

      <div className="rod bottom" />
    </div>
  );
}
