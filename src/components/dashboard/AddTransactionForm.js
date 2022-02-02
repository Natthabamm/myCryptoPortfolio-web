import React from "react";
import "../../styles/dashboard/AddTransactionForm.scss";
// import btc from '../../pics/crypto/btc.png';

const AddTransactionForm = () => {
  return (
    <>
      <form className='add-transaction-form'>
        <div className='container'>
          <div className='tabs'>
            <input type='radio' id='radio-1' name='tabs' checked />
            <label className='tab' for='radio-1'>
              Buy
            </label>
            <input type='radio' id='radio-2' name='tabs' />
            <label className='tab' for='radio-2'>
              Sell
            </label>
            <span className='gilder'></span>
          </div>
        </div>
        <div className='select-coin'>
          <input className="coin-name" type="search" placeholder="Coin name"/>
          <div className='input-grup'>
            <div className='quanity-price-group'>
              <div className='upper-quanity-price'>
                <span className='quanity-name'>Quanity</span>
                <input
                  className='quanity-input'
                  type='number'
                  placeholder='0.00'
                />
              </div>
              <div className='lower-quanity-price'>
                <span className='pricepercoin-name'>Price per Coin</span>
                <input className='pricepercoin-input' type='text' placeholder="$0"></input>
              </div>
            </div>
            <div className='datetime-group'>
              <div className='upper-datetime-group'>
                <span className='date-name'>Date</span>
                <input className='date-input' type='date' />
              </div>
              <div className='lower-datetime-group'>
                <span className='time-name'>Time</span>
                <input className='time-input' type='time' />
              </div>
            </div>
            <div className='totalspent-group'>
              <span className='totalspent-name'>Total Spent</span>
              <input
                className='totalspent-input'
                placeholder='$0'
                type='text'
              />
            </div>
          </div>
        </div>
        <button className="add-transaction-btn" type="submit">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransactionForm;
