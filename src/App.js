import logo from './Sun2.png';
import './App.css';
import React, { useState } from 'react';
import { validCountries } from './validCountries';

function App() {
  const [country, setCountry] = useState('');
  const [countryTemp, setCountryTemp] = useState('');
  const [countryList, setCountryList] = useState(["Sri Lanka", "UK", "France"]); //populated for testing purposes. Should be []
  const [YouAR, setar] = useState('');
  const handleCountryDelete = countryToRemove => {
    let countryListRemoved = [];
    for (let i = 0; i < countryList.length; i++) {
      if (countryList[i] !== countryToRemove) {
        countryListRemoved.push(countryList[i]);
        // debugger;
      };
    };
    setCountryList(countryListRemoved);
    setCountry(countryToRemove);
    setar('You removed');
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Bucket List - Interactive
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          <code>Built in React</code>
        </h2>
      </header>
      <div className="background-first">
        <div className="App-content">
          <div className="Welcome">
            <p>
              Welcome to my first app in React.
            </p>
            <div className="same-row">
              <input className="country-search"
                type="search"
                name="dest"
                placeholder="Enter Next Bucket-List Destination"
                list="validCountries"
                onChange={event => setCountryTemp(event.target.value)}
              />
              <datalist id="validCountries">
                {validCountries.map(x => <option value={x} />)}
              </datalist>
              <button onClick={() => {
                if (validCountries.includes(countryTemp)) {
                  setar('You added');
                  setCountry(countryTemp);
                  setCountryList([...new Set([...countryList, countryTemp])]);
                };
              }
              }>
                Add Country
              </button>
            </div>
            <p>
              No Inspiration? Have a look at the links below:
            </p>
            <a
              className="App-link"
              href="https://www.tripadvisor.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trip Advisor
            </a>
            <a
              className="App-link"
              href="https://www.lonelyplanet.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lonely Planet
            </a>
            <a
              className="App-link"
              href="https://www.gadventures.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              G Adventures
            </a>
            <p>{YouAR} {country}</p>
          </div>
        </div>
      </div>
      <div className="background-second"> {/*className needs to have a captial N!!*/}
        <div className="App-content2">
          <p>{YouAR} {country}</p>
          <div className="container">
            {countryList.map(countryName => <div className="row dynamic-sections align-items-center justify-content-center">
              <div className="col-sm-2">
                <div className="same-row">
                  <div
                    className="remove-country"
                    type="button"
                    onClick={() => handleCountryDelete(countryName)}
                  >
                    X
                  </div>
                  <div>
                    {countryName}
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <textarea
                  name="textarea"
                  placeholder="Notes"
                  rows="3"
                  spellCheck="true"
                >
                </textarea>
              </div>
              <div className="col-sm">
                <input
                  type="text"
                  placeholder="Useful link"
                />
                <input
                  type="text"
                  placeholder="Useful link"
                />
                <input
                  type="text"
                  placeholder="Useful link"
                />
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
