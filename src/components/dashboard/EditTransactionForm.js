import React from "react";
import '../../styles/dashboard/EditTransactionForm.css';

const EditTransactionForm = () => {
  return (
    <>
      <from>
        <div className='input-group-edit'>
          <div className='quanity-price-group-edit'>
            <div className='upper-quanity-price-edit'>
              <span className='quanity-name-edit'>Quanity</span>
              <input
                className='quanity-input-edit'
                type='number'
                placeholder='0.00'
              />
            </div>
            <div className='lower-quanity-price-edit'>
              <span className='pricepercoin-name-edit'>Price per Coin</span>
              <input
                className='pricepercoin-input-edit'
                type='text'
                placeholder='$0'
              ></input>
            </div>
          </div>
          <div className='datetime-group-edit'>
            <div className='upper-datetime-group-edit'>
              <span className='date-name-edit'>Date</span>
              <input className='date-input-edit' type='date' />
            </div>
            <div className='lower-datetime-group-edit'>
              <span className='time-name-edit'>Time</span>
              <input className='time-input-edit' type='time' />
            </div>
          </div>
          <div className='totalspent-group-edit'>
            <span className='totalspent-name-edit'>Total Spent</span>
            <input className='totalspent-input-edit' placeholder='$0' type='text' />
          </div>
        </div>
        <button className='add-transaction-btn-edit' type='submit'>
          Add Transaction
        </button>
      </from>
    </>
  );
};

export default EditTransactionForm;
