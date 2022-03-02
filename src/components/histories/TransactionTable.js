import React from 'react';
import '../../styles/histories/TransactionTable.css';
import buy from '../../pics/transactionTypes/buy.png';
import sell from '../../pics/transactionTypes/sell.png';
import { CryptoState } from '../../contexts/CryptoContext';
import { numWithCommas } from '../../services/numWithCommas';
import { RateState } from '../../contexts/RateContext';
import { TransactionState } from '../../contexts/TransactionContext';

const TransactionTable = () => {
  const { symbol } = CryptoState();
  const { rate } = RateState();
  const { transaction } = TransactionState();

  return (
    <>
      <table style={{ color: 'white' }}>
        <tr>
          <th style={{ width: '15%' }}>Name</th>
          <th style={{ width: '15%' }}>Type</th>
          <th style={{ width: '15%' }}>Date</th>
          <th style={{ width: '15%' }}>Time</th>
          <th style={{ width: '15%' }}>Price</th>
          <th style={{ width: '20%' }}>Amount</th>
        </tr>

        {transaction.length > 0 ? (
          transaction.map((item) => {
            return (
              <tr className='tr-table'>
                <td>
                  <img src={item.img.image} alt='' width={30} height={30} />
                  &nbsp; {item.coinName}
                </td>
                <td>
                  <img
                    src={item.transactionType === 'SELL' ? sell : buy}
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
                  {symbol === '฿'
                    ? numWithCommas((+item.pricePerCoin * rate).toFixed(2))
                    : numWithCommas((+item.totalSpent).toFixed(2))}
                </td>
                <td>
                  {item.transactionType === 'SELL' ? '-' : '+'}
                  {symbol}{' '}
                  {symbol === '฿'
                    ? numWithCommas(((+item.pricePerCoin * item.quanity) * rate).toFixed(2))
                    : numWithCommas((+item.pricePerCoin * item.quanity ).toFixed(2))}{' '}
                  <br />
                  <span
                    className={`coin-in-table-${
                      item.transactionType === 'SELL' ? 'negative' : 'positive'
                    }`}
                  >
                    {item.transactionType === 'SELL' ? '-' : '+'} {item.quanity}{' '}
                    {item.img.symbol.toUpperCase()}
                  </span>
                </td>
              </tr>
            );
          })
        ) : (
          <></>
        )}
      </table>
    </>
  );
};

export default TransactionTable;
