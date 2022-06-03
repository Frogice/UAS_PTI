import React from "react";
import "../style/Home.css";

const NewsItem = ({ title, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default NewsItem;
