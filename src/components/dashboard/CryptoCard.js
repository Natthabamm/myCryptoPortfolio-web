import React, { useState, useEffect } from "react";
import "../../styles/dashboard/CryptoCard.css";
import btc from "../../pics/crypto/btc.png";
import { CryptoState } from "../../contexts/CryptoContext";
import axios from "axios";
import { TrendingCoins } from "../../config/api";
import { numWithCommas } from "../../services/numberWithCommas";

const CryptoCard = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));

    const result = data.splice(0, 5);
    console.log(result);
    setTrending(result);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, currency);

  return (
    <>
      {trending.map((coin, index) => {
        return (
          <div className='ranking'>
            #{index+1}
            <div className='crypto-card'>
              <div className='all-layout-card'>
                <div className='upper-inside-card'>
                  <div className='left-inside-card'>
                    <img src={coin.image} alt='' width={35} height={35} />
                  </div>
                  <div className='center-inside-card'>
                    {coin.symbol.toUpperCase()}
                    <div className='center-inside-card-name'>{coin.name}</div>
                  </div>
                  <div className={`reight-inside-card-${coin.price_change_percentage_24h < 0 ? "negative" : "positive"}`}>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                </div>
                <div className='lower-crypto-card'>${coin.current_price}</div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CryptoCard;
