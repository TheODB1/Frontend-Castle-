import React from "react";
import Rating from "./Rating";

const Castle = ({castle}) => {
    // console.log(castle);
//  or  const { castle } = props;
  return (
    <div key={castle._id} className="card homeScreen">
      <a className='castle-title' href={`/castle/${castle._id}`}>
        <img className="medium" src={castle.image} alt={castle.name} />
      </a>
      <div className="card-body">
        <a className='castle-title' href={`/castle/${castle._id}`}>
          <h2>{castle.name}</h2>
        </a>
        <Rating rating={castle.rating} numReviews={castle.numReviews}></Rating>
        <div className="price">€{castle.price}</div>
      </div>
    </div>
  );
};

export default Castle;
