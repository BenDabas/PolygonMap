import React, { useState } from 'react';

import Map from '../Map/map';
import CoordinatesSearch from '../CoordinatesSearch/coordinatesSearch';

import './polygonMap.css';

const PolygonMap = () => {
  const [cordsArray, setCordsArray] = useState([]);

  const handleCordsSearch = (cords) => {
    const newCordsArray = [...cordsArray];
    newCordsArray.push([Number(cords.latitude), Number(cords.longitude)]);
    setCordsArray(newCordsArray);
  };

  return (
    <div className="wrapper">
      <div className="coordinates-search-wrapper">
        <CoordinatesSearch handleCordsSearch={handleCordsSearch} />
      </div>
      <div className="map-wrapper">
        <Map cordsArray={cordsArray} />
      </div>
    </div>
  );
};

export default PolygonMap;
