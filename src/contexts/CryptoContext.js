import React, { useContext, useState, useEffect, createContext } from 'react';
import { CoinList } from '../config/api';
import axios from 'axios';

const Crypto = createContext();

const CryptoContext = ({ children }) => {
  const [currency, setCurrency] = useState('USD');
  const [symbol, setSymbol] = useState('$');
  const [coinList, setCoinList] = useState([]);

  useEffect(() => {
    if (currency === 'USD') setSymbol('$');
    else if (currency === 'THB') setSymbol('฿');
  }, [currency]);

  const fetchCoinList = async () => {
    const { data } = await axios.get(CoinList(currency));
    setCoinList(data);
  };

  useEffect(() => {
    fetchCoinList();
  }, []);

  const matchCryptoName = (coinName) => {
    return coinList.find(
      (coin) => coin.symbol.toLowerCase() === coinName.toLowerCase()
    );
  };

  return (
    <Crypto.Provider
      value={{ currency, setCurrency, symbol, matchCryptoName, coinList }}
    >
      {children}
    </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
