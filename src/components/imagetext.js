import React from "react";
import photos from "./data";
import "../styles/components/imagetext.css";
import Portrait from "../images/hanger.jpg"
import Hanger from "../images/shoes.jpg"

export default function Featured() {
  const [firstImage, secondImage] = photos;
  return (
    <section className="featured-section"  data-scroll-section>
      <div className="featured-row-layout">
        <h6>Smooth</h6>
        <img src={Hanger} data-scroll/>
      </div>
      <div className='featured-column-layout'>
        <h6>Clean</h6>
        <img src={Portrait} data-scroll/>
      </div>
    </section>
  );
}