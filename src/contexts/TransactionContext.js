import React, { createContext, useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { CryptoState } from './CryptoContext';

const Transaction = createContext();

const TransactionContextProvider = ({ children }) => {
  const [transaction, setTransaction] = useState([]);
  const [transactionGroup, setTransactionGroup] = useState([]);
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

  useEffect(() => {
    if (!transaction) return;
    const cloneTransaction = JSON.parse(JSON.stringify(transaction));
    const tempTransaction = cloneTransaction.reduce((acc, cur) => {
      if (!coinList) return;
      if (acc[cur.coinName]) {
        acc[cur.coinName].quanity =
          Number(acc[cur.coinName].quanity) + Number(cur.quanity);
        acc[cur.coinName].totalSpent =
          Number(acc[cur.coinName].totalSpent) + Number(cur.totalSpent);
        acc[cur.coinName].avgBuy =
          (Number(acc[cur.coinName].avgBuy) + Number(cur.pricePerCoin)) / 2;
        return acc;
      }
      acc[cur.coinName] = cur;
      acc[cur.coinName].avgBuy = Number(cur.pricePerCoin);
      return acc;
    }, {});

    const groupTransaction = Object.keys(tempTransaction)
      .map(function (key) {
        return tempTransaction[key];
      })
      .map((data) => {
        const { current_price } = matchCryptoName(data.coinName);
        const profit =
          Number(data.quanity) * Number(current_price) -
          Number(data.totalSpent);
        const profitPercent = parseFloat(
          (Number(profit) / Number(data.totalSpent)) * 100
        ).toFixed(2);
        return {
          ...data,
          profit,
          profitPercent,
        };
      });
    setTransactionGroup(groupTransaction);
  }, [transaction]);

  return (
    <Transaction.Provider
      value={{ transaction, fetchAlltransactions, transactionGroup }}
    >
      {children}
    </Transaction.Provider>
  );
};

export default TransactionContextProvider;

export const TransactionState = () => {
  return useContext(Transaction);
};
