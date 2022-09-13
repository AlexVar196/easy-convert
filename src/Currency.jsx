import React from 'react'


const arrayz = [];

const Currency = ({
  currencies,
  currencyFrom,
  setcurrencyFrom,
  currencyTo,
  setCurrencyTo,
  currencyValue,
  setCurrencyValue
}) => {
  return (
    <div className='currencyContainer'>
      <div className='labelContainer'>
        <label htmlFor='currencyFrom'>From:</label>
        <select name="currencyFrom" id="currencyFrom">
          {Object.keys(currencies).map((symbol) => (
            <option key={symbol} value={symbol}>{symbol} - {currencies[`${symbol}`].description}</option>
          ))}
        </select>
      </div>
      <div className='labelContainer'>
        <label htmlFor='currencyTo'>To:</label>
        <select name="currencyTo" id="currencyTo">
          {Object.keys(currencies).map((symbol) => (
            <option key={symbol} value={symbol}>{symbol} - {currencies[`${symbol}`].description}</option>
          ))}
        </select>
      </div>

      <div className={'valueInputContainer'}>

        <form onSubmit={(e) => e.preventDefault}>
          <input
            id="pickedCurrencyValue"
            type="number"
            placeholder="Input Amount"
            value={currencyValue}
            onChange={(e) => { setCurrencyValue(e.target.value) }}
          />
        </form>
      </div>
    </div >
  )
}

export default Currency