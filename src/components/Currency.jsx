import React from 'react';
import './Currency.scss';

const Currency = ({
  currencies,
  currencyFrom,
  setCurrencyFrom,
  currencyTo,
  setCurrencyTo,
  currencyValue,
  setCurrencyValue,
  currencyConvertedResult
}) => {
  return (
    <div className='currencyContainer'>
      <div className='labelContainer'>
        <label htmlFor='currencyFrom'>From:</label>
        <select name="currencyFrom" id="currencyFrom" onChange={(e)=> {setCurrencyFrom(e.target.value)}}>
          {Object.keys(currencies).map((symbol) => (
            <option key={symbol} value={symbol}>{symbol} - {currencies[`${symbol}`].description}</option>
          ))}
        </select>
      </div>

      <div className='labelContainer'>
        <label htmlFor='currencyTo'>To:</label>
        <select name="currencyTo" id="currencyTo" onChange={(e)=> {setCurrencyTo(e.target.value)}}>
          {Object.keys(currencies).map((symbol) => (
            <option key={symbol} value={symbol}>{symbol} - {currencies[`${symbol}`].description}</option>
          ))}
        </select>
      </div>

      <div className='labelContainer'>
        <label htmlFor='pickedCurrencyValue'>Amount:</label>
        <form onSubmit={(e) => e.preventDefault}>
          <input
            className='input-field'
            id="pickedCurrencyValue"
            type="number"
            placeholder="Input Amount"
            value={currencyValue}
            onChange={(e) => { setCurrencyValue(e.target.value) }}
          />
        </form>
      </div>
      
      <div className='output-text-container'>
        <span className='output-text'> {currencyValue} {currencyFrom} </span>
        <span className='output-text-p'> equals to </span>
        <span className='output-text'> {currencyConvertedResult} {currencyTo} </span>
      </div>
    </div >
  )
}

export default Currency