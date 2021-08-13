import React, { useEffect, useState } from 'react';
import { ReactBingmaps } from 'react-bingmaps';

const initialPolygons = [
  {
    center: null,
    rings: [],
    radius: 2,
    points: 1,
    option: { fillColor: 'green', strokeThickness: 10 },
  },
];

const Map = ({ cordsArray }) => {
  const [polygons, setPolygons] = useState(initialPolygons);

  useEffect(() => {
    const newPolygons = [...polygons];
    newPolygons[0].center = cordsArray[0];
    newPolygons[0].rings = cordsArray;
    newPolygons[0].points = cordsArray.length;
    setPolygons(newPolygons);
  }, [cordsArray]);

  console.log(polygons);

  return (
    <ReactBingmaps
      bingmapKey="AvCpn-x7HKXnqWiC2ztT0NXyt3lvIHhVSc0i71XfLgGStlXkz-4ox_wSKa6N09VY"
      center={[13.0827, 80.2707]}
      regularPolygons={polygons}
    />
  );
};

export default Map;
