import React, { useState, useEffect } from "react";
import "../../styles/dashboard/CryptoCard.css";
import { CryptoState } from "../../contexts/CryptoContext";
import axios from "axios";
import { TrendingCoins } from "../../config/api";
import { numWithCommas } from "../../services/numWithCommas";

const CryptoCard = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));

    const result = data.splice(0, 5);
    setTrending(result);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, currency);

  return (
    <>
      {trending.map((coin, index) => {
        let profit = coin?.price_change_percentage_24h >= 0;

        return (
          <div className='ranking'>
            #{index + 1}
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
                  <div
                    className={`reight-inside-card-${
                      coin.price_change_percentage_24h < 0
                        ? "negative"
                        : "positive"
                    }`}
                  >
                    <span
                      style={{
                        color: profit > 0 ? "rgb(14, 203, 129)" : "red",
                        fontWeight: 500,
                      }}
                    ></span>
                    {profit && "+"}
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </div>
                </div>
                <div className='lower-crypto-card'>
                  {symbol}
                  {numWithCommas(coin.current_price.toFixed(2))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CryptoCard;
