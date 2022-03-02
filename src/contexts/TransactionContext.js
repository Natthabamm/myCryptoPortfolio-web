import React, { createContext, useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { CryptoState } from './CryptoContext';

const Transaction = createContext();

const TransactionContextProvider = ({ children }) => {
  const [transaction, setTransaction] = useState([]);
  const { matchCryptoName, coinList } = CryptoState();


  const fetchAlltransactions = async () => {
    if (coinList.length === 0) return;
    try {
      const res = await axios.get('/transactions');
      const result = res.data.transactions.map((coin) => {
        return {
          ...coin,
          img: matchCryptoName(coin.coinName),
        };
      });
      setTransaction(result);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAlltransactions();
  }, [coinList]);

  return (
    <Transaction.Provider value={{ transaction, fetchAlltransactions }}>
      {children}
    </Transaction.Provider>
  );
};

export default TransactionContextProvider;

export const TransactionState = () => {
  return useContext(Transaction);
};
