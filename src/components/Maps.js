import { Map, Marker } from "pigeon-maps";

const Maps = ({ lat, lon }) => {
  const latToNumber = Number.parseFloat(lat);
  const lonToNumber = Number.parseFloat(lon);
  return (
    <>
      <div className="mapContainer">
        <Map
          height={300}
          defaultCenter={[latToNumber, lonToNumber]}
          defaultZoom={11}
        >
          <Marker width={50} anchor={[latToNumber, lonToNumber]} />
        </Map>
      </div>
    </>
  );
};

export default Maps;
