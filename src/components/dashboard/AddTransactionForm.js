import React from 'react';
import "../../styles/dashboard/AddTransactionForm.scss";
// import btc from '../../pics/crypto/btc.png';

const AddTransactionForm = () => {
  return (
      <>
        <form >
            <div className='container'>
              <div className='tabs'>
                <input type="radio" id="radio-1" name='tabs' checked />
                <label className='tab' for="radio-1">Buy</label>
                <input type="radio" id="radio-2" name='tabs' />
                <label className='tab' for="radio-2">Sell</label>
                <span className='gilder'></span>
              </div>
            </div>
            <div className='select-coin'>
              
            </div>
        </form>
      </>
  );
};

export default AddTransactionForm;
