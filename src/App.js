import Footer from './Footer.jsx';
import { Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import Nav from './Nav';
import UnitGroupList from './UnitGroupList.jsx';
import Currency from './Currency.jsx';
import { useState } from 'react';
import UnitPick from './UnitPick.jsx';
import NotFoundPage from './NotFoundPage.jsx';
import LengthConversions from './LengthConversions.jsx';
import TempConversions from './TempConversions.jsx';
import WeightConversions from './WeightConversions.jsx';
// import { format } from 'date-fns';
import UNITS from './UNITS';

function App() {

  const [unitGroup, setUnitGroup] = useState('Length');
  const [unitGroupList, setUnitGroupList] = useState(UNITS);
  const [pickedConversion, setPickedConversion] = useState('Meter');
  const [pickedValue, setPickedValue] = useState('');

  const handleValueChange = (value) => {
    setPickedValue(value);
  }

  const handleConversionChange = (conversion) => {
    setPickedConversion(conversion)
  }

  const calculateConversion = (conversion) => {
    var result = '';
    const switchF = (unitGroup) => (unitGroupSelector[unitGroup](conversion) || unitGroupSelector['Length'](conversion));

    var unitGroupSelector = {
      'Length': (conversion) => LengthConversions(pickedConversion, conversion, pickedValue),
      'Temperature': (conversion) => TempConversions(pickedConversion, conversion, pickedValue),
      'Weight': (conversion) => WeightConversions(pickedConversion, conversion, pickedValue)
    };

    try {
      result = switchF(unitGroup);
    } catch (error) {
      console.log(error);
    }

    return result;
  }




  return (
    <div className="App">
      <Header title="Easyconvert" />
      <Nav />
      <Routes>
        <Route index element={<UnitGroupList unitGroupList={unitGroupList} setUnitGroup={setUnitGroup} />}></Route>
        <Route path='/Currency' element={<Currency />}></Route>
        <Route path="/Unit/:unitGroup"
          element={<UnitPick
            unitGroupList={unitGroupList}
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
