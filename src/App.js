import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Population from './components/Population/Population';

function App() {
  const [countries, setCountries] =useState([])
  const [selectCountry, setSelectCountry] = useState([])
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error))
  },[]);
  const handleAddCountry = (country) => {
        const newCountry = [...selectCountry, country];
        setSelectCountry(newCountry);
  }
  return (
    <div className="App">
      <h1>Country Loaded:{countries.length} </h1>
      <h1>Country Added:{selectCountry.length}</h1>
      <Population selectCountry={selectCountry}></Population>
      
        {
          countries.map(country => <Country handleAddCountry={handleAddCountry} country={country}></Country>)
        }

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
