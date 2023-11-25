import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper ">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <div className="logo">
            
           
            <span className="logo">HomeFinder</span></div>
          <span className="text">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="text-cor">Info</span>
          <span className="text">Cameroon Buea,tarred malingo</span>
          <div className="flexCenter f-menu">
            <span>Homes</span>
            <span>Contact</span>
            <span>Add</span>
            <span>Why Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
