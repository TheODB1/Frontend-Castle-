import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { LoadingBox } from "../components/LoadingBox";
import { MessageBox } from "../components/MessageBox";
import Rating from "../components/Rating";
import Maps from "../components/Maps";

const CastleScreen = () => {
  const { castleId } = useParams(); //castleId is passed down from Route with  useParams hook
  // before using Redux this works to get castleId: const castleId = props.match.params.id;
  // const castle = castles.find((x) => x._id === String(id));

  const [castle, setCastle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCastle = async () => {
      try {
        setLoading(true)
        const res = await fetch(`http://localhost:5000/api/castles/${castleId}`);
        const data = await res.json();
        setCastle(data);
        setLoading(false)
      } catch (error) {
        setError(error.message);
        setLoading(false)
      }
    };
    getCastle();
  }, [castleId]);

  if (!castle) {
    return <MessageBox variant="danger">Castle Not Found</MessageBox>;
  }
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <div className="row top">
            <div className="col-2">
              <img className="large" src={castle.image} alt={castle.name}></img>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1 className="castleName">{castle.name}</h1>
                </li>
                <li className="words">
                  <Rating
                    rating={castle.rating}
                    numReviews={castle.numReviews}
                  />
                </li>
                <li className="words">Price: €{castle.price}</li>
                <li className="words">
                  Description:
                  <p>{castle.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">€{castle.price} </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {castle.countInStock > 0 ? (
                          <span className="success">In Stock</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>
                  <li>
                    <button className="primary block">Add to Cart</button>
                  </li>
                </ul>
              </div>
              <Maps lat={castle.lat} lon={castle.lon} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CastleScreen;
