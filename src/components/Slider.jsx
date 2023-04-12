import React from "react";
import CardSlider from "./CardSlider";

export default function Slider({ name, videos }) {

  const getContentFromRange = (from, to) => {
    return videos.slice(from, to);
  };

  console.log(getContentFromRange(0, 10))

  // const videoItems = videos.map((item) => (
  //   <div className="card" style={{ backgroundImage: `url(${item.image})` }}>
  //   </div>
  // <img src={item.image} className="item-card" alt="card-img"/>
  // <div className="card" style={{ backgroundImage: `url(${item.image})` }}>
  //   <div className="body-item">
  //     <h1 className="title body-item-2">{item.name}</h1>
  //     <div className="properties body-item-3">
  //       <span>{item.year}</span>
  //       <span>{item.duration}</span>
  //     </div>
  //     <p className="description body-item-4">{item.description}</p>
  //   </div>˝
  // ));

  return (
    <div>
      <h1>{name}</h1>
      <CardSlider data={getContentFromRange(0, 10)}/>
    </div>

    // <div className="categories-section">
    //   <div className="carousel">
    //     <h1>{name}</h1>
    //     <div className="carousel__inner">{videoItems}</div>
    //   </div>
    // </div>
  );
}
