import React from 'react';

const Population = (props) => {
    const countries = props.selectCountry;
    // console.log(population);
    // let totalPopulation = 0;
    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     totalPopulation = totalPopulation + country.population;
    // }
    const totalPopulation = countries.reduce((total, country)=> total + country.population , 0)
    return (
        <div>
            <h2>Total Population:{totalPopulation}</h2>
        </div>
    );
};

export default Population;