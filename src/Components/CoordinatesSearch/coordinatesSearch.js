import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import { Button, TextField } from '@material-ui/core';

import './coordinatesSearch.css';

const defaultCords = { latitude: '', longitude: '' };

const CoordinatesSearch = ({ handleCordsSearch }) => {
  const [searchOption, setSearchOption] = useState('cords');
  const [cords, setCords] = useState(defaultCords);

  const handleRadioGroupChange = ({ target }) => {
    setSearchOption(target.value);
  };

  const handleInputChange = ({ target }) => {
    setCords({ ...cords, [target.id]: target.value });
  };

  const handleSubmit = () => {
    if (cords.latitude && cords.longitude) {
      handleCordsSearch(cords);
      setCords(defaultCords);
    }
  };

  return (
    <div className="search-wrapper">
      <FormLabel component="legend">Coordinates Form</FormLabel>
      <RadioGroup
        aria-label="Search"
        name="Search"
        value={searchOption}
        onChange={handleRadioGroupChange}
      >
        <FormControlLabel
          value="cords"
          control={<Radio />}
          label="Add by Cords"
        />
        {/* <FormControlLabel
          value="place"
          control={<Radio />}
          label="Add by Place"
        /> future feature */}
      </RadioGroup>
      <TextField
        value={cords.latitude}
        onChange={handleInputChange}
        id="latitude"
        label="latitude"
      />
      <TextField
        value={cords.longitude}
        onChange={handleInputChange}
        id="longitude"
        label="longitude"
      />
      <div className="search-button-wrapper">
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Submit Coords
        </Button>
      </div>
    </div>
  );
};
export default CoordinatesSearch;
