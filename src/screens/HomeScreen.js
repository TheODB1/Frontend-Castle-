import React, { useState, useEffect } from "react";
import Castle from "../components/Castle";
import { LoadingBox } from "../components/LoadingBox";
import { MessageBox } from "../components/MessageBox";
import MapMain from "../components/MapMain";
import MyCarousel from "../components/MyCarousel";

const HomeScreen = () => {
  const [castles, setCastles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCastles = async () => {
      try {
        setLoading(true)
        const res = await fetch("http://localhost:5000/api/castles");
        const data = await res.json();
        setCastles(data);
        setLoading(false)
      } catch (error) {
        setError(error.message);
        setLoading(false)
      }
    };
    getCastles();
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <div className="row center">
            <MyCarousel className="carousel" />
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
