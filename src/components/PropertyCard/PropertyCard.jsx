import React from "react";
import './PropertyCard.css'
import {AiFillHeart} from 'react-icons/ai'
import {truncate} from 'lodash'
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";
const PropertyCard = ({card}) => {

  const navigate = useNavigate();
  return (
    <div className="flexColStart r-card"
    onClick={()=>navigate(`../properties/${card.id}`)}
    >
      <Heart id={card?.id}/>
      <img src={card.image} alt="home" />
      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>XAF</span>
        <span> 400,000</span>
      </span>
      <span className="primaryText">Sunrise Cite</span>
      <span className="secondaryText">{truncate(card.description, {length: 40})}</span>
    </div>
  );
};

export default PropertyCard;
