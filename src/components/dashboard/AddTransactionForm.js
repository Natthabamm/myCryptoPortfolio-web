import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { CryptoState } from '../../contexts/CryptoContext';
import { TransactionState } from '../../contexts/TransactionContext';
import '../../styles/dashboard/AddTransactionForm.scss';

const AddTransactionForm = ({ onClose }) => {
  const { coinList } = CryptoState();
  const { fetchAlltransactions } = TransactionState();

  const [transactionType, setTransactionType] = useState('BUY');
  const [coinName, setCoinName] = useState();
  const [quanity, setQuanity] = useState();
  const [pricePerCoin, setPricePerCoin] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [totalSpent, setTotalSpent] = useState();
  const [currencies, setCurrencies] = useState('USD');

  const createTransaction = async () => {
    console.log(
      transactionType,
      coinName,
      quanity,
      pricePerCoin,
      date,
      time,
      totalSpent,
      currencies
    );
    try {
      const res = await axios.post('/transactions', {
        transactionType,
        coinName,
        quanity,
        pricePerCoin,
        date,
        time,
        totalSpent,
        currencies,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreateTransaction = async (e) => {
    createTransaction();
    await fetchAlltransactions();
    onClose();
  };

  useEffect(() => {
    setTotalSpent(quanity * pricePerCoin);
  }, [quanity, pricePerCoin]);

  return (
    <>
      <form className='add-transaction-form'>
        <div className='container'>
          <div className='tabs'>
            <input
              type='radio'
              id='radio-1'
              name='tabs'
              value={'BUY'}
              checked={transactionType === 'BUY'}
              onClick={(e) => setTransactionType('BUY')}
            />
            <label className='tab' for='radio-1'>
              Buy
            </label>
            <input
              type='radio'
              id='radio-2'
              name='tabs'
              value={'SELL'}
              checked={transactionType === 'SELL'}
              onClick={(e) => setTransactionType('SELL')}
            />
            <label className='tab' for='radio-2'>
              Sell
            </label>
            <span className='gilder'></span>
          </div>
        </div>
        <div className='select-coin'>
          <select
            className='select-style'
            value={coinName}
            onChange={(e) => setCoinName(e.target.value)}
          >
            {coinList.map((coin) => (
              <option value={coin.symbol.toUpperCase()}>
                {coin.name}
                {'  '}
                {coin.symbol.toUpperCase()}
              </option>
            ))}
          </select>
          <div className='input-grup'>
            <div className='quanity-price-group'>
              <div className='upper-quanity-price'>
                <span className='quanity-name'>Quanity</span>
                <input
                  className='quanity-input'
                  type='number'
                  placeholder='0.00'
                  value={quanity}
                  onChange={(e) => setQuanity(e.target.value)}
                />
              </div>
              <div className='lower-quanity-price'>
                <span className='pricepercoin-name'>Price per Coin</span>
                <input
                  className='pricepercoin-input'
                  type='number'
                  placeholder='0'
                  value={pricePerCoin}
                  onChange={(e) => setPricePerCoin(e.target.value)}
                ></input>
              </div>
            </div>
            <div className='datetime-group'>
              <div className='upper-datetime-group'>
                <span className='date-name'>Date</span>
                <input
                  className='date-input'
                  type='date'
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className='lower-datetime-group'>
                <span className='time-name'>Time</span>
                <input
                  className='time-input'
                  type='time'
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
            </div>
            <div className='totalspent-group'>
              <div>
                <span className='totalspent-name'>Total Spent</span>
                <input
                  className='totalspent-input'
                  placeholder='$0'
                  type='number'
                  value={quanity * pricePerCoin}
                  onChange={(e) => setTotalSpent(e.target.value)}
                />
              </div>
              <select
                className='cur-totalspent'
                value={currencies}
                onChange={(e) => setCurrencies(e.target.value)}
              >
                <option value='USD'>USD</option>
                <option value='THB'>THB</option>
              </select>
            </div>
          </div>
        </div>
        <button
          className='add-transaction-btn'
          onClick={handleCreateTransaction}
        >
          Add Transaction
        </button>
      </form>
    </>
  );
};

export default AddTransactionForm;
