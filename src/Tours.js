import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2> Our tours</h2>
        <div className="underline"></div>
        {console.log({tours})}
      </div>
      <div>
        {/* {
          tours.map((tour) => {
            return <h1>Hello Tours</h1>
          })
          
        } */}
        {tours.map((tour) => {
          //  console.log(tour)
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
