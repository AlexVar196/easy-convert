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
    handleCurrencyInfoChange();
  }, [currencyFrom, currencyTo, currencyValue]);

  const handleCurrencyInfoChange = () => {
    var requestURL = `https://api.exchangerate.host/convert?from=${currencyFrom}&to=${currencyTo}&amount=${currencyValue}`;
    var request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();

    request.onload = function () {
      var response = request.response;
      console.log(response.result);
      setCurrencyConvertedResult(response.result);
    };
  };

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
      <Navigate to="/" replace={true} />;
    }

    return result;
  };

  return (
    <div className="App">
      <Header title="Easy-Convert" />
      <Nav />
      <Routes>
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
      </Routes>
    </div>
  );
}

export default App;
