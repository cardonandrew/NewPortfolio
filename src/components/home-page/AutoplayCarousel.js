import React from "react";
import "./autoplayslide.css";
import { cardDetails } from "./carousel-config";
import CarouselItem from "./CarouselItem";

export default function AutoplayCarousel() {
  return (
    <div id="carousel">
      <div className="carousel-container">
        <div className="carousel-track">
          {Object.keys(cardDetails).map((detailKey) => {
            return (
              <CarouselItem
                key={detailKey}
                imgUrl={cardDetails[detailKey].imgUrl}
                imgTitle={cardDetails[detailKey].title}
              ></CarouselItem>
            );
          })}
        </div>
        <div className="carousel-track-2">
          {Object.keys(cardDetails).map((detailKey) => {
            return (
              <CarouselItem
                key={detailKey + 10}
                imgUrl={cardDetails[detailKey].imgUrl}
                imgTitle={cardDetails[detailKey].title}
              ></CarouselItem>
            );
          })}
        </div>
      </div>
    </div>
  );
}
