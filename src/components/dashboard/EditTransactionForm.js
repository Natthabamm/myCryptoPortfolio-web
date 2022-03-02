import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/dashboard/EditTransactionForm.css';
import { TransactionState } from '../../contexts/TransactionContext';
import { CryptoState } from '../../contexts/CryptoContext';

const EditTransactionForm = ({ item, handleOpenEditModal }) => {
  const [quanity, setQuanity] = useState(item.quanity);
  const [pricePerCoin, setPricePerCoin] = useState(item.pricePerCoin);
  const [date, setDate] = useState(item.date);
  const [time, setTime] = useState(item.time);
  const [totalSpent, setTotalSpent] = useState(item.totalSpent);

  const { fetchAlltransactions } = TransactionState();
  const { symbol } = CryptoState();

  console.log(item);

  const editTransactionById = async (id) => {
    try {
      const res = await axios.patch('/transactions/' + id, {
        quanity,
        pricePerCoin,
        date,
        time,
        totalSpent,
      });
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEditedTransaction = async () => {
    await editTransactionById(item.id);
    await fetchAlltransactions();
    handleOpenEditModal();
  };
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
                value={quanity}
                onChange={(e) => setQuanity(e.target.value)}
              />
            </div>
            <div className='lower-quanity-price-edit'>
              <span className='pricepercoin-name-edit'>Price per Coin</span>
              <input
                className='pricepercoin-input-edit'
                type='number'
                placeholder={`${symbol}0`}
                value={pricePerCoin}
                onChange={(e) => setPricePerCoin(e.target.value)}
              ></input>
            </div>
          </div>
          <div className='datetime-group-edit'>
            <div className='upper-datetime-group-edit'>
              <span className='date-name-edit'>Date</span>
              <input
                className='date-input-edit'
                type='date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className='lower-datetime-group-edit'>
              <span className='time-name-edit'>Time</span>
              <input
                className='time-input-edit'
                type='time'
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
          </div>
          <div className='totalspent-group-edit'>
            <span className='totalspent-name-edit'>Total Spent</span>
            <input
              className='totalspent-input-edit'
              placeholder={`${symbol}0`}
              type='number'
              value={pricePerCoin * quanity}
              onChange={(e) => setTotalSpent(e.target.value)}
            />
          </div>
        </div>
        <button className='add-transaction-btn-edit' type='submit' onClick={handleEditedTransaction}>
          Add Transaction
        </button>
      </from>
    </>
  );
};

export default EditTransactionForm;
