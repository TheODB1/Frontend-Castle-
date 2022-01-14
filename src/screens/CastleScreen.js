import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailsCastle } from "../actions/castleActions";
import { LoadingBox } from "../components/LoadingBox";
import { MessageBox } from "../components/MessageBox";
import Rating from "../components/Rating";
import Maps from "../components/Maps";

const CastleScreen = () => {
  const { castleId } = useParams();//castleId is passed down from Route with  useParams hook
  // before using Redux this works to get castleId: const castleId = props.match.params.id;
  // const castle = castles.find((x) => x._id === String(id));
  const dispatch = useDispatch();
  const castleDetails = useSelector((state) => state.castleDetails); // state
  const { loading, error, castle } = castleDetails;  // loading,error have states too
console.log(castle)
  useEffect(() => {
    dispatch(detailsCastle(castleId)); // listCastle=castleAction
  }, [dispatch, castleId]);

  if (!castle) {
    return  <MessageBox variant="danger">Castle Not Found</MessageBox>;
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
