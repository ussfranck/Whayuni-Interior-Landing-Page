import React from "react";
import "../css/App.css";

export const ProjectSliderCard = ({name, description, date, preview, imgIndex}) => {
  let index = imgIndex + 1;
  let srcPreview = preview.replace("-", index);
  console.info(srcPreview);
  return (
    <div className={'whayuni-projects__container-cards-card'}>
      <img className={'img-item'} src={srcPreview} alt={'image'} />
      <div className={"whayuni-projects__container-cards-card-review"}>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{date}</p>
      </div>
    </div>
  )
}
