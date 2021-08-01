import React, { useState } from 'react';
import { validCountries } from '../validCountries';

const CountrySearch = ({ addCountry }) => {
    const [countryTemp, setCountryTemp] = useState('');
    return (
        <div className="Welcome">
            <div className="same-row">
                <input className="country-search"
                    type="search"
                    name="dest"
                    placeholder="Enter Next Bucket-List Destination"
                    list="validCountriesDataList"
                    value={countryTemp}
                    onChange={event => setCountryTemp(event.target.value)}
                />
                <datalist id="validCountriesDataList">
                    {validCountries.map(x => <option value={x} />)}
                </datalist>
                <button 
                //name = 'AddCountryButton'
                onClick={() => {
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