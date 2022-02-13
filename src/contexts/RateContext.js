import React,{ useContext, useEffect, useState, createContext } from 'react';
import { LatesRateCurrencies } from '../config/api';
import axios from 'axios';
import { CryptoState } from './CryptoContext';

const Rate = createContext();

const RateContext = ({ children }) => {
    const [rate, setRate] = useState(32);
    const { currency } = CryptoState();

     const fetchLatesRateCurrencies = async () => {
        const { data } = await axios.get(LatesRateCurrencies());
        const result = data.data.THB
        if (currency === 'THB') setRate(result);
      };

      useEffect(() => {
        fetchLatesRateCurrencies();
      }, [currency]);
      

  return (
    <Rate.Provider value={{ rate, setRate }}>
        {children}
    </Rate.Provider>
  )
};

export default RateContext;

export const RateState = () => {
    return useContext(Rate);
};
