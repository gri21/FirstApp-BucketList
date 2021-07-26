import React, { useState } from 'react';

// const a = myObj.a;
// const { a } = myObj;
const CountryInserts = ({ country, handleCountryDelete, handleCountrySave }) => {
  const [countryNotes, setNotes] = useState(country.notes);
  const [countryLink1, setLink1] = useState(country.link1);
  const [countryLink2, setLink2] = useState(country.link2);
  const [countryLink3, setLink3] = useState(country.link3);
  return (
    <div className="row dynamic-sections align-items-center">
      <div className="col-sm-1">
        <button
          className="btn btn-danger remove-country"
          type="button"
          onClick={() => handleCountryDelete(country.name)}
        >
          X
        </button>
      </div>
      <div className="col-sm-2">
        <div>
          {country.name}
        </div>
      </div>
      <div className="col-sm">
        <textarea
          name="Notes"
          placeholder="Notes"
          value={countryNotes}
          onChange={event => setNotes(event.target.value)}
          // cols="30"
          spellCheck="true"
        >
        </textarea>
      </div>
      <div className="col-sm">
        <input
          type="text"
          name="Useful link 1"
          placeholder="Useful link"
          value={countryLink1}
          onChange={event => setLink1(event.target.value)}
        />
        <input
          type="text"
          name="Useful link 2"
          placeholder="Useful link"
          value={countryLink2}
          onChange={event => setLink2(event.target.value)}
        />
        <input
          type="text"
          name="Useful link 3"
          placeholder="Useful link"
          value={countryLink3}
          onChange={event => setLink3(event.target.value)}
        />
      </div>
      <div className="col-sm-1">
        <div
          className="btn btn-info save-country"
          type="button"
          onClick={() => handleCountrySave(country.name, countryNotes, countryLink1, countryLink2, countryLink3)}
        >
          Save
        </div>
      </div>
    </div>
  )
};

export default CountryInserts;