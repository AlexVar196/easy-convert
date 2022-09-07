import Footer from './Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import Nav from './Nav';
import UnitList from './UnitList.jsx';
import Currency from './Currency.jsx';
import { useState } from 'react';
import UnitPick from './UnitPick.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import ConversionComputation from './ConversionComputation.jsx';
// import { format } from 'date-fns';

function App() {

  const [unitList, setUnitList] = useState([
    {
      unitName: "Length",
      conversions: ['Meter', 'Kilometer', 'Centimeter', 'something', 'something2', 'something3']
    },
    {
      unitName: "Length2",
      conversions: ['Meter', 'Kilometer', 'Centimeter']
    },
    {
      unitName: "Length3",
      conversions: ['Meter', 'Kilometer', 'Centimeter']
    },
    {
      unitName: "Temperature",
      conversions: ['Celcius', 'Kelvin', 'Fahrenheit']
    },
    {
      unitName: "Weight1",
      conversions: ['Kilogram', 'Gram', 'Miligram']
    },
    {
      unitName: "Weight2",
      conversions: ['Kilogram', 'Gram', 'Miligram']
    },
    {
      unitName: "Weight3",
      conversions: ['Kilogram', 'Gram', 'Miligram']
    }
  ]);

  const [pickedConversion, setPickedConversion] = useState('');
  const [pickedValue, setPickedValue] = useState('0');

  const handleValueChange = (value) => {
    setPickedValue(value);

  }

  const handleConversionChange = (conversion) => {
    setPickedConversion(conversion)

  }

  const calculateConversion = (conversion) => {
    console.log(`from: ${conversion} to: ${pickedConversion}  value: ${pickedValue}`)
    let x = ConversionComputation(conversion, pickedConversion, pickedValue);
    return x;
  }


  return (
    <div className="App">
      <Header title="Easyconvert" />
      <Nav />
      <Routes>
        <Route index element={<UnitList unitList={unitList} />}></Route>
        <Route path='/Currency' element={<Currency />}></Route>
        <Route path="/Unit/:unitName"
          element={<UnitPick
            unitList={unitList}
            value={pickedValue}
            handleValueChange={handleValueChange}
            handleConversionChange={handleConversionChange}
            calculateConversion={calculateConversion}
            pickedConversion={pickedConversion}
          />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
