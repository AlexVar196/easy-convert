<<<<<<< HEAD:src/App.js
import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/header";
import Nav from "./components/nav";
import UnitGroupList from "./components/unit-group-list";
import Currency from "./components/currency";
import UnitPick from "./components/unit-pick";
import LengthConversions from "./components/length-conversions";
import TempConversions from "./utils/temp-conversions";
import WeightConversions from "./components/weight-conversions";
import TimeConversions from "./utils/time-conversions";
import SYMBOLS from "./data/symbols.json";
import UNITS from "./utils/units.js";

function App() {
  const [unitGroup, setUnitGroup] = useState("Length");
=======
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header.jsx';
import Nav from './Nav';
import UnitGroupList from './UnitGroupList.jsx';
import Currency from './Currency.jsx';
import { useState, useEffect } from 'react';
import UnitPick from './UnitPick.jsx';
import LengthConversions from '../conversion_modules/LengthConversions.jsx';
import TempConversions from '../conversion_modules/TempConversions.jsx';
import WeightConversions from '../conversion_modules/WeightConversions.jsx';
import TimeConversions from '../conversion_modules/TimeConversions.jsx';
import SYMBOLS from '../data/SYMBOLS.json'
import UNITS from '../data/UNITS';
import './App.scss';

function App({ logo }) {

  const [unitGroup, setUnitGroup] = useState('Length');
>>>>>>> 435c2134bdc50ea8d5f9c570f62ead312ac90e87:src/components/App.js
  const [unitGroupList, setUnitGroupList] = useState(UNITS);
  const [pickedConversion, setPickedConversion] = useState("Meter");
  const [pickedValue, setPickedValue] = useState("");
  const [currencies, setCurrencies] = useState(SYMBOLS.symbols);
  const [currencyFrom, setCurrencyFrom] = useState("AED");
  const [currencyTo, setCurrencyTo] = useState("AED");
  const [currencyValue, setCurrencyValue] = useState(1);
  const [currencyConvertedResult, setCurrencyConvertedResult] = useState("1");

  useEffect(() => {
    const state = JSON.parse(localStorage.getItem("userState"));
    setUnitGroup(state);
  }, []);

  useEffect(() => {
    localStorage.setItem("userState", JSON.stringify(unitGroup));
  }, [unitGroup]);

  useEffect(() => {
<<<<<<< HEAD:src/App.js
    handleCurrencyInfoChange();
  }, [currencyFrom, currencyTo, currencyValue]);

  const handleCurrencyInfoChange = () => {
    var requestURL = `https://api.exchangerate.host/convert?from=${currencyFrom}&to=${currencyTo}&amount=${currencyValue}`;
=======
    var requestURL = (`https://api.exchangerate.host/convert?from=${currencyFrom}&to=${currencyTo}&amount=${currencyValue}`);
>>>>>>> 435c2134bdc50ea8d5f9c570f62ead312ac90e87:src/components/App.js
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();

    request.onload = function () {
      var response = request.response;
      console.log(response.result);
      setCurrencyConvertedResult(response.result);
<<<<<<< HEAD:src/App.js
    };
  };
=======
    }
  }, [currencyFrom, currencyTo, currencyValue])
>>>>>>> 435c2134bdc50ea8d5f9c570f62ead312ac90e87:src/components/App.js

  const handleValueChange = value => {
    setPickedValue(value);
  };

  const handleConversionChange = conversion => {
    setPickedConversion(conversion);
  };

  const calculateConversion = conversion => {
    var result = "";
    const switchF = unitGroup =>
      unitGroupSelector[unitGroup](conversion) ||
      unitGroupSelector["default"](conversion);

    var unitGroupSelector = {
      Length: conversion =>
        LengthConversions(pickedConversion, conversion, pickedValue),
      Temperature: conversion =>
        TempConversions(pickedConversion, conversion, pickedValue),
      Weight: conversion =>
        WeightConversions(pickedConversion, conversion, pickedValue),
      Time: conversion =>
        TimeConversions(pickedConversion, conversion, pickedValue),
      default: () => {}
    };

    try {
      result = switchF(unitGroup);
    } catch (error) {
      console.log(error);
<<<<<<< HEAD:src/App.js
      <Navigate to="/" replace={true} />;
=======
      <Navigate to={process.env.PUBLIC_URL + "/units"} replace={true} />
>>>>>>> 435c2134bdc50ea8d5f9c570f62ead312ac90e87:src/components/App.js
    }

    return result;
  };

  return (
    <div className="App">
      <Header title="Easy-Convert" logo={logo} />
      <Nav />
      <Routes>
<<<<<<< HEAD:src/App.js
        <Route
          index
          element={
            <UnitGroupList
              unitGroupList={unitGroupList}
              setUnitGroup={setUnitGroup}
              setPickedValue={setPickedValue}
            />
          }
        ></Route>

        <Route
          path="/Currency"
          element={
            <Currency
              currencies={currencies}
              currencyFrom={currencyFrom}
              setCurrencyFrom={setCurrencyFrom}
              currencyTo={currencyTo}
              setCurrencyTo={setCurrencyTo}
              currencyValue={currencyValue}
              setCurrencyValue={setCurrencyValue}
              currencyConvertedResult={currencyConvertedResult}
            />
          }
        ></Route>

        <Route
          path="/Unit/:unitGroup"
          element={
            <UnitPick
              unitGroupList={unitGroupList}
              value={pickedValue}
              handleValueChange={handleValueChange}
              handleConversionChange={handleConversionChange}
              calculateConversion={calculateConversion}
              pickedConversion={pickedConversion}
            />
          }
        />

        <Route path="*" element={<Navigate to="/" replace={true} />} />
=======
        <Route index path={process.env.PUBLIC_URL + '/units'}
          element={<UnitGroupList
            unitGroupList={unitGroupList}
            setUnitGroup={setUnitGroup}
            setPickedValue={setPickedValue}
          />
          }>
        </Route>

        <Route path={process.env.PUBLIC_URL + '/Currency'} element={<Currency
          currencies={currencies}
          currencyFrom={currencyFrom}
          setCurrencyFrom={setCurrencyFrom}
          currencyTo={currencyTo}
          setCurrencyTo={setCurrencyTo}
          currencyValue={currencyValue}
          setCurrencyValue={setCurrencyValue}
          currencyConvertedResult={currencyConvertedResult}
        />}></Route>

        <Route path={process.env.PUBLIC_URL + "/units/:unitGroup"}
          element={<UnitPick
            unitGroupList={unitGroupList}
            value={pickedValue}
            handleValueChange={handleValueChange}
            handleConversionChange={handleConversionChange}
            calculateConversion={calculateConversion}
            pickedConversion={pickedConversion}
          />} />

        <Route path="*" element={<Navigate to={process.env.PUBLIC_URL + "/units"} replace={true} />} />
>>>>>>> 435c2134bdc50ea8d5f9c570f62ead312ac90e87:src/components/App.js
      </Routes>
    </div>
  );
}

export default App;
