import { Map, Marker, Overlay } from "pigeon-maps";
import { useState } from "react";

const MapMain = ({ castles }) => {
  const [hue, setHue] = useState(0);
  const [center, setCenter] = useState([50.110924, 8.682127]);
  const [zoom, setZoom] = useState(6.5);
  const color = `hsl(${hue % 360}deg 39% 70%)`;
  return (
    <div className="mapContainer">
      <Map
        height={500}
        center={center}
        zoom={zoom}
        onBoundsChanged={({ center, zoom }) => {
          setCenter(center);
          setZoom(zoom);
        }}
      >
        <Overlay anchor={[50.879, 4.6997]}  offset={[210, 189]}>
          <img
            src="/images/castles-get-married-germany.jpg"
            width={130}
            height={100}
            alt=""
          />
        </Overlay>
        {castles.map(({ lat, lon }, index, image, name, _id) => {
          const latToNumber = Number.parseFloat(lat);
          const lonToNumber = Number.parseFloat(lon);
          return (
            <Marker
              width={50}
              anchor={[latToNumber, lonToNumber]}
              key={_id}
              tag={name}
              color={color}
              onClick={() => setHue(hue + 20)}
            />
          );
        })}
      </Map>
    </div>
  );
};

export default MapMain;
