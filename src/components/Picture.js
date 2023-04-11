import React from "react";

const pictures = ({ data }) => {
  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <a target="_blank"
           rel="noreferrer" 
           href={data.src.large}>
          <img src={data.src.large} alt="" />
        </a>
      </div>
    </div>
  );
};

export default pictures;
