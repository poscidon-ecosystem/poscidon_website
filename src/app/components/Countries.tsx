'use client'

import { useState } from "react";
import countries from 'i18n-iso-countries';
import enLocale from 'i18n-iso-countries/langs/en.json';

export default function Countries() {
    const [selectedCountry, setSelectedCountry] = useState("");

    countries.registerLocale(enLocale);

    const obj = countries.getNames('en', {select: "official"});
    const arr = Object.entries(obj).map(([key, value]) => {
        return {
            label: value,
            value: key
        }
    }); 

    return (
        <select
        className={`
        rounded-3xl 
        p-4
        shadow 
        ring-tropicalBlue 
        focus:rounded-3xl 
        focus:outline-none 
        focus:ring-2
        ${selectedCountry.length > 0 ? "text-black" : "text-gray-400"}
        `}
        id="countries"
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
        placeholder="Select Country..."
        >
            {arr.map(({label, value}) => (
                <>
                <option hidden>Select Country...</option>
                <option 
                    key={value} value={label}
                    >
                    {label}
                </option>
                </>
            ))}
            {/* </div> */}
        
        </select>
    );
}

// import React, { useState, useMemo } from 'react'
// import Select from 'react-select'
// import countryList from 'react-select-country-list'

// function CountrySelector() {
//     const [value, setValue] = useState('')
//     const options = useMemo(() => countryList().getData(), [])

//     const changeHandler = value => {
//         setValue(value)
//     }

//     return <select 
//     className='
//     ring-2
//     ring-tropicalBlue
//     rounded-3xl
//     '
//     options={options} value={value} onChange={changeHandler} />
// }

// export default CountrySelector