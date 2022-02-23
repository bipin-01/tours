import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <a href="https://www.google.com/">
        <img src={image} alt={name} />
      </a>
      <footer>
        <div className="tour-infor">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : " read more"}
          </button>
        </p>
        {/* <p>{info}</p> */}
        <button className="delete-btn" onClick={()=> {
          removeTour(id)
        }}>
          NOT interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
