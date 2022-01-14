import React, { useEffect } from "react";
import Castle from "../components/Castle";
import { LoadingBox } from "../components/LoadingBox";
import { MessageBox } from "../components/MessageBox";
import { useDispatch, useSelector } from "react-redux";
import { listCastles } from "../actions/castleActions";
import MapMain from "../components/MapMain";
import MyCarousel from "../components/MyCarousel";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const castleList = useSelector((state) => state.castleList);
  const { loading, error, castles } = castleList;
  useEffect(() => {
    dispatch(listCastles()); // listCastle=castleAction
  }, [dispatch]);
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <div className="row center">            
              <MyCarousel className="carousel"/>          
            {castles.map((castle) => (
              <Castle key={castle._id} castle={castle}>
                {" "}
              </Castle>
              //key repeats ? in Components/Castle.js has Key too
            ))}
          </div>
          <div className="mapmainContainer">
            <MapMain castles={castles} />
          </div>
        </>
      )}
    </div>
  );
};

export default HomeScreen;
