import logo from './SunImage.png';
import './App.css';
import React, { useState } from 'react';
import { validCountries } from './validCountries';
import CountryInserts from './components/CountryInserts';
import { writeAll, readAll} from './localStorage';

function App() {
  const [countryModified, setCountryModified] = useState('');
  const [countryTemp, setCountryTemp] = useState('');
  const [countryList, setCountryList] = useState(readAll()); //CRUD: Read
  const [YouAR, setar] = useState('');
  const handleCountryDelete = countryToRemove => {
    let countryListRemoved = [];
    for (let i = 0; i < countryList.length; i++) {
      if (countryList[i].name !== countryToRemove) {
        countryListRemoved.push(countryList[i]);
      };
    };
    setCountryList(countryListRemoved); //CRUD: Delete
    writeAll(countryListRemoved);
    setCountryModified(countryToRemove);
    setar('You removed');
  };
  const handleCountrySave = (countryToSave, countryNotes, countryLink1, countryLink2, countryLink3) => {
    for (let i = 0; i < countryList.length; i++) {
      if (countryList[i].name === countryToSave) {
        countryList[i].notes = countryNotes;
        countryList[i].link1 = countryLink1;
        countryList[i].link2 = countryLink2;
        countryList[i].link3 = countryLink3; // CRUD: Update
      };
    };
    writeAll(countryList);
    setCountryModified(countryToSave);
    setar('You saved');
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
                value={countryTemp}
                onChange={event => setCountryTemp(event.target.value)}
              />
              <datalist id="validCountries">
                {validCountries.map(x => <option value={x} />)}
              </datalist>
              <button onClick={() => {
                if (validCountries.includes(countryTemp)) {
                  setar('You added');
                  setCountryModified(countryTemp);
                  const updatedCountryList = [...new Set([...countryList, { name: countryTemp }])];
                  setCountryList(updatedCountryList); //CRUD: Create
                  writeAll(updatedCountryList); //Have to do this because setCountryList won't update countryList until next render
                };
              }
              }>
                Add Country
              </button>
            </div>
            <p>
              Looking for Inspiration? Check out the links below:
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
            <p>
              Remember to save your modifications!
            </p>
            <p>{YouAR} {countryModified}</p>
          </div>
        </div>
      </div>
      <div className="background-second"> {/*className needs to have a captial N!!*/}
        <div className="App-content2">
          <p>{YouAR} {countryModified}</p>
          <div className="container-fluid">
            {countryList.map(country => <CountryInserts
              key={country.name} //To highlight to React what's changed if anything for the DOM
              country={country}
              handleCountryDelete={handleCountryDelete}
              handleCountrySave={handleCountrySave} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
