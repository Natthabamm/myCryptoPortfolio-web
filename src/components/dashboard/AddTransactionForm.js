import React from 'react';
import "../../styles/dashboard/AddTransactionForm.css"

const AddTransactionForm = () => {
  return (
      <>
        <form >
            <select for="select coin" id="coin">
              <option value="btc">BTC</option>
              <option value="dot">DOT</option>
              <option value="bnb">BNB</option>
            </select>
        </form>
      </>
  );
};

export default AddTransactionForm;
