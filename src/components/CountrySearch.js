import React, { useState } from 'react';
import { validCountries } from '../validCountries';
// import { writeAll, readAll } from '../localStorage';

// const myCountryList = 4;
// const myCountryList = myCountryList * 2;

const CountrySearch = ({ addCountry }) => {
    const [countryTemp, setCountryTemp] = useState('');
    return (
        <div className="Welcome">
            <div className="same-row">
                <input className="country-search"
                    type="search"
                    name="dest"
                    placeholder="Enter Next Bucket-List Destination"
                    list="validCountries"
                    value={countryTemp}
                    onChange={event => setCountryTemp(event.target.value)}
                />
                <datalist id="validCountries">
                    {validCountries.map(x => <option value={x} />)}
                </datalist>
                <button onClick={() => {
                    addCountry(countryTemp)
                }
                }>
                    Add Country
                </button>
            </div>
        </div>
    );
};

export default CountrySearch;