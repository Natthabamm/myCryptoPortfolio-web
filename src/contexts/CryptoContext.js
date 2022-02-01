import React, {useContext, useState, useEffect, createContext } from 'react';
import axios from 'axios';

const Crypto = createContext();

const CryptoContext = ({ children }) => {
    const [currency, setCurrency] = useState('USD');
    const [symbol, setSymbol] = useState('$');

    useEffect(() => {
        if (currency === 'USD') setSymbol('$');
        else if (currency === 'THB') setSymbol('฿')
    }, [currency]);

  return (
      <Crypto.Provider value={{ currency, setCurrency, symbol }}>
          {children}
      </Crypto.Provider>
  );
};

export default CryptoContext;

export const CryptoState = () => {
    return useContext(Crypto);
};
