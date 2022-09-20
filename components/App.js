import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header.jsx';
import Nav from './Nav';
import UnitGroupList from './UnitGroupList.jsx';
import Currency from './Currency.jsx';
import { useState, useEffect } from 'react';
import UnitPick from './UnitPick.jsx';
import LengthConversions from './conversion_modules/LengthConversions.jsx.js';
import TempConversions from './conversion_modules/TempConversions.jsx.js';
import WeightConversions from './conversion_modules/WeightConversions.jsx.js';
import TimeConversions from './conversion_modules/TimeConversions.jsx.js';
import SYMBOLS from './data/SYMBOLS.json'
import UNITS from './data/UNITS';
import './App.scss';

function App({ logo }) {

  const [unitGroup, setUnitGroup] = useState('Length');
  const [unitGroupList, setUnitGroupList] = useState(UNITS);
  const [pickedConversion, setPickedConversion] = useState('Meter');
  const [pickedValue, setPickedValue] = useState('');
  const [currencies, setCurrencies] = useState(SYMBOLS.symbols);
  const [currencyFrom, setCurrencyFrom] = useState('AED');
  const [currencyTo, setCurrencyTo] = useState('AED');
  const [currencyValue, setCurrencyValue] = useState(1);
  const [currencyConvertedResult, setCurrencyConvertedResult] = useState('1');

  useEffect(() => {
    const state = JSON.parse(localStorage.getItem("userState"));
    setUnitGroup(state)
  }, [])

  useEffect(() => {
    localStorage.setItem("userState", JSON.stringify(unitGroup));
  }, [unitGroup])

  useEffect(() => {
    var requestURL = (`https://api.exchangerate.host/convert?from=${currencyFrom}&to=${currencyTo}&amount=${currencyValue}`);
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function () {
      var response = request.response;
      console.log(response.result);
      setCurrencyConvertedResult(response.result);
    }
  }, [currencyFrom, currencyTo, currencyValue])

  const handleValueChange = (value) => {
    setPickedValue(value);
  }

  const handleConversionChange = (conversion) => {
    setPickedConversion(conversion)
  }

  const calculateConversion = (conversion) => {
    var result = '';
    const switchF = (unitGroup) => (unitGroupSelector[unitGroup](conversion) || unitGroupSelector['default'](conversion));

    var unitGroupSelector = {
      'Length': (conversion) => LengthConversions(pickedConversion, conversion, pickedValue),
      'Temperature': (conversion) => TempConversions(pickedConversion, conversion, pickedValue),
      'Weight': (conversion) => WeightConversions(pickedConversion, conversion, pickedValue),
      'Time': (conversion) => TimeConversions(pickedConversion, conversion, pickedValue),
      'default': () => { }
    };

    try {
      result = switchF(unitGroup);
    } catch (error) {
      console.log(error);
      <Navigate to={process.env.PUBLIC_URL + "/units"} replace={true} />
    }

    return result;
  }

  return (
    <div className="App">
      <Header title="Easy-Convert" logo={logo} />
      <Nav />
      <Routes>
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
      </Routes>
    </div>
  );
}

export default App;
