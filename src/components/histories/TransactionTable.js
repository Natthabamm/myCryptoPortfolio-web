import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/histories/TransactionTable.css";
import sol from "../../pics/crypto/sol.png";
import buy from "../../pics/transactionTypes/buy.png";
import sell from "../../pics/transactionTypes/sell.png";
import { CryptoState } from "../../contexts/CryptoContext";
import { numWithCommas } from "../../services/numWithCommas";
import { RateState } from "../../contexts/RateContext";

const TransactionTable = () => {
  const [transaction, setTransaction] = useState([]);
  const { symbol, currency, matchCryptoName } = CryptoState();
  const { rate } = RateState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/transactions");
        const result = res.data.transactions.map((coin) => {
          return {
            ...coin,
            img: matchCryptoName(coin.coinName),
          };
        });
        console.log(result);

        setTransaction(result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  console.log(rate)
  console.log(symbol)

  return (
    <>
      <table style={{ color: "white" }}>
        <tr>
          <th style={{ width: "15%" }}>Name</th>
          <th style={{ width: "15%" }}>Type</th>
          <th style={{ width: "15%" }}>Date</th>
          <th style={{ width: "15%" }}>Time</th>
          <th style={{ width: "15%" }}>Price</th>
          <th style={{ width: "20%" }}>Amount</th>
        </tr>

        {transaction.map((item) => {
          return (
            <tr>
              <td>
                <img src={item.img.image} alt='' width={30} height={30} />
                &nbsp; {item.coinName}
              </td>
              <td>
                <img
                  src={item.transactionType === "SELL" ? sell : buy}
                  alt=''
                  width={30}
                  height={30}
                />
                &nbsp; {item.transactionType}
              </td>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>
                {symbol}
                {numWithCommas((+item.pricePerCoin).toFixed(2))}
              </td>
              <td>
                {item.transactionType === "SELL" ? "-" : "+"}
                {symbol} {symbol === '฿' ? numWithCommas((+item.totalSpent * rate).toFixed(2)) : numWithCommas((+item.totalSpent).toFixed(2)) } <br />
                <span
                  className={`coin-in-table-${
                    item.transactionType === "SELL" ? "negative" : "positive"
                  }`}
                >
                  {item.transactionType === "SELL" ? "-" : "+"} {item.quanity}{" "}
                  {item.img.symbol.toUpperCase()}
                </span>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default TransactionTable;
